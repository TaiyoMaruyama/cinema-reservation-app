// frontend/app/api/v1/showing-movies/route.ts
import { NextResponse } from 'next/server'
import { api_key } from '../../responseOption'

export const GET = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&region=US&page=1`,
    )
    if (!response.ok) {
      const errorData = await response.json() // エラー詳細を取得
      throw new Error(
        `Failed to fetch data from TMDB: ${errorData.status_message || 'Unknown error'}`,
      )
    }

    const data = await response.json()
    return NextResponse.json(data) as NextResponse<any>
  } catch (error: unknown) {
    console.error('Error fetching data from TMDB:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch data from TMDB',
        message: (error as Error).message,
      },
      { status: 500 },
    )
  }
}
