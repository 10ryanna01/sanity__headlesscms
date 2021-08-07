export default {
    // computer name
        name: 'topping',
        // visible title
        title: 'Toppings',
        type: 'document',
        icon: () => '🌶🌶🌶',
        fields: [            
                {
                    name: 'name',
                    title: 'Pizza Name',
                    type: 'string',
                    description: 'What is the name of that topping?'
                },
                            
                {
                    name: 'vegitarian',
                    title: 'Vegetarian',
                    type: 'boolean',
                    description: 'What is the name of that topping?',
                    options:{
                    layout: 'checkbox',
                },
                },
            
                            
        ],
        preview: {
            select: { 
                name: 'name',
                vegitarian: 'vegitarian', 
            },
            prepare: ({name, vegitarian}) => ({
                title: `${name} ${vegitarian ? '🍀🥬🌱' : ''}`, 
            }),
        },
        
};