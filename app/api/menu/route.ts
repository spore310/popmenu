import { JSONConvertTool, popmenuDataConvert } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // const menuInput = req.body.data;w
  const brand = popmenuDataConvert();
  const response = JSONConvertTool(brand);
  return new NextResponse(JSON.stringify({ ...response }), {
    status: 200,
  });
}
