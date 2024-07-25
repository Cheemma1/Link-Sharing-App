import { supabase } from "@/supabaseClient";
import { NextResponse } from "next/server";

export default async function POST(req: Request) {
  const { firstName, lastName, email, selectedImage } = await req.json();

  if (!firstName || !lastName || !email) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }
  try {
    const { data, error } = await supabase
      .from("profiles")
      .insert([{ firstName, lastName, email, selectedImage }]);

    if (error) {
      throw error;
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
