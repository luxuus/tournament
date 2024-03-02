"use client"

import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import CreateTournamentForm from "@/components/ui/form";

export default function CreateTournamentPage() {
  return (
    <>
      <Header />
      <main className="flex justify-center flex-col gap-8 p-7 max-w-6xl ">
        <h1 className="text-5xl flex">Create a tournament</h1>
        <CreateTournamentForm />
      </main>
      <Footer />
    </>
  );
}
