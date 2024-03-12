"use client"
import styles from '@/styles/add_group.module.scss';
import Image from 'next/image';

export default function AddGroup() {
    return (
        <div className={styles.btn_add_group}>
            <Image src="assets/add_group.svg" width={40} height={40} loading='lazy' alt='グループ追加' />
        </div>
    )
};