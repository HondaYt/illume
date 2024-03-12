
"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { lazy } from 'react';
import { Dosis } from 'next/font/google';
import styles from '@/styles/splash.module.scss';

const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})

export default function Splash() {

    return (
        <div className={styles.splash}>
            <Image src="assets/splashLogo.svg" alt="ロゴ" width={150} height={150} loading='lazy' />
            <h1 className={DosisFont.className}>illuMe</h1>
        </div>)
}
