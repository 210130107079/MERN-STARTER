import {configureStore} from '@reduxjs/toolkit'
import postReducer from '../features/post/postsSlice.js'
import userReducer from '../features/user/userSlice.js'

export const store = configureStore({
    reducer:{
        posts: postReducer,
        users: userReducer,
    }
})

//Store to store every single Possible Slices used for Project