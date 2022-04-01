// import { createSlice } from "@reduxjs/toolkit";
// import { createUserWithEmailAndPassword, 
//         GoogleAuthProvider, 
//         signInWithEmailAndPassword, 
//         signInWithPopup, 
//         signOut } from "firebase/auth";
// import { auth } from "../firebase";

// const user = createSlice({
//     name: 'user',
//     initialState: {
//         current: {}
//     },
//     reducers: {
//         signUp: (auth, action) => {
//             createUserWithEmailAndPassword(auth, action.payload.email, action.payload.password)
//         },
//         logIn: (auth, action) => {
//             signInWithEmailAndPassword(auth, action.payload.email, action.payload.password)
//         },
//         logOut: () => {
//             signOut(auth)
//         },
//         googleSignIn: () => {
//             const googleAuthProvider = new GoogleAuthProvider();
//             return signInWithPopup(auth, googleAuthProvider)
//         },
//     },

// })

// const { reducer, action} = user;
// export const { signUp, logIn, logOut, googleSignIn } = action;
// export default reducer;