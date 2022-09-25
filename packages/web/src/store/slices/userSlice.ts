import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

interface IUserState {
  token?: string;
  email?: string;
  fullName?: string;
}

const initialState: IUserState = {
  token: undefined,
  email: undefined,
  fullName: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<IUserState>) => {
      return { ...state, ...payload };
    },
    setSignOut: () => initialState,
  },
});

const persistConfig = {
  key: 'recipe-box',
  storage,
};

const userPersistedReducer = persistReducer(persistConfig, userSlice.reducer);

export const { setUser, setSignOut } = userSlice.actions;
export default userPersistedReducer;
