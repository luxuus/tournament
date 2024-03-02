
import Header from "@/components/ui/header";
import RegisterForm from "@/components/ui/registerForm";

export default async function RegisterPage() {
  return (
    <>
      <Header />
      <main className="flex justify-center flex-col gap-8 p-7 max-w-6xl ">
        <h1 className="text-5xl flex">Register</h1>
        <div className="flex border border-neutral-700 p-4">
          <fieldset className="flex flex-1">
            <RegisterForm />
          </fieldset>
        </div>
      </main>
    </>
  );
}
