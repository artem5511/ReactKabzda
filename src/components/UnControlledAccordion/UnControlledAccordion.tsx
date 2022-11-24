import React, {useState} from "react";
import {AccordionBody, PropsTypeBody} from "../Accordion/AccordionBody";

type PropsType = {
    titleValue: string
    // collapsed: boolean
}

type PropsTypeAll = {
    PropsType: PropsType
    PropsTypeBody: PropsTypeBody
}

export const UnControlledAccordion = (props: PropsTypeAll) => {

    let [collapsed, setCollapsed] = useState(false)
return (
    <div>
        <AccordionTitle title={props.PropsType.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
        {!collapsed && <AccordionBody items={props.PropsTypeBody.items} onClick={props.PropsTypeBody.onClick}/>}
    </div>
)
}

type AccordionTitlePropsType = {
    title: string
    onClick: ()=> void
}

function AccordionTitle (props:AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>{props.onClick()}}>--- {props.title} ---</h3>
    )
}

// export const Accordion2 = (props: PropsType) => {
//     if (props.collapsed === true) {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody title={props.titleValue}/>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//             </div>
//         )
//     }
// }
