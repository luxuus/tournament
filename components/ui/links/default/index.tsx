import Link from "next/link";

export default function DefaultLink({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  return (
    <Link
      href={url}
      className="flex flex-1 min-w-44 max-w-fit justify-center p-2 bg-purple-700 hover:bg-purple-600 focus:bg-purple-600 transition ease-linear delay-75 duration-100  rounded-md"
    >
      {name}
    </Link>
  );
}
