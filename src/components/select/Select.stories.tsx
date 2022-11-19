import React, {useState} from 'react';
import {Select} from './Select';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Select',
    component: Select,
};

export const ModeChanging = () => <Select onChange={action("poopopo")}
     value={'1'}
       items={[
           {title: 'Minsk', value: 1},
            {title: 'Kiev', value: 2},
           {title: 'Moscow', value: 3},
       ]}
/>;