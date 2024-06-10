import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



type Props = {
}

export const ReqLogin = (props: React.PropsWithChildren<Props>) => {
    const { status } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status === 'unauthenticated') {
            void router.push('/');
        }
    }, [router, status]);

    return <>
        {status === 'authenticated' && <>
            {props.children}
        </>}
    </>


}