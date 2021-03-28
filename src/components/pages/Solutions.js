import React from 'react';

const Solutions = () => {
  return (
    <div className='home'>
      <h1>Solutions</h1>
    </div>
  );
};

const OS = () => {
    return (
      <div className='reports'>
        <h1>Office Solutions</h1>
      </div>
    );
  };
  
  const GS = () => {
    return (
      <div className='reports'>
        <h1>Government Solutions</h1>
      </div>
    );
  };
  
  const CS = () => {
    return (
      <div className='reports'>
        <h1>Classroom Solutions</h1>
      </div>
    );
  };
  
  const SN = () => {
    return (
      <div className='reports'>
        <h1>Service and Networking</h1>
      </div>
    );
  };
  
  export {
      Solutions,
      OS,
      GS,
      CS,
      SN,
  }