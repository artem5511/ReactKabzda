import React, {ChangeEvent, useRef, useState} from 'react';
import {action, actions} from '@storybook/addon-actions';

export default {
  title: 'input',
  // component: input
  }

export const UncontrolledInput = () => <input/>;

export const TrackValueOfControlledInput = () => {
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    debugger
    const actualValue = event.currentTarget.value;
    setValue(actualValue);
  }

  return <><input onChange={onChange} /> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  }

  return <><input ref={inputRef} id={'inputId'}/> <button onClick={save}>save</button> - actual value: {value}</>
};

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('');
  const onChange =(e: ChangeEvent<HTMLInputElement>)=> {
    setParentValue(e.currentTarget.value);
  }

  return <input value={parentValue} onChange={onChange}/>;
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true);
  const onChange =(e: ChangeEvent<HTMLInputElement>)=> {
    setParentValue(e.currentTarget.checked);
  }

  return <input type={'checkbox'} checked={parentValue} onChange={onChange}/>;
}

export const ControlledSelect= () => {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined);

  const onChange =(e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  }
  return  <select value={parentValue}>
    <option>none</option>
    <option value={'1'}>Minsk</option>
    <option value={'2'}>Kiev</option>
    <option value={'3'}>Moscow</option>
    </select>;
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>
