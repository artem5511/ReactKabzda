import React, {useState} from 'react';
import {Accordion} from './Accordion';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action("accordion mode change event fired")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback}/>;
export const UserCollapsedMode = () => <Accordion titleValue={"User"} collapsed={false} onChange={callback}/>;


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Users"} collapsed={value} onChange={()=> setValue(!value)}/>;
};