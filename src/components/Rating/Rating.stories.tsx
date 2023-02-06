import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Rating";
export default {
    title: 'Rating stories',
    component: Rating,
    }
export const EmptyRating = () => <Rating value={0} onClick={x => x}/>
export const Rating1 = () => <Rating value={1} onClick={x => x}/>
export const Rating4 = () => <Rating value={4} onClick={x => x}/>
export const Rating5 = () => <Rating value={5} onClick={x => x}/>
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(4)
    return <Rating value={rating} onClick={setRating}/>
}




