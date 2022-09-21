import React from "react";

type PropsType = {
    selected: boolean
}
export const Star = (props: PropsType) => {
    if (props.selected === true) {
        return <span><b>Star</b></span>
        } else {
    return <span>Star</span>
    }
}