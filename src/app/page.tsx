"use client"
import { useRouter } from 'next/navigation';
import Image from 'next/image';




const HomePage = () => {
    const Router = useRouter();

    // useEffect(() => {
    // // 2秒後に次のページに遷移
    // const timeoutId = setTimeout(() => {
    //     Router.push('/main');
    // }, 2000);

    // // コンポーネントがアンマウントされた場合にクリーンアップ
    // return () => clearTimeout(timeoutId);
    // }, [Router]);

    return (
    <div className='splash'>
        <Image src="/public/assets/logo.svg" alt="ロゴ" width={350} height={350}/>
    </div>
    );
};

export default HomePage;
