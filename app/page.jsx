"use client"
import HomePage from "@/components/pages/home/HomePage";
import { AuthFetchHomeHero } from "@/services/FetchAllContent";
import Loadding from '@/components/common/kayanBread/Loadding'
export default function Home() {
 

  return (
    <>
    {/* home page */}
      <HomePage />
     
    </>
  );
}
