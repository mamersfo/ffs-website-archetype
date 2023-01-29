import Link from "next/link"
import { fetchAPI } from '../../lib/strapi/api'

// async function getPosts () {
//     const resp = await fetch('http://localhost:3000/api/posts')
//     return resp.json()
// }

interface LayoutProps {
    children: React.ReactNode
}

export default async function Page ({children}: LayoutProps) {
    // let posts = await getPosts()
    let posts = await fetchAPI('/posts')

    return (
        <div className='flex gap-8'>
            <ul className='flex-none'>
                {posts.data.map(({id, attributes}: {id: number, attributes: any}) => 
                    <li key={`movie-${attributes.slug}`}
                        className='hover:underline cursor-pointer'
                    >
                        <Link href={`/posts/${attributes.slug}`}>{attributes.title}</Link>
                    </li>
                )}
            </ul>
            <div>
                {children}
            </div>
        </div>
    )
}