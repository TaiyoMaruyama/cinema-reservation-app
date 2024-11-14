'use client'

import { demoColumnList } from '@/consts/reservation'
import TextLabel from '../gadgets/TextLabel'
import MoviesSlider from './MoviesSlider'

const SliderBox: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className='my-16'>{children}</div>
}

const TopPage = () => {
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
