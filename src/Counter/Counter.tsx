import './Counter.css';
import {useEffect, useState} from "react";

export function Counter(props: any) {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    }

    useEffect(() => {
       alert("ComponentDidMount : " + "Component has been  mounted " + "props :"+ props.data);
       return () => {
           alert("ComponentWillUnmount : " + "Component is being unmounted");
       }
    }, []);

    useEffect(() => {
        alert("ComponentDidUpdate : " + "Component is updated");
    }, [count]);

    return (
        <div className="counter">
            <h1>React Counter( Functional Components)</h1>
            <h2 className="count">Count : {count}</h2>
            <div>
                <button className="button" onClick={increment}>Increment</button>
                <button className="button" onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
}