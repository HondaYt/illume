"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { lazy } from 'react';
import { Dosis } from 'next/font/google';
import { waitForDebugger } from 'inspector';

const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})


const HomePage = () => {
    return(
        <div className='splash'>
        <Image src="splashLogo.svg" alt="ロゴ" width={150} height={150} loading='lazy'/>
        <h1 className={DosisFont.className}>illuMe</h1>
    </div>
)};

export default HomePage;
