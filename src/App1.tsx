import {useState} from "react";
import {Input} from "./components/FullInput/Input";
import {Button} from "./components/FullInput/Button";

export function App1() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
        ]
    )
    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }
    let [title, setTitle] = useState('') //локальный стейт для инпута, специально вынесли в родительскую компоненту, чтобы в будущем передавать в BUTTON.
    // console.log(title)
    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div className={'App1'}>
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {/*<FulIInput addMessage={addMessage}/>*/}
            <Input
                title={title}                   //в тайтле мы синхронизируем текущее значение с инпутом, в сеттайтле передаем значение
                setTitle={setTitle}/>
            <Button
                name={'Отправить сообщение'} // должна быть внутри свободная, максимально чистая. в колбэке onClickButtonHandler: вызывает addMessage, и передает тайтл
                callBack={onClickButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}


