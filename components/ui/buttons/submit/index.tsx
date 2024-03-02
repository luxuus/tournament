export default function DefaultSubmitButton(props : { name: string} ) {
  return (
    <button
      type="submit"
      className="flex flex-1 min-w-44 max-w-fit justify-center p-2 bg-purple-700 hover:bg-purple-600 focus:bg-purple-600 transition ease-linear delay-75 duration-100  rounded-md"
    >
      {props.name}
    </button>
  );
}
