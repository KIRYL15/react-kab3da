import React from 'react';
import {UncontolledAccordion} from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledAccordion',
    component: UncontolledAccordion,
}
const callBack = action('accordion mode change event fired')

export const MenuCollapsedAccordion = () => <UncontolledAccordion
    onChange={callBack}
    titleValue={"MENU and TITLE"}/>
export const UserCollapsedAccordion = () => <UncontolledAccordion
    onChange={callBack}

    titleValue={"USER"}/>
//test git commit





