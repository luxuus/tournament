export async function POST({ params }: { params: { id: number }}) {
  console.log(params.id)

    const res = await fetch('https://api.igdb.com/v4/covers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' +  process.env.AUTHORIZATION || '',
        'Client-ID': process.env.IGDB_CLIENT_ID || '',
        'x-api-key': process.env.AWS_DEFAULT_KEY || '',
      },
      body: `fields url;`,
    })
    console.log(params.id)
    const data = await res.json()

    return Response.json(data)
}