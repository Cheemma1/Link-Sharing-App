// app/api/postLink/route.ts
import { supabase } from "@/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { linkInput, selectedOption } = await request.json();

    if (!linkInput || !selectedOption) {
      return NextResponse.json(
        { message: "Link and platform are required." },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("userLink")
      .insert([{ link: linkInput, platform: selectedOption }]);

    if (error) {
      throw error;
    }

    return NextResponse.json(
      { message: "Link posted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error posting link:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
