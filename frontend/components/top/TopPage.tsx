'use client'

import { demoColumnList } from '@/consts/reservation'
import { useEffect, useState } from 'react'
import TextLabel from '../gadgets/TextLabel'
import MoviesSlider from './MoviesSlider'

const SliderBox: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className='my-16'>{children}</div>
}

const TopPage = () => {
  // 状態を管理するための useState を追加
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/api/v1/showing-movies')
        const data = await response.json()
        setLoading(false)
      } catch (error) {
        console.error('Error fetching movies:', error)
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  return (
    <div className='container'>
      <SliderBox>
        <TextLabel text='公開中の映画' />
        <MoviesSlider list={demoColumnList} />
      </SliderBox>
      <SliderBox>
        <TextLabel text='公開予定の映画' />
        <MoviesSlider list={demoColumnList} />
      </SliderBox>
      <SliderBox>
        <TextLabel text='人気ランキング' />
        <MoviesSlider list={demoColumnList} />
      </SliderBox>
    </div>
  )
}

export default TopPage
