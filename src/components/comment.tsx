"use client"
import styles from '@/styles/comment.module.scss';
import { Dosis } from 'next/font/google';
import Image from 'next/image';

const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})


export default function mainfooter() {
    return (
        <div className={styles.comment_area}>
            <div className={styles.comment_area_container}>
                <p>映画が好き！</p>
                <div className={styles.comment_good}>
                    <Image src="assets/icon-good.svg" width={50} height={50} loading='lazy' alt="グッドボタン"></Image>
                </div>
            </div>
        </div>
    )
};