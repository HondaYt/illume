"use client"
import styles from '@/styles/comment.module.scss';
import { Dosis } from 'next/font/google';
import Image from 'next/image';

const DosisFont = Dosis({
    weight: "400",
    subsets: ["latin"]
})

type CommentProps = {
    text: string;
}


export default function mainfooter(props: CommentProps) {
    return (
        <div className={styles.comment_area}>
            <p>{props.text}が好き！</p>
            <div className={styles.comment_good}>
                <Image src="assets/icon-good.svg" width={30} height={30} loading='lazy' alt="グッドボタン" />
            </div>
        </div>
    )
};