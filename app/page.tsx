import Button from "@/components/ui/buttons";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import hero from "@/public/images/hero.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex justify-center flex-col gap-8 p-7 max-w-6xl ">
        <h1 className="text-5xl flex ">Last One Standing</h1>

        <div className="flex border border-neutral-700">
          <div className="flex flex-col gap-9 flex-1 p-4 justify-between">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-1">
                <h3 className="flex gap-2 text-lg">
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
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                  Description
                </h3>
                <p className="text-neutral-200">
                  Whether you&apos;re a seasoned pro or an aspiring gamer, Last
                  One Tourney is your arena. Sharpen your skills, stay
                  consistent, and maybe, just maybe, you&apos;ll be the last one
                  standing.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Rules</h3>
                <p className="text-neutral-200">
                  Start with up to 50 players. You set the number of rounds and
                  decide how many players get eliminated each round based on a
                  criteria like the lowest time, score, kills etc.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Winner</h3>
                <p className="text-neutral-200">
                  The last gamer standing after all rounds is crowned the
                  champion. It&apos;s all about consistent performance and
                  outlasting the competition.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button name={"Create"} fill={true} />
              <Button name={"Join Tournaments"} fill={false} />
            </div>
          </div>
          <div className="flex-1 relative">
            <Image
              src={hero}
              alt=""
              className="select-none h-full object-cover"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
