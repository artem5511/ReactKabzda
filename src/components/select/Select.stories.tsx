import React, {useState} from 'react';
import {Select} from './Select';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Select',
    component: Select,
};

export const WithValue = () =>
    <>
        <Select onChange={action("Value changed")}
                value={2}
                items={[
                    {title: 'Minsk', value: 1},
                    {title: 'Kiev', value: 2},
                    {title: 'Moscow', value: 3},
                ]}/>
    </>

export const WithoutValue = () =>
    <>
        <Select onChange={action("Value changed")}
                value={''}
                items={[
                    {title: 'Minsk', value: 1},
                    {title: 'Kiev', value: 2},
                    {title: 'Moscow', value: 3},
                ]}/>
    </>
