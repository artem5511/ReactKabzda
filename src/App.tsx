import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

function App() {
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <UnControlledAccordion titleValue={'menu'}/>
            <UnControlledRating value={1}/>
            {/*<OnOff on={false}/>*/}
            {/*<OnOff on={true}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={false}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
            <Rating value={1}/>
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
const PageTitle =(props: PageTitlePropsType)=> {
    return <h1>{props.title}</h1>
}
export default App;
