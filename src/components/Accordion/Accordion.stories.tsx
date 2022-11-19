import React, {useState} from 'react';
import {Accordion} from './Accordion';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action("accordion mode change event fired")
const onClickcallback = action("some item was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onClickcallback}/>;
export const UserCollapsedMode = () => <Accordion titleValue={"User"} collapsed={false} onChange={callback} items={[{title: 'Artem', value: 1},{title: 'Viktor', value: 2},{title: 'Igor',value:3},{title:'Valera',value:4}]} onClick={onClickcallback}/>;


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Users"} collapsed={value} onChange={()=> setValue(!value)}
                      items={[{title: 'Artem', value: 1},{title: 'Viktor', value: 2},{title: 'Igor',value:3},{title:'Valera',value:4}]}
                      onClick={(id) => {alert(`user with ID ${id} should be happy`)}}/>;
};