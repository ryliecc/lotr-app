import {volumes} from "../../lib/data";

export default function TheReturnOfTheKing() {
    const volume = {volumes.find(({slug}) => slug === "the-fellowship-of-the-ring")};
  return (
    <>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <h2>Books:</h2>
      <ul>{volume.books.map((book) => {
        return (
            <li>{book.ordninal}{book.title}</li>
        )
      })}</ul>
      <Link href="/volumes">← All Volumes</Link>
    </>
  );
}
