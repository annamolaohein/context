import styled from '@emotion/styled';
import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';


const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    }
    const updatePrice = (e) => {
        setPrice(e.target.value);
    }
    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, { name: name, price: price }])
    }
    return (
        <Form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName} placeholder="Enter movie name"/>
            <input type="text" name="price" value={price} onChange={updatePrice} placeholder="Enter movie price"/>
            <button>Submit</button>
        </Form>
    );
}
export default AddMovie;

const Form=styled.form`
    margin-top: 2%;
    & input{
        margin-right: 10px;
        border-radius: 0.5rem;
        padding: 10px 20px;
        font-style: oblique;
    }
    & button{
        padding: 10px 20px;
        border-radius: 0.5rem;
        background-color: #404040;
        color: white;
        font-size: 1rem;
    }
`
