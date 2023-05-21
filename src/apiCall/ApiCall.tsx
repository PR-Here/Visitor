import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiEndPoint } from "../utils/ApiEndPoint";

// Staff login Api
export const StaffLogin = async (password: string, username: string) => {
  const res = await fetch(ApiEndPoint.BASE_URL + ApiEndPoint.LOGIN, {
    method: "POST",
    body: JSON.stringify({
      userName: username,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const final = res.json();
  return final;
};
//MOBILE INTERNAL API
export const MOBILE_internal_Api = async () => {
  const res = await fetch(
    ApiEndPoint.BASE_URL + ApiEndPoint.MOBILE_INTERNAL_API,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const final = res.json();
  return final;
};
// Login by phone number Api
export const Login_By_PhoneNumber = async (phone: string) => {
  const res = await fetch(ApiEndPoint.BASE_URL + ApiEndPoint.SEND_OTP + phone, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const final = res.json();
  return final;
};

// Forgot password Api
export const ForgotPasswords = async (email: string) => {
  const res = await fetch(
    ApiEndPoint.BASE_URL + ApiEndPoint.FORGOT_PASSWORD + email,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const final = res.json();
  return final;
};

// OTP VERIFY AFTER LOGIN WITH PHONE NUMBER API
export const OTP_VERIFY = async (mobile: string, otp: string) => {
  console.log(
    `${ApiEndPoint.BASE_URL + ApiEndPoint.VERIFY_OTP}${mobile}&otp=${otp}`
  );
  const res = await fetch(
    `${ApiEndPoint.BASE_URL + ApiEndPoint.VERIFY_OTP}${mobile}&otp=${otp}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const final = res.json();
  return final;
};
