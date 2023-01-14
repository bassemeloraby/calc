import React, { Fragment, useState } from 'react';

function CalcHelp() {
  const [text, setText] = useState(0);
  

  const result = (text * 30) / 1500;

  // console.log(result);

  return (
    <Fragment>
      <h2>CalcHelp</h2>
      <section>
      <h3>Insulin flexpen</h3>
      <input type="number" onChange={(e) => setText(e.target.value)} />
      <label>&nbsp; Units/Day</label>
      <div><span className='bg-warning'>{result}</span> pack of 5 pen/month</div>
      </section>
      <hr/>
      <section>
      <h3>Paracetamol</h3>
      <img src="https://i.ibb.co/g9tDwVb/Untitled.png" alt="Untitled" border="0"></img>
      </section>
    </Fragment>
  );
}

export default CalcHelp;
