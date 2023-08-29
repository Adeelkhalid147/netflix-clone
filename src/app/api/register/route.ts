
import prismadb from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {

//   console.log("errrrr: ", req);
  // if(req.method !== 'POST'){

  //     return res.status(405).end()
  // }
  try {
    const { email, name, password } = await req.json();

    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json({ error: "Email taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log("adeel :", error);
    return NextResponse.json({ message: error });
  }
}
