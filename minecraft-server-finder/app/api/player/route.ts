import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');

  if (!name) {
    return NextResponse.json({ error: 'Name parameter is required' }, { status: 400 });
  }

  try {
    const fetchUrl = `https://api.mojang.com/users/profiles/minecraft/${name}`;
    console.log('Fetching URL:', fetchUrl);

    const response = await fetch(fetchUrl);
    const player = await response.json();

    if (!player.id) {
      return NextResponse.json({ error: 'Player not found' }, { status: 404 });
    }

    const detailsUrl = `https://sessionserver.mojang.com/session/minecraft/profile/${player.id}`;
    const detailsResponse = await fetch(detailsUrl);
    const playerDetails = await detailsResponse.json();

    return NextResponse.json(playerDetails);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}