import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const final = await res.json();
    return final;
});