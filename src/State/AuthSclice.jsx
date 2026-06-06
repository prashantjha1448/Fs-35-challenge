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

  let Users =
    JSON.parse(localStorage.getItem("AllUsers")) || [];

  const userExists = Users.some(
    (user) => user.email === data.email
  );

  if (userExists) {
    alert("User already exists");
    return;
  }

  Users.push(data);

  localStorage.setItem(
    "AllUsers",
    JSON.stringify(Users)
  );
};




const RemoveUSerFromLocalStorage = () => {
  localStorage.removeItem("user");
};



const savedUser = LoadUserfromLoaclStorage();

const AuthSclice = createSlice({
  name: "auth",
  initialState: {
    user: savedUser,
    isLoading: false,
    isAuthenticate: !!savedUser,

  },

  reducers: {

    LoginSuccess: (state, action) => {

      state.user = action.payload;
      state.isAuthenticate = true;

      SetUSerfromLoacalStorage(action.payload);
    },

    LogoutSucess: (state) => {

      state.user = null;
      state.isAuthenticate = false;

      RemoveUSerFromLocalStorage();
    },

    RegisterSuccess: (state, action) => {

      const userData = {...action.payload,favourite : []}
      
      state.user = userData;
      state.isAuthenticate = true;
       
      SetUSerfromLoacalStorage(action.payload);
    },
    AddToFavourite : (state , action)=>{

       if (!state.user.favourites) {
    state.user.favourites = [];
  }
      const exists = state.user.favourite.find((movies)=>movies.id === action.payload.id)
      if(!exists){
        state.favourite.user.push(action.payload)
      }

    },
    removeToFavorite : (state ,action)=>{
    state.user.favourite.filter((movies)=> movies.id !==action.payload)
  }
  },
  
});

export const {
  LoginSuccess,
  RegisterSuccess,
  LogoutSucess,
  AddToFavourite,
  removeToFavorite
} = AuthSclice.actions;

export default AuthSclice.reducer;