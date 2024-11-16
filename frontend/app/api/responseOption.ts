export const base_url = 'https://api.themoviedb.org/3'
export const api_key = process.env.TBDM_API_KEY || undefined

export const responseOption = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}
