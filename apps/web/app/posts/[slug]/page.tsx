import { fetchAPI } from "../../../lib/strapi/api"

interface PageProps {
    params: {
        slug: string
    }
}

export default async function Page ({params}: PageProps) {

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