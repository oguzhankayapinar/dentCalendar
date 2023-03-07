import React from 'react'
import { useDispatch } from 'react-redux';
import { LogOut } from '../redux/authSlice';

const Home = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(LogOut())
    };

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleClick}> Sign Out </button>
        </div>
    )
}

export default Home;