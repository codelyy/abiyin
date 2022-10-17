import { configureStore } from '@reduxjs/toolkit'
import homeStroe from './modules/home'


const store = configureStore({
    reducer: {
        homeStroe
    }
})

export default store