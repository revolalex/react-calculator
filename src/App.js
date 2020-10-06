import React, { useState } from 'react';
import Clock from "./components/Clock";

import './App.css';

import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";


function App() {
    const [result, setResult] = useState('')

    const onClick = button => {
        if (button === "=") {
            calculate()
        } else if (button === "C") {
            reset()
        } else if (button === "CE") {
            backspace()
        } else {
            setResult(result + button)
        }
    };

    const calculate = () => {
        try {
            //eslint-disable-next-line
            setResult (eval(result || "") + "")
        } catch (e) {
            setResult("error")
        }
    };

    const reset = () => setResult("")
    const backspace = () => setResult(result.slice(0, -1))

    return (
      <div className="calculator-body">
          <h1>Calculator</h1>

          <Clock/>
          <ResultComponent result={ result }/>
          <KeyPadComponent onClick={ onClick }/>
      </div>
    );
}

export default App;