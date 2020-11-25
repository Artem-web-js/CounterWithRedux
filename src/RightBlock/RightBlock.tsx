import React from 'react';
import {Button} from "../Button/Button";
import {Counter} from '../Counter/Counter';

export type RightBlockProps = {
    error: boolean
    counter: number | string
    setCounter: (value: number) => void
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    inc: () => void
    incDis: boolean
    res: () => void
    resetDis: boolean
}

export const RightBlock = (props: RightBlockProps) => {

    const buttonInc = {
        //className: !props.startValue || props.counter === props.maxValue ? "disable" : "",
        title: "inc"
    }
    const buttonReset = {
        //className: props.counter === props.startValue || props.counter !== props.maxValue ? "disable" : "",
        title: "reset"
    }

    // const incHandler = () => {props.setCounter(props.counter < props.maxValue
    //     ? +props.counter + 1
    //     : props.maxValue)}

    return (
        <div className="RightBlock">

            <Counter maxValue={props.maxValue} counter={props.counter} error={props.error}/>

            <div className="block1">
                <Button title={buttonInc.title}
                        disabled={props.incDis}
                        onClick={() => {
                            props.inc()
                        }}
                        //className={buttonInc.className}
                />
                <Button title={buttonReset.title}
                        disabled={props.resetDis}
                        onClick={() => {
                            props.res()
                        }}
                        //className={buttonReset.className}
                />
            </div>
        </div>
    )
}