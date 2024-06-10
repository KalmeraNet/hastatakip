// "use server"
// import NextAuth, { AuthError } from 'next-auth';
// import { authConfig } from './auth.config';
// import Credentials from 'next-auth/providers/credentials';
// import { UserResult } from './server';

// export type UserPass = { email: string, password: string }

// export const { auth, signIn, signOut } = NextAuth({
//     ...authConfig,
//     providers: [
//         AzureADProvider({
//             clientId: process.env.AZURE_AD_CLIENT_ID,
//             clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
//             tenantId: process.env.AZURE_AD_TENANT_ID,
//         }),
//         // Credentials({
//         //     name: 'login',
//         //     async authorize(credentials) {
//         //         let vls: UserPass = credentials as UserPass
//         //         let res: any
//         //         let usr: any
//         //         try {
//         //             res = await fetch('http://172.17.0.3:7400/v1/getLoginUser', {
//         //                 method: 'POST',
//         //                 headers: {
//         //                     'Content-Type': 'application/json',
//         //                     'accept': 'application/json'
//         //                 },
//         //                 body: JSON.stringify({ id: vls.email, password: vls.password }),
//         //             })
//         //             // .then((response) => response.json())
//         //             // .then((data) => console.log(data));
//         //             usr = await res.json() as UserResult

//         //         } catch (e) {
//         //             console.error(e)
//         //         }






//         //         return usr
//         //     },
//         // })
//     ]
// });

// function AzureADProvider(arg0: { clientId: string | undefined; clientSecret: string | undefined; tenantId: string | undefined; }): import("@auth/core/providers").Provider {
//     throw new Error('Function not implemented.');
// }
