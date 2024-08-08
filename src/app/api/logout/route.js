import { deleteUserId } from "@/utils/user-cookies";
import { NextResponse } from "next/server";

export const POST = (request) => {
  const myDeletedUserId = deleteUserId();
  console.log(myDeletedUserId);
  return NextResponse.json(
    { message: "Successfully Logged out!" },
    { status: 200 }
  );
};
