import { PencilLine } from '@phosphor-icons/react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src='https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=42'
            />

            <div className={styles.profile}>
                {/* <img className={styles.avatar} src="https://pbs.twimg.com/profile_images/1594902492072099840/RLvcpKwO_400x400.jpg"/> */}
                <Avatar src="https://avatars.githubusercontent.com/leoschwartz" />

                <strong>Leo Schwartz</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Edit profile
                    {/* Editar seu perfil */}
                </a>
            </footer>
        </aside>
    );
}