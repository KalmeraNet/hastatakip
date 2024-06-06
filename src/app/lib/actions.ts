import { UserPass, signIn } from '@/auth';
import { AuthError } from 'next-auth';

// ...

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        let up: UserPass = {
            email: formData.get('email') as string ?? '',
            password: formData.get('password') as string ?? ''
        }
        await signIn('credentials', { ...up, callbackUrl: '/admin' });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}