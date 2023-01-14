import React, {useState} from "react";
import {useDispatch} from "react-redux";
import UsersList from "../../components/usersList/UsersList";

function UsersPage(props) {


    const dispatch = useDispatch();
    const [sum1, setSum1] = useState({});
    const [sum2, setSum2] = useState({});

    const increment = () => {
        dispatch({
            type: "INCREMENT",
            payload1: sum1,
            payload2: sum2
        })
    };

    const decrement = () => {
        dispatch({
            type: "DECREMENT",
            payload1: sum1,
            payload2: sum2
        })
    };

    const multiply = () => {
        dispatch({
            type: "MULTIPLY",
            payload1: sum1,
            payload2: sum2
        })
    };

    const separation = () => {
        dispatch({
            type: "SEPARATION",
            payload1: sum1,
            payload2: sum2
        })
    };

    const deleteAll = () => {
        dispatch({
            type: "DELETE",
            payload1: sum1,
            payload2: sum2
        })
    };


    return (
        <div>
            <input type="number"
                   onChange={(event)=> setSum1(+event.target.value)}
                   placeholder="number1"
            />
            <input type="number"
                   onChange={(event)=> setSum2(+event.target.value)}
                   placeholder="number2"
                  />
            <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={separation}>/</button>
            <button onClick={deleteAll}>Clear all</button>
            </div>
            <UsersList/>
        </div>
    );
}

export default UsersPage;