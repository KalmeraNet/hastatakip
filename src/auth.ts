"use server"
import NextAuth, { AuthError } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { UserFunctionsApi, UserResult, basePath, userApi } from './server';

export type UserPass = { email: string, password: string }

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [Credentials({
        async authorize(credentials) {
            let vls: UserPass = credentials as UserPass

            let res = await fetch(basePath + '/v1/getServerUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ id: vls.email }),
            })
            // .then((response) => response.json())
            // .then((data) => console.log(data));

            let usr = await res.json() as UserResult

            // let usr: UserResult | null = null
            // try {
            //     usr = await uApi.getServerUser({ id: vls.email })
            // }
            // catch (e) {
            //     let x = 1;
            // }
            // if (credentials.email == 'a') {
            //     throw new Error('Invalid Username')
            // }
            // if (credentials.email == 'aa' && credentials.password == 'a') {
            //     throw new Error('Invalid Password')
            // }
            // if (!(credentials.email == 'b' && credentials.password == 'b')) {
            //     throw new Error('Unknown user or password')
            // }

            return usr
        },
    })]
});