import {
  type PassagePoint,
  demoReserved,
  seatBlank,
} from '@/consts/reservation'
import { SeatBlankComponent, SeatButtonComponent } from '../gadgets/seatButton'

const ColumnSeats: React.FC<{
  alphabet: string
  index: number
  passagePoint: PassagePoint
}> = ({ alphabet, index, passagePoint }) => {
  const id = `${alphabet}-${index}`

  return (
    <>
      {seatBlank.includes(id) ? (
        <SeatBlankComponent key={id} />
      ) : (
        <div className='flex'>
          <SeatButtonComponent
            key={id}
            label={String(index)}
            reserved={demoReserved.includes(id)}
          />
          {passagePoint.columns.includes(index) && (
            <SeatBlankComponent alpha={alphabet} />
          )}
        </div>
      )}
    </>
  )
}

export default ColumnSeats
