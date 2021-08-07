export default {
    // computer name
        name: 'jobyear',
        // visible title
        title: 'Job Year',
        type: 'document',
        icon: () => '⏲️📅 ',
        fields: [            
                {
                    name: 'name',
                    title: 'Job Year',
                    type: 'string',
                    description: 'What year was this job in?'
                },                         
                
            
                            
        ],
        preview: {
            select: { 
                name: 'name',
                jobyear: 'Job Year', 
            },
            prepare: ({name, jobyear}) => ({
                title: `${name} ${jobyear ? '📅⏲️' : ''}`, 
            }),
        },
        
};