/* This code is configuring a Redux store using the `configureStore` function from the
`@reduxjs/toolkit` package. It is creating a store with a single reducer called `userLogin`, which
is imported from the `../../apiCall/ApiCall` file. The `userLogin` reducer is responsible for
handling the state related to user login. The `store` variable is then exported for use in the
application. */
import {configureStore} from '@reduxjs/toolkit';
import { StaffLogin } from '../../apiCall/ApiCall';

export const store = configureStore({
  reducer: {
    userLogin: StaffLogin,
  },
  
});