// pages/api/getServers.ts (or getServers.js if you are using JavaScript)

import fetch from 'node-fetch';
import type { NextApiRequest, NextApiResponse } from 'next';


export async function GET(
  req: NextApiRequest,
) {
  try {
    const res =  await fetch('https://minecraft-server-list.com/country/united-states/');
    const html = await res.text();

     return Response.json({ html });
  } catch (error) {
    return Response.json({ error: 'Failed to fetch data' });
  }

}