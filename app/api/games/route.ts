export async function POST() {

    const res = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + process.env.AUTHORIZATION || '',
        'Client-ID': process.env.IGDB_CLIENT_ID || '',
        'x-api-key': process.env.AWS_DEFAULT_KEY || '',
      },
      body: 'fields name, first_release_date, genres, cover;',
    })
    
    const data = await res.json()

    return Response.json(data)

}
