import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`/movies/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
