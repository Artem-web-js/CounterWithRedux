import React from "react";

type CounterType = {
    maxValue: number
    counter: number | string
}
export const Counter = (props: CounterType) => {
    return (
        <div className={`counter ${props.counter === props.maxValue ? "error" : ""}`}>
            {props.counter}
        </div>
    )
}