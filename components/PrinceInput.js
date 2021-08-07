import React  from 'react';
import PatchEvent, {set, unset } from 'part:@sanity/form-builder/patch-event';
 

function createPatchFrom(value){
    console.log('does it work???');
  return PatchEvent.from(value === '' ? unset() : set(Number(value)))
};

const formatMoney = Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'GBP',
}).format;

export default function PriceInput({type, value, onChange, inputComponent
}) {
    //change input price based on user input from onChange
    const handleChangePriceInput =(event) =>{
        onChange(createPatchFrom(event.target.value))
}


    return (
        <div>
            <h2>{type.title}  -     { value ? formatMoney(value ) : null} 
            </h2>
            <p>{type.description}</p>
            <input type={type.name} 
            value={value} 
            onChange={handleChangePriceInput} 
            ref={inputComponent} />
        </div>

    );


}

PriceInput.focus = () =>{
    this._inputElement.focus();

};