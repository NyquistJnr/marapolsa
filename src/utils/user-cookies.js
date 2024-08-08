const { cookies } = require("next/headers");

const USER_ID = "user-id";
const ACCESS_TOKEN_COOKIES = "access-token";
const REFRESH_TOKEN_COOKIES = "refresh-token";

export const getUserId = () => {
  const userId = cookies().get(USER_ID);
  return userId?.value;
};

export const getAccessCookies = () => {
  const accessToken = cookies().get(ACCESS_TOKEN_COOKIES);
  return accessToken?.value;
};

export const getRefreshCookies = () => {
  const refreshToken = cookies().get(REFRESH_TOKEN_COOKIES);
  return refreshToken?.value;
};

export const setUserId = (value) => {
  return cookies().set({
    name: USER_ID,
    value,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "production",
    maxAge: 36000,
  });
};

export const setAccessCookies = (value) => {
  return cookies().set({
    name: ACCESS_TOKEN_COOKIES,
    value,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "production",
    maxAge: 36000,
  });
};

export const setRefreshCookies = (value) => {
  return cookies().set({
    name: REFRESH_TOKEN_COOKIES,
    value,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "production",
    maxAge: 36000,
  });
};

export const deleteUserId = () => {
  cookies().delete(ACCESS_TOKEN_COOKIES);
  cookies().delete(REFRESH_TOKEN_COOKIES);
  return cookies().delete(USER_ID);
};
