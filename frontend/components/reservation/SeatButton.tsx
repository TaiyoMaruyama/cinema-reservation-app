import { SeatBlankComponent, SeatButtonComponent } from '../gadgets/seatButton'

const demoNumList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const demoAlphabetList = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
]
const seatBlank = ['A-1', 'A-2', 'A-15', 'A-16', 'B-1', 'B-16']
const passagePoint = { rows: [5, 11], columns: ['E', 'L'] }

const SeatButton = () => {
  const seatEnumeration = (alpha: string, num: number) => {
    const id = `${alpha}-${num}`
    if (seatBlank.includes(id)) {
      return <SeatBlankComponent key={id} />
    }
    return (
      <div style={{ display: 'flex' }}>
        <SeatButtonComponent key={id} label={String(num)} />
        {passagePoint.rows.includes(num) && (
          <SeatBlankComponent alpha={alpha} />
        )}
      </div>
    )
  }

  return (
    <>
      {demoAlphabetList.map((alpha) => (
        <>
          <div key={alpha} style={{ display: 'flex' }}>
            {demoNumList.map((d) => seatEnumeration(alpha, d))}
          </div>
          {passagePoint.columns.includes(alpha) && (
            <SeatBlankComponent key={alpha} />
          )}
        </>
      ))}
    </>
  )
}

export default SeatButton
