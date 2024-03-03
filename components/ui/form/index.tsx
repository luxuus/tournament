import Button from "@/components/ui/buttons";
import { useState } from "react";
import DefaultSubmitButton from "../buttons/submit";

// type Game = {
//   name: string
//   first_release_date: string
// }


export default function CreateTournamentForm() {

  // const [gameName, setGameName] = useState<Game[]>([])

  // async function getGameNames() {

  //   await fetch('/api/games', {
  //     method: 'POST'
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     setGameName(data)
  //   })
  // }

  // async function getGameName(gameId: number) {
  //   await fetch(`/api/covers/${gameId}`, {
  //     method: 'POST',
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  // }

  // async function getGameCover(gameId: number) {
  //   await fetch(`/api/covers/${gameId}`, {
  //     method: 'POST',
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  // }

  // async function getGameCoverAll() {
  //   await fetch(`/api/covers/`, {
  //     method: 'POST'
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  // }

  async function createTournament(formData: FormData) {
    const rawFormData = Object.fromEntries(formData.entries())
    console.log(rawFormData);
  }

  return (
    <div className="flex border border-neutral-700 p-4">
      <fieldset className="flex flex-1">
        <form className="flex flex-1 flex-col gap-10 justify-between" action={createTournament}>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-lg">
                Tournament Name :
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="Choose a tournament name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="startDate" className="text-lg">
                Start date :
              </label>
              <input
                name="startDate"
                type="datetime-local"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="text-lg">
                Game : 
              </label>
              <input
                name="game"
                type="search"
                required
                placeholder="Choose a game"
                // onChange={getGameNames}
              />
              {/* <div>
                {gameName.map((game, index) => (
                  <ul key={index}>
                    <li>{game.name}</li>
                  </ul>
                ))}
              </div> */}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-lg">
                Description :
              </label>
              <input
                name="description"
                type="textarea"
                placeholder="Choose a tournament description"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="rounds" className="text-lg">
                Number of Rounds :
              </label>
              <input
                name="rounds"
                type="number"
                required
                placeholder="4"
                // onChange={(e) => getGameCover(Number((e.target as HTMLInputElement).value))}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="playersLimit" className="text-lg">
                Players Limit :
              </label>
              <input
                name="playersLimit"
                type="number"
                required
                placeholder="10"
              />
            </div>
          </div>
          <DefaultSubmitButton name="Create" />
        </form>
      </fieldset>

      <div className="flex flex-1"></div>
    </div>
  );
}
