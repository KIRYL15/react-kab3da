import React from 'react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}
const callBack = action('on or off clicked')

export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callBack}/>
export const OnMode = () => <UncontrolledOnOff defaultOn={true}  onChange={callBack}/>
export const DefaultInputValue = () => <input defaultValue={'yo'}/>






