
"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/button.module.scss';

type ButtonProps = {
    title: string;
    href: string;
}

export default function button(props: ButtonProps) {

    return (
        <Link href={props.href} className={styles.button}>
            <p>{props.title}</p>
        </Link>
    )
}
