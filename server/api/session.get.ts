// file: e.g: ~/server/api/session.get.ts
import { getServerSession, getToken } from '#auth'
export default eventHandler(async (event) => {
   const session = await getServerSession(event)
   const token = await getToken({ event })
   console.log('-------------->token', token)
   if (!session) {
      return { status: 'unauthenticated!' }
   }
   return { status: 'authenticated!', text: 'im protected by an in-endpoint check', session }
})