import { Carousel, CarouselContent, CarouselItem } from '../shadcn/carousel'

const MoviesSlider: React.FC<{ list: number[] }> = ({ list }) => {
  return (
    <Carousel className='py-2'>
      <CarouselContent>
        {list.map((item) => (
          <div key={item}>
            <CarouselItem>
              <div className='w-60 h-92 text-center overflow-hidden'>
                <img src='https://picsum.photos/300/400' alt='' />
                <p>movie_title</p>
              </div>
            </CarouselItem>
          </div>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default MoviesSlider
