import React from 'react';
import {Button} from "../Button/Button";
import {Counter} from '../Counter/Counter';

export type RightBlockProps = {
    // error: number
    counter: number
    setCounter: any
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
}

export const RightBlock = (props: RightBlockProps) => {

    const buttonInc = {
        className: props.counter === props.maxValue ? "disable" : "",
        title: "inc"
    }
    const buttonReset = {
        className: props.counter === props.startValue || props.counter !== props.maxValue ? "disable" : "",
        title: "reset"
    }

    const incHandler = () => {props.setCounter(props.counter < props.maxValue
        ? props.counter + 1
        : props.maxValue)}

    return (
        <div className="RightBlock">

            <Counter maxValue={props.maxValue} counter={props.counter}/>

            <div className="block1">
                <Button title={buttonInc.title}
                        onClick={incHandler}
                        className={buttonInc.className}
                />
                <Button title={buttonReset.title}
                        onClick={() => {props.setCounter(props.startValue)}}
                        className={buttonReset.className}
                />
            </div>
        </div>
    )
}