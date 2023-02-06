import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/UncontolledOnOff/UncontrolledOnOff";
import {NewComponent} from "./components/NewComponent/NewComponent";
import {Button} from "./components/Button/Button";
import {NewComponents} from "./components/NewComponents/NewComponents";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

type PagePropsType = {title: string}

export function App() {
    let [rating, setRating] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [onOff, setOnOff] = useState<boolean>(false)
    let [a, setA] = useState<number>(1)
    const onClickHandlerReset = () => {return (setA(0))}
    const onClickHandler = () => {return (setA(++a))}
    const [students, setStudents] = useState([
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ])
    const Button1 = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2 = (subscriber: string) => {
        console.log(subscriber)
    }
    const [money, setMoney] = useState( [
        {banknote: 'dollar', nominal: 100, number: 'a1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'z1234567890'},
        {banknote: 'ruble', nominal: 100, number: 'w1234567890'},
        {banknote: 'dollar', nominal: 100, number: 'e1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'c1234567890'},
        {banknote: 'ruble', nominal: 100, number: 'r1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'x1234567890'},
        {banknote: 'ruble', nominal: 50, number: 'v1234567890'},
    ])
    let [startButton, setStartButton] = useState<'ALL' | 'RUBLI' | 'DOLLAR'>('ALL')
    let currentMoney = money
    if (startButton === 'RUBLI') {
        console.log('rubl')
        currentMoney = money.filter((filtredMoney) => filtredMoney.banknote === 'ruble')
    }
    if (startButton === 'DOLLAR') {
        currentMoney = money.filter((filtredMoney) => filtredMoney.banknote === 'dollar')
    }

    const onClickFiltredHandler = (nameButton: 'ALL' | 'RUBLI' | 'DOLLAR') => {
        setStartButton(nameButton)
    }

    return (
        <div className={'App'}>
            <NewComponents
                onClickFiltredHandler={()=>onClickFiltredHandler(startButton)}
                currentMoney={money}
            />
           {/* <ul>
                {currentMoney.map((objFromMoney, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoney.banknote}------</span>
                            <span>{objFromMoney.nominal}-------</span>
                            <span>{objFromMoney.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '40px', backgroundColor: 'gold'}}>
                <button
                    onClick={() => onClickFiltredHandler('ALL')}
                    style={{backgroundColor: 'green'}}>ALL
                </button>
                <button
                    onClick={() => onClickFiltredHandler('RUBLI')}
                    style={{backgroundColor: 'red'}}>RUBLI
                </button>
                <button
                    onClick={() => onClickFiltredHandler('DOLLAR')}
                    style={{backgroundColor: 'gray'}}>DOLLAR
                </button>
            </div>*/}
            <Button name={"MyChanel-1"} callBack={() => Button1('Vasya', 21)}/>
            <Button name={"MyChanel-2"} callBack={() => Button2('Ivan')}/>
            <UncontrolledOnOff />
            <OnOff
                onChange={(on) => setOnOff(on)}
                on={onOff}/>
            <PageTitle
                title="This is APP component"/>
            <UncontolledAccordion
                titleValue='Users'/>
            <Accordion
                titleValue='Menu'
                collapsed={accordionCollapsed}
                onChange={() => setAccordionCollapsed(!accordionCollapsed)}
            />
            <UncontrolledRating />
            <Rating value={rating}
                    onClick={setRating}/>
            <NewComponent students={students}/>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerReset}>0</button>
        </div>
    );
}

function PageTitle(props: PagePropsType) {return <h1 className={'PageTitle'}>{props.title}</h1>}

