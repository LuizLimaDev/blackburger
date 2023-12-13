import { NextResponse } from "next/server";
const pool = require("../../../services/db/postgres");

export async function GET() {
  const res = await pool.query("select * from products");
  const data = res.rows;

  return NextResponse.json({ data });
}
