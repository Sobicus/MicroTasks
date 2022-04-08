import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
// import {NewComponent} from "./site/NewComponent";
import {TableComponent} from "./site/TableComponent";
import {Button} from "./components/Button";


const students = [
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
]

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

function App() {
    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello Im Vasya!')
    // }
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello Im Ivan!')
    // }

    const onCLickHandler = (name: string) => {
        console.log(name)
    }
    const foo1 = () => {
        console.log(100200)
    }

    const foo2 = (number: number) => {
        console.log(number)
    }

    const Button1Foo=(subscriber:string)=>{
        console.log(subscriber)
    }

    const Button2Foo=(subscriber:string)=>{
        console.log(subscriber)
    }

    return (
        <div>
            {/*<Header title={'Header string'}/>*/}
            {/*<Body title={'Body string'}/>*/}
            {/*<Footer title={'Footer string'}/>*/}
            {/*<NewComponent students={students}/>*/}
            {/*<TableComponent cars={topCars}/>*/}
            {/*<button onClick={(event) => {console.log('Hello!')}}>MyYouTubeChanel - 1</button>*/}
            {/*<button onClick={(event) => onCLickHandler("Vasya")}>MyYouTubeChanel - 1</button>*/}
            {/*<button onClick={(event) => onCLickHandler("Ivan")}>MyYouTubeChanel - 2</button>*/}
            {/*<button onClick={() => onCLickHandler("Petia")}>MyYouTubeChanel - 3</button>*/}
            {/*<button onClick={foo1}> 1</button>*/}
            {/*<button onClick={()=>foo2(100200)}> 2 </button>*/}

            <Button name={"MyYouTubeChanel - 1"} callBack={()=>Button1Foo('Im Vasya')}/>
            <Button name={"MyYouTubeChanel - 2"} callBack={()=>Button2Foo('Im Ivam')}/>

        </div>
    );
}

export default App;
