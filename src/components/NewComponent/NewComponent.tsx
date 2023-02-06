type NewComonentType = {
    students: Array<StudentType>//или StudentType[]
}
type StudentType = {
    id: number,
    name: string,
    age: number
}
export const NewComponent = (props: NewComonentType) => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (
        <table>
            <tr>
                <th> manufacturer</th>
                <th> model</th>
            </tr>
            {topCars.map((object, index) => {
                return (
                    <tr>
                        <td>{object.manufacturer}</td>
                        <td>{object.model}</td>
                    </tr>
                )
            })}

        </table>

        // <ul>
        //     {props.students.map((objectFromStudentsArray,index) => {
        //         //debugger
        //         return (
        //             <li key={objectFromStudentsArray.id}>
        //                 <span>{objectFromStudentsArray.name}</span>
        //                 <span> AGE: {objectFromStudentsArray.age}</span>
        //             </li>
        //
        //         )
        //     })}
        // </ul>
    )
}