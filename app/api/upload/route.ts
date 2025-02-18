import { NextRequest, NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};


export async function POST(request: NextRequest) {
  console.log(request.headers)
  console.log("---------- HERE it comes: -------------------")
  try {
    const formData = await request.formData();
    const file = formData.get('file')
    console.log(formData)
  } catch (error) {

    console.log(error)
  }

  return NextResponse.json({ message: "Het bestand is succesvol geupload" }, { status: 201 });
}

