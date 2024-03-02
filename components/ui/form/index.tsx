import Button from "@/components/ui/buttons";
import { log } from "console";
import { useState } from "react";

type Game = {
  name: string
  first_release_date: string
}


export default function CreateTournamentForm() {

  const [gameName, setGameName] = useState<Game[]>([])

  async function getGameNames() {

    await fetch('/api/games', {
      method: 'POST'
    })
    .then(res => res.json())
    .then(data => {
      setGameName(data)
    })
  }

  async function getGameName(gameName: string) {
    await fetch(`/api/covers/${gameId}`, {
      method: 'POST',
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  async function getGameCover(gameId: number) {
    await fetch(`/api/covers/${gameId}`, {
      method: 'POST',
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  async function getGameCoverAll() {
    await fetch(`/api/covers/`, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  return (
    <div className="flex border border-neutral-700 p-4">
      <fieldset className="flex flex-1">
        <form className="flex flex-1 flex-col gap-10 justify-between">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="tournament_name" className="text-lg">
                Tournament Name :
              </label>
              <input
                id="tournament_name"
                type="text"
                required
                placeholder="Choose a tournament name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="tournament_game" className="text-lg">
                Game : 
              </label>
              <input
                id="tournament_game"
                type="search"
                required
                placeholder="Choose a game"
                onChange={getGameNames}
              />
              <div>
                {gameName.map((game, index) => (
                  <ul key={index}>
                    <li>{game.name}</li>
                  </ul>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="tournament_description" className="text-lg">
                Description :
              </label>
              <input
                id="tournament_description"
                type="textarea"
                required
                placeholder="Choose a tournament description"
                
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="tournament_rounds" className="text-lg">
                Number of Rounds :
              </label>
              <input
                id="tournament_rounds"
                type="number"
                required
                placeholder="4"
                onChange={e => getGameCover(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="tournament_player_limit" className="text-lg">
                Players Limit :
              </label>
              <input
                id="tournament_player_limit"
                type="number"
                required
                placeholder="10"
              />
            </div>
          </div>
          <Button url={"/"} name={"Create"} fill={true} />
        </form>
      </fieldset>

      <div className="flex flex-1"></div>
    </div>
  );
}
