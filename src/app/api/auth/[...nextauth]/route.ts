import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad"
export const authOptions = {
    site: process.env.NEXTAUTH_URL,
    providers: [
        AzureADProvider({
            clientId: process.env.AZURE_AD_CLIENT_ID ?? '',
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET ?? '',
            tenantId: process.env.AZURE_AD_TENANT_ID ?? '',
        }),
        // Credentials({
        //     name: 'login',
        //     async authorize(credentials) {
        //         let vls: UserPass = credentials as UserPass
        //         let res: any
        //         let usr: any
        //         try {
        //             res = await fetch('http://172.17.0.3:7400/v1/getLoginUser', {
        //                 method: 'POST',
        //                 headers: {
        //                     'Content-Type': 'application/json',
        //                     'accept': 'application/json'
        //                 },
        //                 body: JSON.stringify({ id: vls.email, password: vls.password }),
        //             })
        //             // .then((response) => response.json())
        //             // .then((data) => console.log(data));
        //             usr = await res.json() as UserResult

        //         } catch (e) {
        //             console.error(e)
        //         }






        //         return usr
        //     },
        // })
    ],
}

const auth = NextAuth(authOptions)

export { auth as GET, auth as POST, auth as PUT, auth as DELETE }

//export default NextAuth(authOptions)