import { PrismaClient } from '@prisma/client'
import { sql } from '@vercel/postgres'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('name')
    const startDate = searchParams.get('startDate')
    const game = searchParams.get('game')
    const description = searchParams.get('description')
    const rounds = searchParams.get('rounds')
    const playersLimit = searchParams.get('playersLimit')

    try {
        const response = await sql`INSERT INTO Tournament (name, startDate, game, description, rounds, playersLimit) VALUES(${name},${startDate},${game},${description},${rounds},${playersLimit})`
        return NextResponse.json({response}, {status: 200})
    } catch(error) {
        return NextResponse.json({error},{status: 500})
    }
}
 