import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: []
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length) {
        //state.messages.splice(10, 1);
        state.messages.splice(LIVE_CHAT_COUNT, 1);
      }
      //state.messages.unshift(action.payload);
      state.messages.push(action.payload);
    }
  }
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
