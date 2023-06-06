import {volumes} from "../../lib/data";
import Image from "next/image";
import {useRouter} from "next/router";

export default function Volume() {
  const router = useRouter();
  const { volumeSlug } = router.query;
  const currentVolume = volumes.find((volume) => volume.slug === volumeSlug);

  if (!currentVolume) {
    setTimeout(() => {
      router.push("/volumes");
    }, 3000);
    return <h1>Volume with slug {volumeSlug} was not found.</h1>;
  }

  const {title, description, cover, books} = currentVolume

    return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>Books:</h2>
      <ul>{books.map((book) => {
        return (
            <li>{book.ordinal}:{book.title}</li>
        )
      })}</ul>
      <Image src={'public${cover}'} height={230px} width={140px} alt="A picture of the book cover" />
      <Link href="/volumes">← All Volumes</Link>
    </>
  );
}
