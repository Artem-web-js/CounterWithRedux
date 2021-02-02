import React from 'react';
import {Button} from "../Button/Button";

export type LeftBlockProps = {
    maxValue: number
    minValue: number
    changeMinVal: (value: number) => void
    changeMaxVal: (value: number) => void
    set: (startValue: number, maxValue: number) => void
    setButton: boolean
    error: boolean
}


export const LeftBlock = (props: LeftBlockProps) => {

    const buttonSet = {
        className: "disable",
        title: "set"
    }

    return (
        <div className="LeftBlock">
            <div className={"changeWindow"}>
                <div className={"icon"}>
                    <span>max value:</span>
                    <input type="number"
                           value={props.maxValue}
                           onChange={e => {
                               props.changeMaxVal(+e.currentTarget.value)
                           }}
                           className={`input ${props.error ? 'inputError' : ''}`}
                    />
                </div>
                <div className={"icon"}>
                    <span>start value:</span>
                    <input type="number"
                           value={props.minValue}
                           onChange={e => props.changeMinVal(+e.currentTarget.value)}
                           className={`input ${props.error ? 'inputError' : ''}`}
                    />
                </div>
            </div>

            <div className="block1">
                <Button title={buttonSet.title}
                        disabled={props.setButton}
                        onClick={() => props.set(props.minValue, props.maxValue)}
                />
            </div>
        </div>
    )
}