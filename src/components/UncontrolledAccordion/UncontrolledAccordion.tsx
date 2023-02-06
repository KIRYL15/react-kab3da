import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    onChange:(on:boolean)=>void

}
type AccordionPropsTitleType = {
    title: string,
    onClick: () => void,
}

function AccordionTitle(props: AccordionPropsTitleType) {
    return <h3 onClick={() => {
        props.onClick()
    }}>-- {props.title} --</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            < li>2</li>
            < li>3</li>
        </ul>)
}

export function UncontolledAccordion(props: AccordionPropsType) {
    //const collapsed = true
    let [collapsed, setCollapsed] = useState(true)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() =>setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
            {/*<button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>*/}
            {/*<button onClick={()=>{setCollapsed(true)}}>TOGGLE</button>*/}
        </div>)
}

