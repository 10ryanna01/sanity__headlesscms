export default {
    // computer name
        name: 'personpizza',
        // visible title
        title: 'Slicemasters',
        type: 'document',
        icon: () => '👱 🤸', 
        fields: [
            
                {
                    name: 'name',
                    title: 'Name',
                    type: 'string', 
                },
            
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    description: 'Tell us a bit about them',
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
                
    
        ],
    
    
   
        
};