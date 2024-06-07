"use server"
import NextAuth, { AuthError } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { UserFunctionsApi, UserResult, basePath, userApi } from './server';

export type UserPass = { email: string, password: string }

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [Credentials({
        name: 'login',
        async authorize(credentials) {
            let vls: UserPass = credentials as UserPass
            let res: any
            let usr: any
            try {
                res = await fetch('http://172.17.0.3:7400/v1/getLoginUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json'
                    },
                    body: JSON.stringify({ id: vls.email, password: vls.password }),
                })
                // .then((response) => response.json())
                // .then((data) => console.log(data));
                usr = await res.json() as UserResult

            } catch (e) {
                console.error(e)
            }






            return usr
        },
    })]
});