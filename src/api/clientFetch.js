import axios from 'axios'

export const clientFetch = axios.create({
  baseURL: import.meta.env.VITE_APP_DB_BASE_URL,
})
