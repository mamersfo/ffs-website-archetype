import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {

    if ( req.query.token !== process.env.REVALIDATE_TOKEN ) {
        return res.status(401).json({ message: 'invalid token'} )
    }

    try {
        console.log('revalidate - body:', req.body)
        await res.revalidate(`/posts/${req.body?.entry?.slug}`)
        await res.revalidate('/posts')
        return res.json( {revalidated: true} )
    } catch (err ) {
        return res.status(500).send(`Error revalidating: ${(err as Error).message}`)
    }
}