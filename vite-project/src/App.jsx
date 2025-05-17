import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [fullname, setFullname] = useState('');
  const [error, setError] = useState({
    first: false,
    last : false
  });

  const handlefirst = (e) =>{
    setFirst(e.target.value);
    setError({...error, first: false});
  }
  const handlelast = (e) =>{
    setLast(e.target.value);
    setError({...error, last: false});
  }

  const handlesubmit = (e) =>{
    e.preventDefault();
  
  const firstval = first.trim();
  const lastval = last.trim();
  const newerror = {
    first: firstval.trim() === '',
    last: lastval.trim()   === '',
  }
  setError(newerror);
    if(!newerror.first && !newerror.last){
      setFullname(`Full Name: ${firstval.trim()} ${lastval.trim()}`)
    }
    else{
      setFullname('');
    }
  };
  const isSubmitDisabled  = first.trim() === '' || last.trim() === '';
  return (
    <div className='display'>
      <h1 className='name'>Full Name Display</h1>
        <form action="form" onSubmit={handlesubmit}>
              <label className="firstName">First Name:</label>
              <input  type="text" placeholder='FirstName'  value={first} onChange={handlefirst} required/>  
          { error.first &&(
              <div className='error'>Please Enter first Name</div>
          )}
          <br />
            <label className="firstName">Last Name:</label>
              <input className='last' type="text" placeholder='LastName' value={last} onChange={handlelast} required />
              { error.last &&(
              <div className='error'>Please Enter Last Name</div>
          )} 

      <div className='button'>
        <button type="submit" className='submit'>Submit</button>
      </div>
    </form>

    {fullname  && (
      <div className='result'>{fullname} 
      </div>
    )}
  </div>
  );
};

export default App
