"use client"
import styles from '@/styles/userInfo.module.scss';import Image from 'next/image';

export default function User_info() {
    return (
        <div className={styles.user_area}>
            <Image src='https://picsum.photos/500' width={50} height={50} loading='lazy' alt="アイコン"></Image>
            <div className={styles.user_area_info}>
                <p>ユーザー名</p>
                <p>1月2日</p>
            </div>
            <div className={styles.folloBtn}>
                <p>フォロー</p>
            </div>
        </div>
    )
};