"use client"
import styles from '@/styles/profile_header.module.scss';
import { Dosis } from 'next/font/google';
import Image from 'next/image';
import UserInfo from '@/components/userInfo';


const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})


export default function Profile_header() {
    return (
        <div>
            <div className={styles.profile_header}>
                <p>＜</p>
            </div>
            <div className={styles.profile_container}>
                <UserInfo />
                <p>私の趣味は、テレビゲームです。最近では、JavaScriptを勉強しています。</p>
            </div>
        </div>

    )
};