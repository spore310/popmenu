import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // const menuInput = req.body.data;w
  console.log(req.body);
  return new NextResponse(JSON.stringify({ answer: `${req.body}` }), {
    status: 200,
  });
}
