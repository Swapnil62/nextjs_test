import Link from 'next/Link'

export default function Home() {
    return(
        <>
            <h1> Welcome </h1>
            <p>Hello world!</p>
            <Link href="/about"></Link>
        </>
    )
}