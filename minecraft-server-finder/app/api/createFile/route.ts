import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';

export const POST = async (req: NextRequest) => {
  if (req.method === 'POST') {
    try {
      // Generate the hello.dat file
      const filePath = path.join(process.cwd(), 'public', 'hello.dat');
      fs.writeFileSync(filePath, 'Hello, world!');

      // Read the hello.dat file
      const fileContents = fs.readFileSync(filePath);

      // Convert the file contents to a stream
      const readableStream = new Readable();
      readableStream.push(fileContents);
      readableStream.push(null);

      // Send the file contents as the response
      return NextResponse
    } catch (error) {
      return NextResponse.json({ error: 'Error generating hello.dat file' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
};