import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIDate } from "../../api/api";

export interface IInputItem {
    input: string,
    error: string,
}

interface IInputData {
    name: IInputItem,
    date: IInputItem,
    email: IInputItem,
    phone: IInputItem,
    message: IInputItem,
}

const initialState = {
    name: { input: '', error: '' },
    date: { input: '', error: '' },
    email: { input: '', error: '' },
    phone: { input: '', error: '' },
    message: { input: '', error: '' },
};

export const asynkRequest = createAsyncThunk(
    'inputData/asynkRequest',
    async({name, date, email, phone, message}: {name: string, date: string, email: string, phone: string, message: string}) => {
        const postData = await APIDate.postAllData({name, date, email, phone, message})
    }
)

export const inputDataSlice = createSlice({
    name: 'inputData',
    initialState,
    reducers: {
        addName(state, action) {
            state.name.input = action.payload.name;
            state.name.error = action.payload.nameError;
        },
        addDate(state, action) {
            state.date.input = action.payload.date;
            state.date.error = action.payload.dateError;
        },
        addEmail(state, action) {
            state.email.input = action.payload.email;
            state.email.error = action.payload.emailError;
        },
        addPhone(state, action) {
            state.phone.input = action.payload.phone;
            state.phone.error = action.payload.phoneError;
        },
        addMessage(state, action) {
            state.message.input = action.payload.message;
            state.message.error = action.payload.messageError;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(asynkRequest.pending, ()=> {
            console.log('запрет отправок формы')
        });
        builder.addCase(asynkRequest.rejected, ()=> {
            console.log('что то пошло не так')
        });
        builder.addCase(asynkRequest.fulfilled, (state, action)=> {
            state.name.input = '';
            state.date.input = '';
            state.email.input = '';
            state.phone.input = '';
            state.message.input = '';
        });
    }
})

export const { addName, addDate, addEmail, addPhone, addMessage } = inputDataSlice.actions;
export default inputDataSlice.reducer;