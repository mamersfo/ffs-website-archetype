import { fetchAPI } from "../../../lib/strapi/api"

// async function getPost (slug: string) {
//     const resp = await fetch('http://localhost:3000/api/posts')
//     const json = await resp.json() as any[]
//     ('json:', json)
//     const found = json.filter(d => d.slug === slug)
//     if ( found.length > 0 ) return found[0]
//     return null
// }

interface PageProps {
    params: {
        slug: string
    }
}

export default async function Page ({params}: PageProps) {

    // const post = await getPost(params.slug)
    const result = await fetchAPI('/posts', {
        filters: { slug: params.slug }
    })

    if ( result.data?.length > 0 && result.data[0] ) {
        const { id, attributes: post } = result.data[0]
        
        return (
            <div className='prose'>
                <h2>{post.title}</h2>
                <div className='font-bold'>{post.intro}</div>
                <div className='mt-4'>{post.body}</div>
            </div>
        )
    }

    return <>Nothing found</>
}

export async function generateStaticParams () {
    let result = await fetchAPI('/posts')
    return result.data.map(({id, attributes}: {id: number, attributes: any}) => (
        {slug: attributes.slug}
    ))
}