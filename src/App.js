import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BASE_URL  = 'https://api.exchangeratesapi.io/latest';

function CurrrencyChanger(props) {
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


function App() {
  const [currencyOption , setCurrencyOption] = useState();
  const [currencyFrom , setCurrencyFrom] = useState();
  const [currencyTo , setCurrencyTo] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount , setAmount] = useState(1);
  const [isFromCurrency, setIsFromCurrency] = useState(true);

  //fetch intialy and set key of currencies
  useEffect(() => {
    axios(BASE_URL)
    .then(res => {
      const firstCurrency = Object.keys(res.data.rates)[0];
      setCurrencyOption([res.data.base, ...Object.keys(res.data.rates)]);
      setCurrencyFrom(res.data.base)
      setCurrencyTo(firstCurrency)
    }).catch(err=> console.log(err))
  },[])

  //fetch when currency options change and set exchangeRate
  useEffect(()=> {
    if(currencyFrom != null && currencyTo != null) {
      axios(`${BASE_URL}?base=${currencyFrom}&symbols=${currencyTo}`)
      .then( res => setExchangeRate(res.data.rates[currencyTo])
      )
      .catch(err => console.log(err))
    }
  }, [currencyFrom, currencyTo])

  let toAmount, fromAmount ;
  if(isFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate ;
  } else {
    // reverse 
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

// seting amount and seting where it is from
  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setIsFromCurrency(true)
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setIsFromCurrency(false)
  }
  return (
    <div className="container">
    <h1>Currency Changer</h1>
    
    <CurrrencyChanger currencyOption={currencyOption}
    selectedOption={currencyFrom}
    onChangeCurrency={e => setCurrencyFrom(e.target.value)}
    handleAmountChange={handleFromAmountChange}
    amount={fromAmount}
    />
    <div>=</div>
    <CurrrencyChanger currencyOption= {currencyOption}
    selectedOption={currencyTo}
    onChangeCurrency={e => setCurrencyTo(e.target.value)}
    handleAmountChange={handleToAmountChange}
    amount={toAmount}
    />
    </div>
  );
}

export default App;
