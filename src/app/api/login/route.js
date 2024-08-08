"use server";

import { BASE_API_URL } from "@/utils/defaults";
import {
  getAccessCookies,
  getRefreshCookies,
  setAccessCookies,
  setRefreshCookies,
  setUserId,
} from "@/utils/user-cookies";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  // const { username, email_address, password } = data;
  const accessToken = getAccessCookies();
  const refreshToken = getRefreshCookies();

  console.log(accessToken);

  const response = await fetch(`${BASE_API_URL}/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });

  const jsonData = await response.json();
  console.log(jsonData);
  const { id, access, refresh } = jsonData;

  if (response.ok) {
    setUserId(id);
    setAccessCookies(access);
    setRefreshCookies(refresh);
    return NextResponse.json(
      { message: "User Login Successfully!", loggedIn: "1" },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { message: "Incorrect Email or Password", loggedIn: "0" },
    { status: 401 }
  );
}
