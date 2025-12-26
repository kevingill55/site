"use client";
import Image from "next/image";
import Navbar from "../Navbar";

export default function About() {
  return (
    <main>
      <Navbar />
      <div className="w-full md:px-24 md:py-12 px-6">
        <div className="flex md:flex-row flex-col md:gap-20 gap-6">
          <Image src="/Kevin3.jpeg" alt="ah" width={700} height={1000} />
          <div className="flex font-newHeading font-[500] tracking-wide flex-col md:text-lg text-[#614A27] gap-6 md:w-2/5 w-full">
            <p>
              I live in Denver, Colorado and have worked in tech since 2019;
              graduating with a Computer Science and Computational Mathematics
              degree from the University of Massachusetts - Amherst in 2020.
            </p>
            <p>
              I’m a Design Engineer with a strong background in software systems
              engineering. Most of my work involves building and maintaining
              design systems for large companies, focusing on the technical
              architecture that bridges the gap between businesses, engineering,
              and design.
            </p>

            <p>
              {`If I'm not reading books or finding and designing fun websites, you can find me enjoying the Colorado outdoors — riding
              bikes, running trails, camping and whatever.`}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
