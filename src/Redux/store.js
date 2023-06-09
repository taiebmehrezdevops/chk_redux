import { createStore } from "redux";
import reducer  from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import todoredcuer from "./TodoSlice";
import etodo from "./TodoSlice"

export const store = configureStore({
    reducer:{tasks:todoredcuer}
});
