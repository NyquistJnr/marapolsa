"use server";

import { BASE_API_URL } from "@/utils/defaults";
import {
  setAccessCookies,
  setRefreshCookies,
  setUserId,
} from "@/utils/user-cookies";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  // const { username, email_address, password } = data;

  const response = await fetch(`${BASE_API_URL}/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const jsonData = await response.json();
  const { id, access, refresh } = jsonData;

  console.log(access);
  console.log(id);

  if (response.ok) {
    setUserId(id);
    setAccessCookies(access);
    setRefreshCookies(refresh);
    return NextResponse.json(
      { message: "User Created Successfully!", loggedIn: "1" },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { message: "Error with creating the user!", loggedIn: "0" },
    { status: 401 }
  );
}
