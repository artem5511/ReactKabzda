import React from "react";
import {element} from 'prop-types';
import {ItemType} from './Accordion';

type PropsType = {
    items: ItemType[]
    onClick: (value: any)=> void
}

export const AccordionBody = (props: PropsType) => {
    return <ul>
        {props.items.map((el, index) => <li onClick={()=> {props.onClick(el.value)}} key={index}>{el.title}</li>)}
    </ul>
}
