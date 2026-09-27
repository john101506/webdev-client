import Link from "next/link";

export default function TOC() {
    return (
        <ul>
            <li>
                <Link href="/labs" id="wd-home-link">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/labs/lab1">Lab 1</Link>
            </li>
            <li>
                <Link href="/labs/lab2">Lab 2</Link>
            </li>
            <li>
                <Link href="/labs/lab3">Lab 3</Link>
            </li>
            <li>
                <Link href="/book/ch1" id="wd-toc-book-link">Chapter 1</Link>
            </li>
            <li>
                <Link href="https://kambaz.dev/syllabus" target="_blank" rel="noreferrer">
                    Kambaz
                </Link>
            </li>
            <li>
                <a href="https://webdev-client.vercel.app/book/ch1#sec-1-3-11" target="_blank" rel="noreferrrer">
                    Course Chapter 1.3.11
                </a>
            </li>
            <li>
                <Link href="/" id="wd-kambaz-link">
                    Kambaz
                </Link>
            </li>
        </ul>
    );
}