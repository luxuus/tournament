export default function DisabledLink({ name }: { name: string }) {
  return (
    <button
      disabled
      className="flex flex-1 min-w-44 max-w-fit justify-between text-neutral-500 p-2 bg-neutral-300 hover:bg-neutral-200 hover:text-neutral-600 border-neutral-200 transition ease-linear delay-75 duration-100 rounded-md"
    >
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
          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    </button>
  );
}
