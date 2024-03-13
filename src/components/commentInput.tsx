"use client"
import { useState } from 'react';
import styles from '@/styles/commentInput.module.scss';
import Image from 'next/image';

export default function CommentInput() {


    return (
        <div className={styles.commentinput_area}>
            <div className={styles.commentinput_area_container}>
                <div className={styles.commentinput_text}>
                    <input type="text" placeholder='文字を入力' style={{ height: 40 }} />
                    <p>が好き</p>
                </div>
                <div className={styles.commentinput_send}>
                    <Image src="assets/icon-send.svg" width={20} height={20} loading='lazy' alt="送信"></Image>
                </div>
            </div>
        </div>
    )
};