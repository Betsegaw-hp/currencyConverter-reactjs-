import React from 'react';

// get date value
function CurrencyHistory(props) {
  const {
    handleDateChange,
    pickDate,
  } = props;
  const current = new Date();
  const today = `${current.getFullYear()}-${current.getMonth() +1}-${current.getDate()}`;
  return(
    <>
    <h3>Want to Know about past Currency Histories?</h3>
    <p>Pick your Date. By default it will be latest </p>
    <input type="date" 
           min="1999-01-04"
           max={today}
           value={pickDate}
           onChange={handleDateChange}/>
    </>
  );
}

export default CurrencyHistory;
