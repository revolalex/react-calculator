import React, { Component } from 'react';
import Clock from "./components/Clock";

// import css
import './App.css';

// child components
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";


class App extends Component {
    constructor(){
        // call the constructor
        super();

        this.state = {
            result: ""
        }
    }

    // Function call on every click, button is the parameter 
    // with the value of the press button
    onClick = button => {
        // Controle the touch press
        if(button === "="){
            // call function calculate
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            // setState is use to modify the state (result)
            this.setState({
                result: this.state.result + button
            })
        }
    };


    // Calculate the result of our expression, 
    // this is triggered, when “=” button is pressed.
    calculate = () => {
        try {
            this.setState({
                // eval(str) allow us to evaluate a character link
                // eslint-disable-next-line 
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };
    // Clear our output, this is trigered when “C” is pressed.
    reset = () => {
        this.setState({
            result: ""
        })
    };
    // Clear the last character that was pressed. triggered on “CE”.
    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };



    // What we see
    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Calculator</h1>
                    <Clock/>
                    {/* component with props */}
                    <ResultComponent result={this.state.result}/>
                    {/* component with function onClick */}
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;