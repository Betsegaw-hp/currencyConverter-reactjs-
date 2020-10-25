import React from 'react';

function CurrencyConverter(props) {
    const {
      currencyOption,
      selectedOption,
      onChangeCurrency,
      handleAmountChange,
      amount
    } = props;
    
    return(
      <>
      <input className="input" 
             type="number"
             placeholder="currency" 
              value={amount}
              onChange={handleAmountChange}/>
       <select className="selection" 
               value={selectedOption}
                onChange={onChangeCurrency}
              >
         { currencyOption && currencyOption.map((option)=> (
            <option key={option} value=
            {option}>{option}</option>
         ))}
          
         </select>       
              </>
    );
  }

  export default CurrencyConverter;