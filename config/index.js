const dev = NEXT_PUBLIC_VERCEL_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : `https://${NEXT_PUBLIC_VERCEL_URL}`

