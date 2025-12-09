// import Image from "next/image";

import HeroSection from "@/components/HeroSection/HeroSection";
// import { useState } from "react";
import Link from "next/link";

// import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
    


  return (
   <div>
    {/* Welcome to TypeIntel */}


    <HeroSection />
    <Link href="/Typing">Go to Typing Test Page</Link>


   </div>
  ) }