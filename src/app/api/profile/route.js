"use server";

import { BASE_API_URL } from "@/utils/defaults";
import {
  getAccessCookies,
  getRefreshCookies,
  getUserId,
} from "@/utils/user-cookies";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const userId = getUserId();
    const accessToken = getAccessCookies();
    const refreshToken = getRefreshCookies();

    if (!userId || !accessToken) {
      return NextResponse.json(
        { message: "Unauthorized: Missing credentials!", loggedIn: "0" },
        { status: 401 }
      );
    }

    console.log("userId", userId);
    console.log("accessToken", accessToken);
    console.log("refreshToken", refreshToken);

    const response = await fetch(`${BASE_API_URL}/users/${userId}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // const jsonData = await response.json();
    // console.log("jsonData", jsonData);

    if (!response.ok) {
      return NextResponse.json(
        { message: "Failed to load user data!", loggedIn: "0", accessToken },
        { status: response.status }
      );
    }

    const jsonData = await response.json();
    console.log("jsonData", jsonData);

    return NextResponse.json(
      { message: "Successfully Loaded User Data", ...jsonData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json(
      { message: "Server error occurred!", loggedIn: "0" },
      { status: 500 }
    );
  }
}
