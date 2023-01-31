'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

interface NavLinkProps {
    href: string
    children: React.ReactNode
}

export const NavLink = ({href, children}: NavLinkProps) => {

    let segment = useSelectedLayoutSegment()
    let active = href === `/${segment || ''}`

    return (
        <Link 
            className={active ? 'underline' : ''} 
            href={href}
            prefetch={false}
        >
                {children}
        </Link>
    )
}
