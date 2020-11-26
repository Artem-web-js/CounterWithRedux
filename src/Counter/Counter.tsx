import React from "react";

type CounterType = {
    maxValue: number
    counter: number | string
    error: boolean
}
export const Counter = (props: CounterType) => {
    return (
        <div className={`counter ${props.counter === props.maxValue || props.error ? "error" : ""}`}>
            {props.error ? 'Incorrect value' : props.counter}
        </div>
    )
}