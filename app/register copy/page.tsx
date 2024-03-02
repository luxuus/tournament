import DefaultSubmitButton from "@/components/ui/buttons/submit";
import Header from "@/components/ui/header";
import RedirectLink from "@/components/ui/links/redirect";

export default function RegisterPage() {
  return (
    <>
      <Header />
      <main className="flex justify-center flex-col gap-8 p-7 max-w-6xl ">
        <h1 className="text-5xl flex">Register</h1>
        <div className="flex border border-neutral-700 p-4">
          <fieldset className="flex flex-1">
            <form className="flex flex-1 flex-col gap-10 justify-between">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="tournament_name" className="text-lg">
                    Login
                  </label>
                  <input id="login" type="text" required />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="tournament_game" className="text-lg">
                    Password
                  </label>
                  <input id="password" type="password" required />
                </div>
                <DefaultSubmitButton name="Register" />
                <RedirectLink name="Login" url="/login"/>
              </div>
            </form>
          </fieldset>
        </div>
      </main>
    </>
  );
}
