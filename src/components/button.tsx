
"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { lazy } from 'react';
import styles from '@/styles/button.module.scss';

export default function button() {

    return (
        <div className={styles.button}>
            <h1>入室</h1>
        </div>)
}
