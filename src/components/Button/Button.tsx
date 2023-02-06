type ButtonType={
    name:string
    callBack:()=>void
}
export const Button = ({name,...props}:ButtonType)=>{
    const onclickHandler=()=>{
        props.callBack()
    }
    return(
        <button onClick={onclickHandler}>{name}</button>
    )
}