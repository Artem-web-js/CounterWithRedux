import React, {useState} from 'react';
import './App.css';
import {RightBlock} from "./RightBlock/RightBlock";
import {LeftBlock} from "./LeftBlock/LeftBlock";

function App() {

    let [maxValue, setMaxValue] = useState(5);
    let [startValue, setStartValue] = useState(1);
    let [counter, setCounter] = useState<string | number>('Enter value');

    const [error, setError] = useState<boolean>(false);

    let [incDis, setIncDis] = useState<boolean>(true);
    let [setDis, setSetDis] = useState<boolean>(false);
    let [resetDis, setResetDis] = useState<boolean>(true);

    const changeMinValue = (minValue: number) => {
        if (minValue < 0 || minValue > maxValue || minValue === maxValue) {
            setError(true)
            setSetDis(true)
        } else {
            setError(false)
            setSetDis(false)
        }
        setStartValue(minValue)
    }
    const set = () => {
        setSetDis(true)
        setCounter(startValue)
        setIncDis(false)
    }
    const inc = () => {
        setCounter(counter < maxValue
            ? +counter + 1
            : maxValue)
        if (counter === maxValue - 1) {
            setIncDis(true)
            setResetDis(false)
        }
    }

    const res = () => {
        setResetDis(true)
        setCounter(startValue)
    }

    return (
        <div className="App">
            <LeftBlock
                setCounter={setCounter}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                changeMinValue={changeMinValue}
                startValue={startValue}
                set={set}
                setDis={setDis}
            />
            <RightBlock
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                startValue={startValue}
                setStartValue={setStartValue}
                counter={counter}
                setCounter={setCounter}
                error={error}
                inc={inc}
                incDis={incDis}
                res={res}
                resetDis={resetDis}
            />
        </div>
    );
}

export default App;
