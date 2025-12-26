"use client";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Welcome() {
  return (
    <main className="h-full min-w-full">
      <Navbar />
      <div className="font-newHeading text-[#614A27] md:px-28 px-6">
        <div className="relative flex justify-end">
          {/* <h1 className="absolute z-30 top-[-100] right-[300] font-semibold text-3xl mb-10">
            pictures of trees and mountains
          </h1> */}
          <Image alt="tree 1" height={1000} width={500} src="/Leaf1.jpg" />
        </div>
      </div>
    </main>
  );
}
