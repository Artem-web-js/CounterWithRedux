import React, {useState} from 'react';
import './App.css';
import {RightBlock} from "./RightBlock/RightBlock";
import {LeftBlock} from "./LeftBlock/LeftBlock";

function App() {



    let [maxValue, setMaxValue] = useState(5);
    let [startValue, setStartValue] = useState(0);
    let [counter, setCounter] = useState<string | number>(0);

    const [error, setError] = useState<boolean>(false);

    let [incDis, setIncDis] = useState<boolean>(true);
    let [setDis, setSetDis] = useState<boolean>(false);

    const saveStateLoc = (key: string, state: any) => {
        let stateToString = JSON.stringify(state)
        localStorage.setItem(key, stateToString)
    }

    const restoreState = (key: string) => {
        let stateToString = localStorage.getItem(key)
        if (stateToString === null) return {maxValue: 5, startValue: 0}
        else return JSON.parse(stateToString)
    }

    const changeMinValue = (minValue: number) => {
        if (minValue < 0 || minValue > maxValue || minValue === maxValue) {
            setError(true)
            setSetDis(true)
        } else {
            setError(false)
            setSetDis(false)
        }
        setStartValue(minValue)
        setIncDis(true)
    }

    const changeMaxValue = (maxValue: number) => {
        if (maxValue < 0 || startValue > maxValue || startValue === maxValue) {
            setError(true)
            setSetDis(true)
        } else {
            setError(false)
            setSetDis(false)
        }
        setMaxValue(maxValue)
        setIncDis(true)
    }

    const set = () => {
        setSetDis(true)
        setIncDis(false)
        setCounter(startValue)

        saveStateLoc('state', {maxValue: maxValue, startValue: startValue})
    }
    const inc = () => {
        setCounter(counter < maxValue
            ? +counter + 1
            : maxValue)
        if (counter === maxValue - 1) {
            setIncDis(true)
        }
    }

    const res = () => {
        setCounter(startValue)
        setIncDis(false)
    }

    return (
        <div className="App">
            <LeftBlock
                setCounter={setCounter}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                changeMinValue={changeMinValue}
                changeMaxValue={changeMaxValue}
                startValue={startValue}
                set={set}
                setDis={setDis}
                error={error}
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
            />
        </div>
    );
}

export default App;
