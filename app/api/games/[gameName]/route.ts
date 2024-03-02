export async function POST({ params }: { params: { id: string }}) {

    const res = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + process.env.AUTHORIZATION || '',
        'Client-ID': process.env.IGDB_CLIENT_ID || '',
        'x-api-key': process.env.AWS_DEFAULT_KEY || '',
      },
      body: `fields *; where name=${params.id}`,
    })

    const data = await res.json()

    return Response.json(data)
}