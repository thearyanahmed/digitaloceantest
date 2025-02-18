import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

export async function POST(request: NextRequest) {

  console.log("request start")

  if (!request.headers.get("content-type")?.includes("multipart/form-data")) {
    console.log("not proper content type")
    return NextResponse.json({ error: "Invalid content type" }, { status: 400 });
  }

  try {
    let headerSize = 0;
    request.headers.forEach((value, key) => {
      headerSize += Buffer.byteLength(key) + Buffer.byteLength(value);
    });

    console.log("header size: ", (headerSize / 1024).toFixed(2))

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      console.log("file is empty")

      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Generate a unique filename
    const uniqueName = `${randomUUID()}-${file.name}`;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create upload directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), "uploads");
    await mkdir(uploadDir, { recursive: true });

    // Write file to uploads directory
    const filePath = path.join(uploadDir, uniqueName);
    await writeFile(filePath, buffer);

    return NextResponse.json(
      {
        message: "File uploaded successfully", fileName: uniqueName,

        headerSizeKB: (headerSize / 1024).toFixed(2), // Convert to KB and round to 2 decimal places
      },
      { status: 201 },

    );
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "File upload failed" }, { status: 500 });
  }
}
