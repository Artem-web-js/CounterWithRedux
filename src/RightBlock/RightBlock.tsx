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
}

export const RightBlock = (props: RightBlockProps) => {

    const buttonInc = {
        title: "inc"
    }
    const buttonReset = {
        title: "reset"
    }

    return (
        <div className="RightBlock">

            <Counter maxValue={props.maxValue} counter={props.counter} error={props.error}/>

            <div className="block1">
                <Button title={buttonInc.title}
                        disabled={props.incDis}
                        onClick={() => {
                            props.inc()
                        }}
                />
                <Button title={buttonReset.title}
                        disabled={false}
                        onClick={() => {
                            props.res()
                        }}
                />
            </div>
        </div>
    )
}