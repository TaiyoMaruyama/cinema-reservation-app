import { demoAlphabetList } from '@/consts/reservation'
import TextLabel from '../gadgets/TextLabel'
import { Carousel, CarouselContent, CarouselItem } from '../shadcn/carousel'

const TopPage = () => {
  return (
    <div className='container'>
      <TextLabel text='公開中の映画' />
      <div>
        <Carousel>
          <CarouselContent>
            {demoAlphabetList.map((alpha) => (
              <CarouselItem key={alpha} className='basis-1/5'>
                <img src='https://picsum.photos/150/300' alt='' />
                <p>{alpha}_movie_title</p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <TextLabel text='公開予定の映画' />
      <TextLabel text='人気ランキング' />
    </div>
  )
}

export default TopPage
