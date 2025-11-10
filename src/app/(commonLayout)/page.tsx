import { Hero } from "@/components/modules/home/Hero";
import Specialities from "@/components/modules/home/Specialist";
import Steps from "@/components/modules/home/Steps";
import Testimonials from "@/components/modules/home/Testomonials";
import TopRatedDoctors from "@/components/modules/home/TopRatedDoctor";
import { Button } from "@/components/ui/button";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <Head>
        <title>AI-Powered Healthcare - Find Your Perfect Doctor</title>
        <meta
          name="description"
          content="Discover top-rated doctors tailored to your needs with our AI-powered healthcare platform. Get personalized recommendations and book appointments effortlessly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Specialities />
        <TopRatedDoctors />
        <Steps />
        <Testimonials />
      </main>
    </div>
  );
}
