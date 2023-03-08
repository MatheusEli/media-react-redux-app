import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'http://localhost:3005';

const removeUser = createAsyncThunk('users/remove', async (user) => {
    await axios.delete(`${URL}/users/${user.id}`);
    return user;
});

export {removeUser};