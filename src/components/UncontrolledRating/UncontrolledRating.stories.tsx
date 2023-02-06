import React from 'react';
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";
export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
}
const callBack=action('rating changed inside component')

//export const RatingControll = () => <UncontrolledRating defaultValue={0}/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={callBack}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={callBack}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={callBack}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={callBack}/>



// export const RatingChanging=()=>{
//     const[rating, setRating]=useState<RatingValueType>(3)
//     return(
//         <UncontrolledRating value={rating} onClick={setRating}/>
//     )
// }

