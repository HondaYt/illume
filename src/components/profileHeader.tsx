"use client"
import styles from '@/styles/profile_header.module.scss';
import Image from 'next/image';
import UserInfo from '@/components/userInfo';
import Link from 'next/link';


export default function Profile_header() {
    return (
        <div>
            <div className={styles.profile_header}>
                <Link href="/roomInner"><Image src="assets/icon-back.svg" width={30} height={30} alt=''/></Link>
            </div>
            <div className={styles.profile_container}>
                <UserInfo />
                <p className={styles.profile_container_message}>僕の趣味はモンスターエナジーを飲むこと！楽しい人生を送るんだ！わーい！</p>
            </div>
        </div>

    )
};