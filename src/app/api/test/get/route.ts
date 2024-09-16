import dbConnect from "@/app/lib/mongo";
import { NextResponse } from "next/server";
import BannerDocument from "../../BannerModel";

export async function GET() {
  await dbConnect();
  const pet = await BannerDocument.find({ isActive: true });
  if (!pet) {
    return {
      notFound: true,
    };
  }
  const serializedPet = JSON.parse(JSON.stringify(pet));
  return NextResponse.json({
    props: {
      banners: serializedPet,
    },
  });
}
