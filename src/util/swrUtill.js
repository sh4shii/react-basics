import axios from "axios";

export const fetcher = (url) =>
  axios.get(url).then((res) => res.data)

// Create a map to store cached data
const cache = new Map()

export const swrConfig = {
  fetcher,
  // Revalidation options
  revalidateOnFocus: true,
  revalidateOnReconnect: false,
  dedupingInterval: 5000, // 1 minute - prevents duplicate requests within this interval
  focusThrottleInterval: 300000, // 5 minutes
  // Use a custom cache provider
  provider: () => cache,
}