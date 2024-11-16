export const api_key = process.env.TBDM_API_KEY || undefined

export const responseOption = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}
