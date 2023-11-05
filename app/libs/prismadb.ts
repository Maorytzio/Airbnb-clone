import { PrismaClient } from '@prisma/client'

// prisma is available as global, no need to create it anywhere in code. 
declare global {
  var prisma: PrismaClient | undefined
}


const client = globalThis.prisma || new PrismaClient()

// not efected by nextjs hot-reload
// ensure that PrismaClient is only created once
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = client
}

export default client