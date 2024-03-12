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
import UserIcon from '@/components/userIcon';



const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})

export default function App() {

    return (
        <>
            <Mainheader />
            {[...Array(4)].map((_, index) => (
                <UserIcon key={`userIcon-${index}`} random={index} />
            ))}


            <Rooms />
            <GroupAdd />
            <Mainfooter />
            <Subheader />
            <Comment />
        </>
    )
}

