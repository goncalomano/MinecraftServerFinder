// app/api/getServers/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country');


  if (!country) {
    return NextResponse.json({ error: 'Country parameter is required' }, { status: 400 });
  }

  try {
    const fetchUrl = `https://minecraft-server-list.com/country/${country}/`;
    console.log('Fetching URL:', fetchUrl);

    const response = await fetch(fetchUrl);
    const html = await response.text();


    return NextResponse.json({ html });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
