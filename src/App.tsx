import { Post, PostType } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css'



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/leoschwartz',
      name: 'Leo Schwartz',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys 👋' },
      { type: 'paragraph', content: 'Just uploaded a new project in my portfolio. It is a project I did on NLW Return, a Rocketseat event. The name of the project is DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },   
    ],
    publishedAt: new Date('2023-04-08 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://mediamass.net/jdd/public/documents/celebrities/3805.jpg',
      name: 'Creed Bratton',
      role: 'Sales Associate @Dunder Mifflin'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys 👋' },
      { type: 'paragraph', content: 'Just uploaded a new project in my portfolio. It is a project I did on NLW Return, a Rocketseat event. The name of the project is DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },   
    ],
    publishedAt: new Date('2023-04-23 20:00:00')
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}