export default {
    // computer name
        name: 'endingmonth',
        // visible title
        title: 'ending month of job role',
        type: 'document',
        icon: () => '🏁  ',
        fields: [            
                {
                    name: 'name',
                    title: 'end month of job role',
                    type: 'string',
                    description: 'what month did you end this role in'
                },                         
                
            
                            
        ],
        preview: {
            select: { 
                name: 'name',
                endingmonth: 'end month of job role', 
            },
            prepare: ({name, endingmonth}) => ({
                title: `${name} ${endingmonth ? '📅👷' : ''}`, 
            }),
        },
        
};