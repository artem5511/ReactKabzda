import React from "react";
import {element} from 'prop-types';
import {ItemType} from './Accordion';

export type PropsTypeBody = {
    items: ItemType[]
    onClick: (value: any)=> void
}

export const AccordionBody = (props: PropsTypeBody) => {
    return <ul>
        {props.items.map((el, index) => <li onClick={()=> {props.onClick(el.value)}} key={index}>{el.title}</li>)}
    </ul>
}
