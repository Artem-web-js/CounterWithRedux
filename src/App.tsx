import React from 'react';
import './App.css';
import {RightBlock} from "./RightBlock/RightBlock";
import {LeftBlock} from "./LeftBlock/LeftBlock";
import {useDispatch, useSelector} from "react-redux";
import {changeMaxValue, changeMinValue, increment, reset, setValue, StateType} from "./store/counter-reducer";
import {AppRootStateType} from './store/store';
import {counterSetValues} from './services/localStorageServices'

function App() {

    const countSate = useSelector<AppRootStateType, StateType>(state => state)
    const dispatch = useDispatch();

    const changeMinVal = (minValue: number) => {
        dispatch(changeMinValue(minValue))
    }

    const changeMaxVal = (maxValue: number) => {
        dispatch(changeMaxValue(maxValue))
    }

    const set = (startValue: number, maxValue: number) => {
        dispatch(setValue(startValue, maxValue))

        counterSetValues({maxValue: maxValue, minValue: startValue})
    }
    const inc = () => {
        dispatch(increment())
    }

    const res = () => {
        dispatch(reset())
    }

    return (
        <div className="App">
            <LeftBlock
                maxValue={countSate.maxValue}
                minValue={countSate.minValue}
                error={countSate.error}
                changeMinVal={changeMinVal}
                changeMaxVal={changeMaxVal}
                set={set}
                setButton={countSate.setButton}
            />
            <RightBlock
                maxValue={countSate.maxValue}
                minValue={countSate.minValue}
                counter={countSate.counter}
                error={countSate.error}
                inc={inc}
                res={res}
                incrementButton={countSate.incrementButton}
                resetButton={countSate.resetButton}
            />
        </div>
    );
}

export default App;