import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'http://localhost:3005'

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get(URL + '/users');
    return response.data;
});


export { fetchUsers };