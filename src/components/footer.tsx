"use client"
import styles from '@/styles/footer.module.scss';
import { Dosis } from 'next/font/google';
import Image from 'next/image';

const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.myprofile_icon}>
                <Image src='assets/icon-personlist.svg' width={40} height={40} alt="参加者を表示" />
                <Image src='assets/icon-notification.svg' width={40} height={40} alt="通知" />
                <Image src='https://picsum.photos/500' width={40} height={40} alt="自分のアイコン" />
            </div>
        </footer>
    )
};