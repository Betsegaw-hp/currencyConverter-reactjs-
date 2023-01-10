import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CurrencyConverter from './currencyConverter';
import CurrencyHistory from './CurrencyHistory';


function App() {
  const [currencyOption , setCurrencyOption] = useState();
  const [currencyFrom , setCurrencyFrom] = useState();
  const [currencyTo , setCurrencyTo] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount , setAmount] = useState(1);
  const [isFromCurrency, setIsFromCurrency] = useState(true);
  const [pickDate , setPickDate] = useState('live');

  // if you pick future time it will be latest
  if(pickDate !== 'live') {
    const current = new Date().getFullYear(); 
    
  if(pickDate.slice(0,4) >= `${current}`) {
     setPickDate('live');
    }
  }
  
  const BASE_URL  = `https://api.apilayer.com/currency_data/${pickDate}`;
  // Fix - make it env var
  const apiKey = 'nO4BhDUfDqlrXNkDms6RaOs69O9Lizeq';


  //fetch intialy and set key of currencies
  useEffect(() => {
    axios({
       method: 'get', 
       url: BASE_URL,
       responseType: 'json',
       auth: {
        apikey: apiKey,
       }
    })
    .then(res => {
      const firstCurrency = Object.keys(res.data.rates)[0];
      setCurrencyOption([res.data.base, ...Object.keys(res.data.rates)]);
      setCurrencyFrom(res.data.base)
      setCurrencyTo(firstCurrency)
    }).catch(err=> console.log(err))
  },[BASE_URL])

  //fetch when currency options change and set exchangeRate
  useEffect(()=> {
    if(currencyFrom != null && currencyTo != null) {
      axios(`${BASE_URL}?base=${currencyFrom}&symbols=${currencyTo}`)
      .then( res => setExchangeRate(res.data.rates[currencyTo])
      )
      .catch(err => console.log(err))
    }
  }, [currencyFrom, currencyTo,BASE_URL])

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
      <div className="converter coloumn">
    <h3>Currency Changer</h3>
    
    <CurrencyConverter currencyOption={currencyOption}
    selectedOption={currencyFrom}
    onChangeCurrency={e => setCurrencyFrom(e.target.value)}
    handleAmountChange={handleFromAmountChange}
    amount={fromAmount}
    />
    <div className="equals">=</div>
    <CurrencyConverter currencyOption= {currencyOption}
    selectedOption={currencyTo}
    onChangeCurrency={e => setCurrencyTo(e.target.value)}
    handleAmountChange={handleToAmountChange}
    amount={toAmount}
    />
  </div>
  <div className="history coloumn">
 <CurrencyHistory 
      handleDateChange={e => setPickDate(e.target.value)}
      pickDate={pickDate}/>
      </div>
    </div>
  );
}

export default App;
