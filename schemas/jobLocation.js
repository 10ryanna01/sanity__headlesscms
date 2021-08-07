export default {
    // computer name
        name: 'joblocation',
        // visible title
        title: 'Job Location',
        type: 'document',
        icon: () => '🌍 ',
        fields: [            
                {
                    name: 'name',
                    title: 'Job Location',
                    type: 'string',
                    description: 'Where was your role location'
                },                         
                
            
                            
        ],
        preview: {
            select: { 
                name: 'name',
                joblocation: 'Job Location', 
            },
            prepare: ({name, joblocation}) => ({
                title: `${name} ${joblocation ? '🌍' : ''}`, 
            }),
        },
        
};