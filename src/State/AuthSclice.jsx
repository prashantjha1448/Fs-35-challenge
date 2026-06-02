import { createSlice } from "@reduxjs/toolkit";


const LoadUserfromLoaclStorage = () => {
  try {

    let saved = localStorage.getItem("user");

    return saved ? JSON.parse(saved) : null;

  } catch {

    return null;
  }
};


const SetUSerfromLoacalStorage = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};


const RemoveUSerFromLocalStorage = () => {
  localStorage.removeItem("user");
};


const savedUser = LoadUserfromLoaclStorage();

const AuthSclice = createSlice({
  name: "auth",

  initialState: {
    User: savedUser,
    isLoading: false,
    isAuthenticate: !!savedUser,
  },

  reducers: {

    LoginSuccess: (state, action) => {

      state.User = action.payload;
      state.isAuthenticate = true;

      SetUSerfromLoacalStorage(action.payload);
    },

    LogoutSucess: (state) => {

      state.User = null;
      state.isAuthenticate = false;

      RemoveUSerFromLocalStorage();
    },

    RegisterSuccess: (state, action) => {

      state.User = action.payload;
      state.isAuthenticate = true;

      SetUSerfromLoacalStorage(action.payload);
    },
  },
});

export const {
  LoginSuccess,
  RegisterSuccess,
  LogoutSucess,
  
} = AuthSclice.actions;

export default AuthSclice.reducer;