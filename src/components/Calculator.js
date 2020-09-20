import React, { useState } from 'react';

function Calculator(){

const [weight, setWeight] = useState("");
const [height, setHeight] = useState("");
const [total, setTotal] = useState(weight*height);


function handleClick(){
    console.log(weight);
    console.log(height);
setTotal(weight * height);

//let array = [setTotal]

}


function handleRestart() {
  setWeight('')
  setHeight('')
  setTotal('')
}



    return(
        <div className="formContainer">
            <input
            name="weight"
            onChange={e => setWeight(+e.target.value)}
            type="number" 
            placeholder="weight" 
            value={weight} 
            className="inputForm"   
            />
            <input 
            name="height"
            onChange={e => setHeight(+e.target.value)}
            type="number"
            placeholder="height" 
            value={height}
            className="inputForm"
            />
            
            <button onClick={handleClick} className="buttonForm" type="submit">Calculate</button>
        
        <p className="answer">Your BMI is {total}</p>

        <button onClick={handleRestart} className="buttonForm" type="submit">Restart</button>
        
        
        </div>
    );
}

export default Calculator;

//<Start onClick= {handleRestart}/>