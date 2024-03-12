"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { lazy } from 'react';
import { Dosis } from 'next/font/google';



const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})

const HomePage = () => {


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    // スプラッシュが非表示の場合は何も表示しない
    if (!showSplash) return null;

    return;
};

export default HomePage;