"use server";

import { BASE_API_URL } from "@/utils/defaults";
import { getAccessCookies, getUserId } from "@/utils/user-cookies";
import { NextResponse } from "next/server";

export async function GET(request) {
  // const data = await request.json();
  const userId = getUserId();
  const accessToken = getAccessCookies();
  console.log(userId);
  console.log(accessToken);

  const response = await fetch(`${BASE_API_URL}/users/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const jsonData = await response.json();
  // console.log(jsonData);
  // const { username, email_address,  } = jsonData;

  if (response.ok) {
    return NextResponse.json(
      { message: "Successfully Loaded User Data", ...jsonData },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { message: "Couldn't load user data!", loggedIn: "0" },
    { status: 401 }
  );
}
