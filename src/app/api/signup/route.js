"use server";

import { BASE_API_URL } from "@/utils/defaults";
import {
  setAccessCookies,
  setRefreshCookies,
  setUserId,
} from "@/utils/user-cookies";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const { username, email_address, password } = data;

    if (!username || !email_address || !password) {
      return NextResponse.json(
        {
          message: "Username, email, and password are required",
          loggedIn: "0",
        },
        { status: 400 }
      );
    }

    const response = await fetch(`${BASE_API_URL}/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const jsonData = await response.json();
    console.log("jsonData", jsonData);

    if (response.ok) {
      const { id, access, refresh } = jsonData;
      setUserId(id);
      setAccessCookies(access);
      setRefreshCookies(refresh);
      return NextResponse.json(
        { message: "User Created Successfully!", loggedIn: "1" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        message: "Error creating user. Please check your input.",
        loggedIn: "0",
      },
      { status: response.status }
    );
  } catch (error) {
    console.error("Error during user registration:", error);
    return NextResponse.json(
      { message: "Server error occurred during registration!", loggedIn: "0" },
      { status: 500 }
    );
  }
}
