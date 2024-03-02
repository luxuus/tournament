import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    const response = await fetch('https://api.igdb.com/v4/games', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + (process.env.AUTHORIZATION || ''),
            'Client-ID': process.env.IGDB_CLIENT_ID || '',
            'x-api-key': process.env.AWS_DEFAULT_KEY || '',
        },
        body: `fields *; where name="${id}";`,
    });

    const data = await response.json()
    return Response.json(data)
}
