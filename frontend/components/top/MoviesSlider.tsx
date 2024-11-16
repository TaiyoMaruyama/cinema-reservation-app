import type { Movie } from '@/types/tmdb'
import { Carousel, CarouselContent, CarouselItem } from '../shadcn/carousel'

const MoviesSlider: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <Carousel className='py-2'>
      <CarouselContent>
        {movies.map((movie) => (
          <div key={movie.id}>
            <CarouselItem>
              <div className='w-48 text-center overflow-hidden'>
                <img
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
                  alt=''
                />
                <p>{movie.original_title}</p>
              </div>
            </CarouselItem>
          </div>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default MoviesSlider
