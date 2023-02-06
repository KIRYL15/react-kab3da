import React, {ChangeEvent, useState} from 'react';
type FulIInputType = {
    addMessage: (message: string) => void
}
export const FulIInput = (props: FulIInputType) => {
    let [title, setTitle] = useState('')//здесь сохраняется введенный текст в инпуте
    //console.log(title)
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')

    }

    return (
        <div>
            <input
                value={title}
                style={{backgroundColor: '#83bbef'}}
                onChange={onChangeInputHandler}
            />
            <button
                style={{backgroundColor: "#ff951c"}}
                onClick={onClickButtonHandler}
            >{"Отправить сообщение"}
            </button>
        </div>
    );
};

