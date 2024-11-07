import RowSeats from './RowSeats'
import ScreenFrame from './ScreenFrame'

const Room = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <ScreenFrame />
      <RowSeats />
    </div>
  )
}

export default Room
