import { configureStore } from "@reduxjs/toolkit";
import  inputDateReducer from "./reducer/inputDataSlice";

export const store = configureStore({
    reducer: {
        inputData: inputDateReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;