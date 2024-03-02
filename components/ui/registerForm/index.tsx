"use client";

import DefaultSubmitButton from "@/components/ui/buttons/submit";
import RedirectLink from "@/components/ui/links/redirect";

export default function RegisterForm() {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: event.target.login.value,
        password: event.target.password.value,
      }),
    });
    console.log(res);
  }

  return (
    <form
      className="flex flex-1 flex-col gap-10 justify-between"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="login" className="text-lg">
            Login
          </label>
          <input id="login" name="login" type="text" required />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input id="password" name="password" type="password" required />
        </div>

        <div className="flex gap-4">
          <DefaultSubmitButton name="Register" />
          <RedirectLink name="Login" url="/" />
        </div>
      </div>
    </form>
  );
}
