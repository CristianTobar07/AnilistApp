import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface DataUser {
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  isOpenModalAuth: boolean;
  dataUser?: DataUser;
}

const initialState: AuthState = {
  isOpenModalAuth: false,
  dataUser: undefined,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    showModalAuth(state, action: PayloadAction<boolean>) {
      state.isOpenModalAuth = action.payload;
    },

    setDataUser(state, action: PayloadAction<DataUser | undefined>) {
      state.dataUser = action.payload;
    },
  },
});

export const { showModalAuth, setDataUser } = counterSlice.actions;

export default counterSlice.reducer;
