import React from 'react';
import {Button} from "../Button/Button";
import {Counter} from '../Counter/Counter';

export type RightBlockProps = {
    error: boolean
    counter: number | string
    maxValue: number
    minValue: number
    inc: () => void
    incrementButton: boolean
    res: () => void
    resetButton: boolean
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
                        disabled={props.incrementButton}
                        onClick={props.inc}
                />
                <Button title={buttonReset.title}
                        disabled={props.resetButton}
                        onClick={props.res}
                />
            </div>
        </div>
    )
}