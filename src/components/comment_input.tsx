"use client"
import styles from '@/styles/comment_input.module.scss';
import Image from 'next/image';

export default function Comment_Input() {
    return (
        <div className={styles.commentinput_area}>
            <div className={styles.commentinput_area_container}>
                <input type="text" placeholder='文字を入力' />
                <p>が好き</p>
                <div className={styles.commentinput_send}>
                    <Image src="assets/icon-send.svg" width={20} height={20} loading='lazy' alt="送信"></Image>
                </div>
            </div>
        </div>
    )
};