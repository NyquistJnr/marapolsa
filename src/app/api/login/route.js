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
  try {
    const data = await request.json();
    const { email_address, password } = data;

    if (!email_address || !password) {
      return NextResponse.json(
        { message: "Email and password are required", loggedIn: "0" },
        { status: 400 }
      );
    }

    const response = await fetch(`${BASE_API_URL}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const jsonData = await response.json();
    console.log("jsonData", jsonData);

    if (response.ok) {
      const { id, access, refresh, username } = jsonData;
      setUserId(id);
      setAccessCookies(access);
      setRefreshCookies(refresh);
      return NextResponse.json(
        { message: "User Login Successfully!", loggedIn: "1", username },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Incorrect Email or Password", loggedIn: "0" },
      { status: 401 }
    );
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { message: "Server error occurred during login!", loggedIn: "0" },
      { status: 500 }
    );
  }
}
