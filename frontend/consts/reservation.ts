// 16までの数字を動的に生成
export const demoColumnList: number[] = Array.from(
  { length: 18 },
  (_, index) => index + 1,
)

// アルファベットのAからPまでを動的に生成
export const demoAlphabetList: string[] = Array.from(
  { length: 16 },
  (_, index) => String.fromCharCode(65 + index),
)

// NOTE:削除予定
export const seatBlank = ['A-1', 'A-2', 'A-17', 'A-18', 'B-1', 'B-18']

export interface PassagePoint {
  columns: number[]
  rows: string[]
}
// NOTE:削除予定
export const passagePoint: PassagePoint = { columns: [5, 13], rows: ['H'] }
// NOTE:削除予定
export const demoReserved = ['A-4', 'G-7', 'G-8']
