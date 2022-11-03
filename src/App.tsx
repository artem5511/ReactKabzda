import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {RaitingValueType, Rating} from './components/Rating/Rating';

function App() {
    let [ratingValue, setRatingValue] = useState<RaitingValueType>(3)
    let [accordionCollapsed, setAccordionCollapsed] = useState<Boolean>(true)
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <UnControlledAccordion titleValue={'menu'}/>
            <UnControlledRating/>
            {/*<OnOff on={false}/>*/}
            {/*<OnOff on={true}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={accordionCollapsed}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
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
