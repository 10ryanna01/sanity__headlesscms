 

 

export default {
// computer name
    name: 'jobrole',
    // visible title
    title: 'Job Roles',
    type: 'document', 

    icon: () => '👷‍♂️🏋️‍♂️🖥️ 🏗️🚦🚀',  
    fields: [
        
            {
                name: 'name',
                title: 'Job Role Name',
                type: 'string',
                description: 'describe the job role',              
               

            },
            {
                name: 'namecompany',
                title: 'Company Name',
                type: 'string',               
                description: 'what is the name of the company you worked for?',              
                

            },
            {
                name: 'companyoutline',
                title: 'outline of what company does',
                description: 'preivew of what the company is',     
                type: 'text',
                
                

            }, 
            {
                name: 'roleoverview',
                title: 'outline of the role',
                description: 'summary of the role there',
                type: 'text',                   
               

            }, 
            {
                name: 'skillsapplied',
                title: 'Skills Applied at the role',
                description: 'a summary of the skills you applied at the role',
                type: 'text',   
                

            }, 
            {
                name: 'skillslearned',
                title: 'Skills Leadnred at the role',
                description: 'a summary of the skills/tech/workflow you applied learned at the role',
                type: 'text',                  
    
            }, 

        
            {
                name: 'slug',
                title: 'Slug',
                type: 'slug',
                options: {
                    source: 'name',
                    maxLength: 100, 
                }
            },
                    
            
        
            {
                name: 'jobyear',
                title: 'Job Year',
                type: 'array',
                // can do reffernces to multiple meta/jobspec i.e. year, technology, location
                of: [{type: 'reference', to:[{type: 'jobyear'}] }]


            },
            {
                name: 'joblocation',
                title: 'Job Location',
                type: 'array',
                // can do reffernces to multiple meta/jobspec i.e. year, technology, location
                of: [{type: 'reference', to:[{type: 'joblocation'}] }]


            },

    ],

    preview: {

        select: {
            title: 'name',           
            joblocation0: 'joblocation.0.name',
            jobyear0: 'jobyear.0.name',
            
        },
    
  
        prepare: ({title, ...jobyear}) => {
            // 1 filter undefined toppings out
            console.log('STAY');
            const previewJobY = Object.values(jobyear ).filter(Boolean); 
            // 2 return preview object for the pizza
            return {
    
                title, 
                jobyear,
                subtitle: previewJobY.join(', '),
            }

        }, 
        
    }, 

 
    
};

 