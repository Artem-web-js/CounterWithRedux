import React from "react";

type ButtonType = {
    title: string
    onClick: () => void
    // className: string
    disabled: boolean
}
export const Button = (props: ButtonType) => {
    return (
        <>
            <button onClick={props.onClick} /*className={props.className}*/ disabled={props.disabled}>{props.title}</button>
        </>
    )
}