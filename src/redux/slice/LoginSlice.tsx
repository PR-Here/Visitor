/* This code is creating a Redux slice for handling the state related to user login. It imports the
`userLogin` function from an external API call file, and uses the `createSlice` and
`createAsyncThunk` functions from the `@reduxjs/toolkit` library to create the slice. The slice has
an initial state with `data` set to `null`, `isLoader` set to `false`, and `isError` set to `false`.
The `extraReducers` property of the slice defines how the state should be updated in response to
different actions dispatched by the `userLogin` function. If the `userLogin.pending` action is
dispatched, the `isLoader` property is set to `true`. If the `userLogin.fulfilled` action is
dispatched, the `isLoader` property is set to `false` and the `data` property is set to the payload
of the action. If the `userLogin.rejected` action is dispatched, the `isLoader` property is set to
`false` and the `isError` property is set to `true`. Finally, the code exports the reducer function
generated by the `createSlice` function. */
import { StaffLogin } from "../../apiCall/ApiCall";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const StaffLoginslice = createSlice({
  name: "userLogin",
  initialState: {
    data: {},
    isLoader: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(StaffLogin?.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(StaffLogin?.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(StaffLogin?.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default StaffLoginslice.reducer;