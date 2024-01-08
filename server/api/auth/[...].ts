// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth'
import GoogleProvider from "next-auth/providers/google";
export default NuxtAuthHandler({
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GoogleProvider.default({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    session: async ({session, token}) => {
      await $fetch('http://localhost:3333/auth/social', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.accessToken}`
        },
        body: JSON.stringify({})
      }).then(res => {
        (session as any).appiUser = res
      }).catch(err => {
        console.log('-------------------->error')
        console.log(err.response)
      })      
      
      return Promise.resolve(session);
    },
    async jwt({ token, account, profile }) {
      // Persist the access_token in the encrypted JWT.
      if (account) {
        token.accessToken = account.access_token
      }
      return token;
    }
  },
})