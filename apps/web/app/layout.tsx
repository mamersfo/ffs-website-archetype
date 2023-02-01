import { NavLink } from './nav-link'
import '../styles/globals.css'

export default function RootLayout ({children}: { children: React.ReactNode }) {
    return (
        <html lang='nl' data-theme='dark'>
            <body className='p-4'>
                <header>
                    <nav className='tabs space-x-4'>
                        <NavLink href='/'>Home</NavLink>
                        <NavLink href='/posts'>Posts</NavLink>
                    </nav>
                </header>
                <div className='mt-4'>
                    {children}
                </div>
            </body>
        </html>
    )
}