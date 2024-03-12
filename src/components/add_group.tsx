"use client"
import styles from '@/styles/add_group.module.scss';
import Image from 'next/image';

export default function add_group() {
    return (
        <div className={styles.btn_add_group}>
            <Image src="assets/add_group.svg" width={30} height={30} loading='lazy' alt='グループ追加'/>
        </div>
    )
};