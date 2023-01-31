import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
    try {
        await res.revalidate('/posts')
        return res.json( {revalidated: true} )
    } catch (err ) {
        return res.status(500).send(`Error revalidating: ${(err as Error).message}`)
    }
}