import React, {useState} from "react";
import {AccordionTitle} from "../Accordion/AccordionTitle";
import {AccordionBody} from "../Accordion/AccordionBody";

type PropsType = {
    titleValue: string
    // collapsed: boolean
}

export const UnControlledAccordion = (props: PropsType) => {

    let [collapsed, setCollapsed] = useState(false)
return (
    <div>
        <AccordionTitle title={props.titleValue}/> <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>
        {!collapsed && <AccordionBody/>}
    </div>
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
