"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { lazy } from 'react';
import { Dosis } from 'next/font/google';
import RoomChild from '@/components/roomChild';

import styles from '@/styles/main.module.scss';



const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})

export default function Main() {
    const roomChild = [
        { roomName: "Web制作合宿", href: "/room", count: 20 },
        { roomName: "ECC WebDesign", href: "/room", count: 15 },
        { roomName: "軽音部", href: "/room", count: 10 }
    ]

    return (
        <main className={styles.main}>
            <div className={styles.room_wrapper}>
                {roomChild.map((room, index) => (
                    <RoomChild key={`roomChild-${index}`} roomName={room.roomName} href={room.href} count={room.count} />
                ))}
            </div>
        </main>
    )
}

