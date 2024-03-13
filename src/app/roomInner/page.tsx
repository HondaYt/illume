"use client";
import { useState, useEffect } from 'react';
import Comment from '@/components/comment';
import CommentInput from '@/components/commentInput';
import Empathy from '@/components/empathy';
import styles from '@/styles/roomInner.module.scss';

export default function Room() {

    const [empathyShown, setEmpathyShown] = useState(false);
    const [empathyKey, setEmpathyKey] = useState(0);
    const [sendComment, setSendComment] = useState(false);

    const showEmpathy = () => {
        setEmpathyShown(true);
        setEmpathyKey(prevKey => prevKey + 1); // キーを更新
        setTimeout(() => setEmpathyShown(false), 3000); // アニメーション後に非表示にする
    };

    const comment = [
        { text: "映画" },
        { text: "次郎ラーメン" },
        { text: "ゲーム" },
        { text: "アニメ" },
        { text: "スポーツ" },

    ];
    return (
        <>
            <div className={styles.postsWrap}>
                {comment.map((comment, index) => (
                    <Comment key={index} text={comment.text} onGoodClicked={showEmpathy} />
                ))}
                {empathyShown && <Empathy key={empathyKey} />}
                <CommentInput />

            </div>

        </>
    )
}

