import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        //setLikeCount(likeCount + 1);
        setLikeCount((state) => {
            return state + 1
        });
    }

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/leoschwartz" alt='' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Leo Schwartz</strong>
                            <time title='20 de abril as 16:07' dateTime='2023-04-20 16:07:42'>About 1h ago</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Delete comment'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Applaud <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}