import type { Movie, MovieResponse } from '@/types/tmdb'
import { useEffect, useState } from 'react'

const useFetchMovie = () => {
  // 状態を管理するための useState を追加
  const [showingMovies, setShowingMovies] = useState<Movie[]>([])
  const [popularMovies, setPopularMovies] = useState<Movie[]>([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const showingMovie = await fetch('/api/v1/now-playing')
        const popularMovie = await fetch('/api/v1/popular')
        const showingMovieData: MovieResponse = await showingMovie.json()
        const popularMovieData: MovieResponse = await popularMovie.json()
        setShowingMovies(showingMovieData.results || [])
        setPopularMovies(popularMovieData.results || [])
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    fetchMovies()
  }, [])

  return { showingMovies, popularMovies }
}

export default useFetchMovie
