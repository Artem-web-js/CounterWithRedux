import React from 'react';
import {Button} from "../Button/Button";

export type LeftBlockProps = {
    maxValue: number
    startValue: number
    setCounter: (value: number) => void
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
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
                           onChange={e => props.setMaxValue(+e.currentTarget.value)}
                           className={"input"}
                    />
                </div>
                <div className={"icon"}>
                    <span>start value:</span>
                    <input type="number"
                           value={props.startValue}
                           onChange={e => props.setStartValue(+e.currentTarget.value)}
                           className={"input"}
                    />
                </div>
            </div>

            <div className="block1">
                <Button title={buttonSet.title}
                        onClick={ () => {props.setCounter(props.startValue)}}
                        className={"button"}
                />
            </div>
        </div>
    )
}