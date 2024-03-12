"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { lazy } from 'react';
import { Dosis } from 'next/font/google';
import Splash from '@/components/splash';
import Rooms from '@/components/room';
import Mainheader from '@/components/main_header';
import GroupAdd from '@/components/add_group';
import Mainfooter from '@/components/main_footer';
import Subheader from '@/components/sub_header';
import Comment from '@/components/comment';
import Main from '@/app/main/page';

const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})

export default function App() {
    const [showSplash, setShowSplash] = useState(true); // Splashの表示状態を管理する状態変数

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false); // 3秒後にSplashを非表示にする
        }, 2300);

        return () => clearTimeout(timer); // コンポーネントのアンマウント時にタイマーをクリアする
    }, []);

    return (
        <>

            {showSplash && <Splash />}
            <Main />

        </>
    )
}

