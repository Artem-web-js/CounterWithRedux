import React, {useState} from 'react';
import './App.css';
import {RightBlock} from "./RightBlock/RightBlock";
import {LeftBlock} from "./LeftBlock/LeftBlock";

function App() {

    let [counter, setCounter] = useState(0);
    let [maxValue, setMaxValue] = useState(0);
    let [startValue, setStartValue] = useState(0);
    // const [error, setError] = useState<number | null>(null);

    if(maxValue === startValue) {
        //error
        //disable buttons

    }
    if(maxValue || startValue < 0) {
        //error
        //disable buttons
    }
    if(maxValue < startValue) {
        //error
        //disable buttons
    }

    return (
        <div className="App">
            <LeftBlock
                setCounter={setCounter}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                startValue={startValue}
                setStartValue={setStartValue}

            />
            <RightBlock
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                startValue={startValue}
                setStartValue={setStartValue}
                counter={counter}
                setCounter={setCounter}
                // error={error}
            />
        </div>
    );
}

export default App;
