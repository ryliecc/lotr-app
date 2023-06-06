import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Next.js Basics - LOTR App</h1>
      <Link href="/volumes">Go to volumes overview</Link>
    </div>
  );
}
