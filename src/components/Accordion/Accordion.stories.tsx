import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";
export default {
    title: 'Accordion',
    component: Accordion,
}
const callBack=action("accordion mode change event fired")
export const MenuCollapsedMode = () => <Accordion collapsed={true} titleValue={"MENU"} onChange={callBack}/>
export const UsersUnCollapsedMode = () => <Accordion collapsed={false} titleValue={"----USERS----"} onChange={callBack}/>



export const ModeChanged = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"----USERS----"} collapsed={value} onChange={()=>{setValue(!value)}}/>
}




