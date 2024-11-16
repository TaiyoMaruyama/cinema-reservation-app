'use client'

import useFetchMovie from '@/hooks/useFetchMovie'
import TextLabel from '../gadgets/TextLabel'
import MoviesSlider from './MoviesSlider'

const SliderBox: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className='my-14 w-11/12'>{children}</div>
}

const TopPage = () => {
  const { showingMovies, popularMovies } = useFetchMovie()

  return (
    <div className='flex flex-col items-center'>
      <SliderBox>
        <TextLabel text='公開中の映画' />
        <MoviesSlider movies={showingMovies} />
      </SliderBox>
      <SliderBox>
        <TextLabel text='人気の映画' />
        <MoviesSlider movies={popularMovies} />
      </SliderBox>
    </div>
  )
}

export default TopPage
