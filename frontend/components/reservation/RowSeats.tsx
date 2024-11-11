import {
  demoAlphabetList,
  demoColumnList,
  passagePoint,
} from '@/consts/reservation'
import { SeatBlankComponent } from '../gadgets/seatButton'
import ColumnSeats from './ColumnSeats'

const RowSeats = () => {
  return (
    <>
      {demoAlphabetList.map((alphabet) => (
        <>
          <div key={alphabet} className='flex'>
            {passagePoint.rows.length === 0 && (
              <SeatBlankComponent key={alphabet} alpha={alphabet} />
            )}
            {demoColumnList.map((column) => (
              <ColumnSeats
                key={`${alphabet}-${column}`}
                alphabet={alphabet}
                index={column}
                passagePoint={passagePoint}
              />
            ))}
          </div>
          {passagePoint.rows.includes(alphabet) && (
            <SeatBlankComponent key={alphabet} />
          )}
        </>
      ))}
    </>
  )
}

export default RowSeats
