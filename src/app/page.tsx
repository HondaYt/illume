"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { lazy } from 'react';
import { Dosis } from 'next/font/google';
import Splash from '@/components/splash';
import ButtonS from '@/components/button';



const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})

export default function App() {
    return (
        <>
            <Splash />
            <ButtonS title="入室" href="/room" />
        </>
    )
}

