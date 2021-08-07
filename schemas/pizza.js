import PriceInput from "../components/PrinceInput";

export default {
// computer name
    name: 'pizza',
    // visible title
    title: 'Pizzas',
    type: 'document',

    icon: () => '🍕',
    fields: [
        
            {
                name: 'name',
                title: 'Pizza Name',
                type: 'string',
                description: 'Name of The Pizzas',
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
                name: 'image',
                title: 'Image',
                type: 'image',
                options:{
                    hotspot: true,
                }
            },
            {
                name: 'price',
                title: 'Price',
                type: 'number',           
                description: 'Price of the Pizza in Cents',
                inputComponent: PriceInput,
                validation: Rule => [
                    Rule.required().min(10).error('a minimum price of 10  GBP s is required'),
                    Rule.max(50).error('a max price of 50  is set'),
                  ]
 
              
            },
            {
                name: 'toppings',
                title: 'Toppings',
                type: 'array',
                of: [{type: 'reference', to:[{type: 'topping'}] }]
            },

    ],

    preview: {

        select: {
            title: 'name',
            media: 'image',
            toppings0: 'toppings.0.name',
            toppings1: 'toppings.1.name',
            toppings2: 'toppings.2.name',
            toppings3: 'toppings.3.name',
            
        },
    
        prepare: ({title, media, ...toppings}) => {
            // 1 filter undefined toppings out
            console.log('STAY');
            const tops = Object.values(toppings).filter(Boolean);
            // 2 return preview object for the pizza
            return {

                title,
                media,
                subtitle: tops.join(','),
            }
            
             
    },

}, 
    
};