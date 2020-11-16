import React from "react";

type ButtonType = {
    title: string
    onClick: () => void
    className: string
}
export const Button = (props: ButtonType) => {
    return (
        <>
            <button onClick={props.onClick} className={props.className}>{props.title}</button>
        </>
    )
}