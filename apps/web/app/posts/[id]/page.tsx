

async function getPost (id: number) {
    const resp = await fetch('http://localhost:3000/api/posts')
    const json = await resp.json() as any[]
    const found = json.filter(d => d.id === id)
    if ( found.length > 0 ) return found[0]
    return null
}

interface PageProps {
    params: {
        id: string
    }
}

export default async function Page ({params}: PageProps) {

    const post = await getPost(parseInt(params.id))

    return (
        <div className='prose'>
            <h2>{post.title}</h2>
            <div className='font-bold'>{post.intro}</div>
            <div className='mt-4'>{post.body}</div>
        </div>
    )
}

// export async function generateStaticParams () {
//     const resp = await fetch('http://localhost:3000/api/posts')
//     const posts = await resp.json() as any[]
//     return posts.map(post => ({id: '' + post.id}))
// }