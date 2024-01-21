export default function Button({
  name,
  fill,
}: {
  name: string;
  fill: boolean;
}) {
  if (fill) {
    return (
      <button className="flex flex-1 min-w-fit max-w-44 justify-center p-2 bg-purple-700 hover:bg-purple-600 focus:bg-purple-600 transition ease-linear delay-75 duration-100  rounded-md">
        {name}
      </button>
    );
  } else {
    return (
      <button className="flex flex-1 min-w-fit max-w-44 gap-3 justify-between text-neutral-200 p-2 bg-none border border-neutral-200 hover:bg-neutral-200 hover:text-black focus:bg-neutral-200 focus:text-black transition ease-linear delay-75 duration-100  rounded-md">
        {name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </button>
    );
  }
}
