import { configureStore } from "@reduxjs/toolkit"
import designReducer from "./designSlice"

const store = configureStore({
  reducer: {
    design: designReducer
  }
})

export default store
