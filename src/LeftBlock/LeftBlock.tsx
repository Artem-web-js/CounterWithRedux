import React from 'react';
import {Button} from "../Button/Button";

export type LeftBlockProps = {
    maxValue: number
    startValue: number
    setCounter: (value: number) => void
    setMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
    set: () => void
    setDis: boolean
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
                           onChange={e => props.changeMinValue(+e.currentTarget.value)}
                           className={"input"}
                    />
                </div>
            </div>

            <div className="block1">
                <Button title={buttonSet.title}
                        disabled={props.setDis}
                        onClick={() => {
                            props.set()
                        }}
                        //className={"button"}
                />
            </div>
        </div>
    )
}