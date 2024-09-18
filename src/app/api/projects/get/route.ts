import dbConnect from "@/app/lib/mongo";
import { NextResponse } from "next/server";
import { ProjectDocument } from "../projects.document";

export async function GET() {
  await dbConnect();
  const projects = await ProjectDocument.find();
  if (!projects) {
    return {
      notFound: true,
    };
  }
  const serializedProjects = JSON.parse(JSON.stringify(projects));
  return NextResponse.json(serializedProjects);
}
