import dbConnect from "@/app/lib/mongo";
import { NextResponse } from "next/server";
import BannerDocument from "../../BannerModel";
import ProjectDocument from "../projectsDocument";

export async function GET() {
  await dbConnect();
  const projects = await ProjectDocument.find();
  if (!projects) {
    return {
      notFound: true,
    };
  }
  const serializedProjects = JSON.parse(JSON.stringify(projects));
  return NextResponse.json({
    projects: serializedProjects,
  });
}
