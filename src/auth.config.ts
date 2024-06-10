// import type { NextAuthConfig } from 'next-auth';

// export const authConfig = {
//     pages: {

//     },
//     callbacks: {
//         authorized({ auth, request: { nextUrl } }) {
//             const isLoggedIn = !!auth?.user;
//             const isOnDashboard = nextUrl.pathname.startsWith('/menu');
//             const isOnAdminDashboard = nextUrl.pathname.startsWith('/admin/menu');
//             const isOnCroDashboard = nextUrl.pathname.startsWith('/cro/menu');

//             if (isOnDashboard) {
//                 if (isLoggedIn) return true;
//                 return false; // Redirect unauthenticated users to login page
//             } else if (isLoggedIn) {
//                 return Response.redirect(new URL('/menu', nextUrl));
//             }

//             if (isOnAdminDashboard) {
//                 if (isLoggedIn) return true;
//                 return false; // Redirect unauthenticated users to login page
//             } else if (isLoggedIn) {
//                 return Response.redirect(new URL('/admin/menu', nextUrl));
//             }

//             if (isOnCroDashboard) {
//                 if (isLoggedIn) return true;
//                 return false; // Redirect unauthenticated users to login page
//             } else if (isLoggedIn) {
//                 return Response.redirect(new URL('/cro/menu', nextUrl));
//             }
//             return true;
//         },
//         async jwt({ token, user }) {
//             if (user) {
//                 token.accessToken = JSON.stringify(user)
//             }

//             return token
//         },
//         async session({ session, token, user }) {
//             return JSON.parse((token.accessToken as string) ?? 'null')
//             // return session
//         }
//     },
//     providers: [], // Add providers with an empty array for now

// } satisfies NextAuthConfig;

