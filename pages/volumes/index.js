import Link from "next/link";

export default function Volumes() {
  return (
    <>
      <h1>List of Volumes</h1>
      <ul>
        <li key="the-fellowship-of-the-ring">
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li key="the-two-towers">
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li key="the-return-of-the-king">
          <Link href="/volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li>
      </ul>
    </>
  );
}
