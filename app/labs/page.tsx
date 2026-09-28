import Link from "next/link";

export default function Labs() {
    return (
        <div id="wd-labs">
            <h1>Labs</h1>
            <h3>John Dowd</h3>
            <a id="wd-gtihub" href="https://github.com/john101506/webdev-client" target="_blank">
                Github Repository
            </a>
            <ul>
                <li>
                    <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
                </li>
                <li>
                    <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
                </li>
                <li>
                    <Link href="/labs/lab3">Lab 3: JavaScript Fundamntals</Link>
                </li>
                <li>
                    <Link href="/labs/lab4">Lab 4: Placeholder</Link>
                </li>
                <li>
                    <Link href="/labs/lab5">Lab 5</Link>
                </li>
                <li>
                    <Link href="/">Kambaz</Link>
                </li>
            </ul>
        </div>
    );
}