"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


const HomePage = () => {
    const Router = useRouter();

    useEffect(() => {
    // 2秒後に次のページに遷移
    const timeoutId = setTimeout(() => {
        Router.push('/main');
    }, 2000);

    // コンポーネントがアンマウントされた場合にクリーンアップ
    return () => clearTimeout(timeoutId);
    }, [Router]);

    return (
    <div className='mainvisual'>
        <img src="/public/next.svg" alt="ロゴ"></img>
    </div>
    );
};

export default HomePage;
