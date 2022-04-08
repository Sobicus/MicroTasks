import React from "react";

type TableComponentType = {
    cars: Array<TopCars>

}

type TopCars = {
    manufacturer: string
    model: string
}

export const TableComponent = (props: TableComponentType) => {
    return (
        <table>
            {/*<ul>*/}
            {/*    {props.cars.map((objectiveFromCarsArray, index) => {*/}
            {/*        return (*/}
            {/*            <li key={index}>*/}
            {/*                <span>{objectiveFromCarsArray.manufacturer}</span>*/}
            {/*                <span>{objectiveFromCarsArray.model}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
                {props.cars.map((objectiveFromCarsArray, index) => {
                    return (
                        <tr key={index}>
                            <td>{objectiveFromCarsArray.manufacturer}</td>
                            <td>{objectiveFromCarsArray.model}</td>
                        </tr>
                    )
                })}
        </table>
    )
}