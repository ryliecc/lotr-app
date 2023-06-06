import { volumes } from "../../lib/data";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Volume() {
  const router = useRouter();
  const { volumeSlug } = router.query;
  const currentVolume = volumes.find((volume) => volume.slug === volumeSlug);
  const currentIndex = volumes.findIndex(
    (volume) => volume.slug === volumeSlug
  );
  const previousVolume = volumes[currentIndex - 1];
  const nextVolume = volumes[currentIndex + 1];

  if (!currentVolume) {
    setTimeout(() => {
      router.push("/volumes");
    }, 3000);
    return (
      <h1>
        Volume with slug {volumeSlug} was not found. Redirecting to All Volumes.
      </h1>
    );
  }

  const { title, description, cover, books } = currentVolume;

  function handlePreviousVolume() {
    router.push(`/volumes/${previousVolume.slug}`);
  }

  function handleNextVolume() {
    router.push(`/volumes/${nextVolume.slug}`);
  }

  return (
    <>
      <Link href="/volumes">← Back to all volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>Books:</h2>
      <ul>
        {books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}:{book.title}
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        height={230}
        width={140}
        alt={`A picture of the ${title} book cover`}
      />
      {previousVolume && (
        <button onClick={handlePreviousVolume}>Previous Volume</button>
      )}
      {nextVolume && <button onClick={handleNextVolume}>Next Volume</button>}
    </>
  );
}
