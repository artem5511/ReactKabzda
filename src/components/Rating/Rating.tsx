 import React from "react";
import {Star} from "../Star/Star";

export type RaitingValueType = 0 | 1 | 2 | 3 | 4 |5

type TypeRatingProps = {
    value: RaitingValueType
    onClick: (value: RaitingValueType)=> void
}

export const Rating = (props: TypeRatingProps) => {
        return (
            <div>
                <Star selected={(props.value > 0)} onClick={props.onClick} value={1}/>
                <Star selected={(props.value > 1)} onClick={props.onClick} value={2}/>
                <Star selected={(props.value > 2)} onClick={props.onClick} value={3}/>
                <Star selected={(props.value > 3)} onClick={props.onClick} value={4}/>
                <Star selected={(props.value > 4)} onClick={props.onClick} value={5}/>
            </div>
        )
    }
