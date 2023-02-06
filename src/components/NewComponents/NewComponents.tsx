import React from "react";
type NewComponentsType = {
    currentMoney:MoneyType[]
    onClickFiltredHandler:(nameButton:'ALL' | 'RUBLI' | 'DOLLAR')=>void
}
type MoneyType = {
    banknote:string
    nominal:number
    number:string
}
export const NewComponents = (props:NewComponentsType) => {

    return (
        <div>
            <ul>
                {props.currentMoney.map((objFromMoney, index) => {
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

                    onClick={() => props.onClickFiltredHandler('ALL')}
                    style={{backgroundColor: 'green'}}>ALL

                </button>
                <button
                    onClick={() => props.onClickFiltredHandler('RUBLI')}
                    style={{backgroundColor: 'red'}}>RUBLI
                </button>
                <button
                    onClick={() => props.onClickFiltredHandler('DOLLAR')}
                    style={{backgroundColor: 'gray'}}>DOLLAR
                </button>
            </div>
        </div>
    )
}