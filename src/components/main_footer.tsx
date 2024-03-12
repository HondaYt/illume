"use client"
import styles from '@/styles/main_footer.module.scss';
import { Dosis } from 'next/font/google';
import Image from 'next/image';

const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})


export default function mainfooter() {
    return (
        <footer className={styles.main_footer}>
            <div className={styles.myprofile_icon}>
                <Image src='https://picsum.photos/500' width={50} height={50} alt="自分のアイコン" />
                <Image src='assets/icon-personlist.svg' width={50} height={50} alt="参加者を表示" />
                <Image src='assets/icon-notification.svg' width={50} height={50} alt="自分のアイコン" />
            </div>
        </footer>
    )
};