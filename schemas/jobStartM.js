export default {
    // computer name
        name: 'startmonth',
        // visible title
        title: 'start month of job role',
        type: 'document',
        icon: () => '📅👷  ',
        fields: [            
                {
                    name: 'name',
                    title: 'start month of job role',
                    type: 'string',
                    description: 'what month did you start this role in'
                },                         
                
            
                            
        ],
        preview: {
            select: { 
                name: 'name',
                startmonth: 'start month of job role', 
            },
            prepare: ({name, startmonth}) => ({
                title: `${name} ${startmonth ? '📅👷' : ''}`, 
            }),
        },
        
};