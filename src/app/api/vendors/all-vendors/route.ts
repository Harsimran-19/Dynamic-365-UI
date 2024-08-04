// src/app/api/vendors/all-vendors/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dataFilePath = path.join(process.cwd(), 'data', 'vendors.json');
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const vendors = JSON.parse(fileContents);

    return NextResponse.json(vendors);
  } catch (error) {
    console.error('Error reading vendors data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}