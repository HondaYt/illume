"use client"
import Image from 'next/image';
import styles from '@/styles/room.module.scss';
import JoinButton from '@/components/button';
import UserIcon from '@/components/userIcon';


export default function room() {
    return (
        <div className={styles.room_area}>
            <div className={styles.room_header}>
                <h1 className={styles.room_name}>部屋名</h1>
                <JoinButton title="入室" href="/room" />
            </div>
            <div className={styles.room_userIcon}>
                {[...Array(4)].map((_, index) => (
                    <UserIcon key={`userIcon-${index}`} random={index} />
                ))}
            </div>
        </div>
    )
};