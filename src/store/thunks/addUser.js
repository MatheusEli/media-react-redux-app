import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'http://localhost:3005'

const addUser = createAsyncThunk('users/add', async () => {
    const response = await axios.post(URL + '/users', {name: faker.name.fullName()});
    return response.data;
});

export { addUser };