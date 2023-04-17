import Link from 'next/Link'


export default function Blog() {
    return(
        <>
            <h1> Welcome to my Blog </h1>
            <p>Blog page</p>
            <Link href="/about">About Page</Link>
        </>
    )
}