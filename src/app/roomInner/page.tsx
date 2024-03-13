import Comment from '@/components/comment';
import styles from '@/styles/roomInner.module.scss';
export default function Room() {

    const

    return (
        <>
            <div className={styles.postsWrap}>
                <Comment text="映画" />
                <Comment text="ご飯" />
                <Comment text="ゲーム" />
                <Comment text="アニメ" />
                <Comment text="音楽" />
                <Comment text="スポーツ" />
            </div>
        </>
    )
}

