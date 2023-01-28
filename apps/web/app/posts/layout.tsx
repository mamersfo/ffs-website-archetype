import Link from "next/link"

async function getPosts () {
    const resp = await fetch('http://localhost:3000/api/posts')
    return resp.json()
}

interface LayoutProps {
    children: React.ReactNode
}

export default async function Page ({children}: LayoutProps) {
    let posts = await getPosts()

    return (
        <div className='flex gap-8'>
            <ul className='flex-none'>
                {posts.map((post: any) => 
                    <li key={`movie-${post.id}`}
                        className='hover:underline cursor-pointer'
                    >
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                )}
            </ul>
            <div>
                {children}
            </div>
        </div>
    )
}