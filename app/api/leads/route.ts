import { createClient } from "@supabase/supabase-js"
import { NextRequest, NextResponse } from "next/server"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json()
    const { name, phone, email, country, neet_score } = body

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 })
    }

    const { data, error } = await supabase
      .from("leads")
      .insert([{ name, phone, email, country, neet_score, status: "new", created_at: new Date().toISOString() }])
      .select()

    if (error) throw error

    return NextResponse.json({ success: true, data }, { status: 201 })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Something went wrong"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}