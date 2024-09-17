import dbConnect from "@/app/lib/mongo";
import { NextResponse } from "next/server";
import UserDocument from "../user.document";

export async function GET() {
  await dbConnect();
  const me = await UserDocument.find();
  if (!me) {
    return {
      notFound: true,
    };
  }
  const serializedMe = JSON.parse(JSON.stringify(me));
  return NextResponse.json({
    me: serializedMe,
  });
}
