"use client"
import Image from 'next/image';
import styles from '@/styles/room.module.scss';
import JoinButton from '@/components/button';
import UserIcon from '@/components/userIcon';

type RoomProps = {
    roomName: string;
    href: string;
    count: number;
}

export default function room(props: RoomProps) {
    return (
        <div className={styles.room_area}>
            <div className={styles.room_header}>
                <h1 className={styles.room_name}>{props.roomName}</h1>
                <JoinButton title="入室" href={props.href} onClick={() => { }} />
            </div>
            <div className={styles.room_userIcon}>
                {[...Array(4)].map((_, index) => (
                    <UserIcon key={`userIcon-${index}`} random={index} />
                ))}
                <div className={styles.room_count}>+{props.count}</div>
            </div>
        </div>
    )
};