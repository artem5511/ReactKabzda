import React from "react";
import exp from 'constants';
import {RaitingValueType} from '../Rating/Rating';

type PropsType = {
    selected: boolean
    value: RaitingValueType
    onClick: (value: RaitingValueType)=> void
}

export function Star (props:PropsType) {
    return <span onClick={()=>{props.onClick(props.value)}}>
        {props.selected ? <b>star</b> : "star"}
    </span>

}

// export const Star = (props: PropsType) => props.selected ? <b>star</b> : "star"

//
//     if (props.selected === true) {
//         return <span><b>Star</b></span>
//         } else {
//     return <span>Star</span>
//     }
// }