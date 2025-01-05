"use client"
import HomePage from "@/components/pages/home/HomePage";
import { AuthFetchHomeHero } from "@/services/FetchAllContent";
import Loadding from '@/components/common/kayanBread/Loadding'
export default function Home() {
  const {homeHero , loading} = AuthFetchHomeHero()

  return (
    <>
    {/* home page */}
      <HomePage homeHero={homeHero}/>
     
    </>
  );
}
