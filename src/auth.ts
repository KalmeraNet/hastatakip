"use server"
import NextAuth, { AuthError } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';

export type UserPass = { email: string, password: string }

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [Credentials({
        async authorize(credentials) {
            let vls: UserPass = credentials as UserPass
            if (credentials.email == 'a') {
                throw new Error('Invalid Username')
            }
            if (credentials.email == 'aa' && credentials.password == 'a') {
                throw new Error('Invalid Password')
            }
            if (!(credentials.email == 'b' && credentials.password == 'b')) {
                throw new Error('Unknown user or password')
            }

            return null
        },
    })]
});