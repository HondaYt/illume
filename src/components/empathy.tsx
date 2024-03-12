"use client"
import styles from '@/styles/empathy.module.scss';
import Detail_AC from '@/components/detail_ac';

export default function Empathy() {
    return (
        <div className={styles.empathyLog}>
            <p className={styles.empathyLog_msg}><span>ほんだゆうと</span>に共感しました。</p>
            <Detail_AC />
        </div>
    )
};