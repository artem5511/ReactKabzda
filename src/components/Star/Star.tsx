import React from "react";
import {RaitingValueType} from '../Rating/Rating';

type PropsType = {
    selected: boolean
    value: RaitingValueType
    onClick: (value: RaitingValueType)=> void
}

export const Star = (props: PropsType) => {
    return <span onClick={()=>{props.onClick(props.value)}}>
    {props.selected ? <b>star</b> : 'star'}

    </span>
}

// export const Star = (props: PropsType) => {
//     if (props.selected === true) {
//         return <span><b>Star</b></span>
//         } else {
//     return <span>Star</span>
//     }
// }