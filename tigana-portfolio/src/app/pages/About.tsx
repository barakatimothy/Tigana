import Head from "next/head";
import Image from "next/image";
import laravel from "../assets/laravel.svg";
import angular from "../assets/angular.svg";
import flutter from "../assets/flutter.svg";
import uiux from "../assets/uiux.svg";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Learn more about my skills and experience." />
      </Head>

      <main className="min-h-screen bg-amber-50 text-white flex flex-col items-center justify-center px-6">
        <div className="max-w-3xl text-left">
          <h1 className="text-4xl font-bold text-black mb-4">About</h1>
          <p className="text-lg text-neutral-500">
            Hi, I'm <span className="font-semibold text-neutral-500">Tigana</span>, a passionate software engineer with expertise in building scalable
            software applications. I thrive on solving complex problems and challenges. When I'm not coding, I enjoy bike riding and building engines.
          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-black">Skills & Expertise</h2>
            <ul className="mt-3 space-y-4 text-neutral-500">
              <li className="flex items-center gap-3">
                <Image src={laravel} alt="Laravel" width={30} height={30} /> Laravel
              </li>
              <li className="flex items-center gap-3">
                <Image src={angular} alt="Angular" width={30} height={30} /> Angular
              </li>
              <li className="flex items-center gap-3">
                <Image src={flutter} alt="Flutter" width={30} height={30} /> Flutter
              </li>
              <li className="flex items-center gap-3">
                <Image src={uiux} alt="UI/UX Design" width={30} height={30} /> UI/UX Design
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <a href="https://linktr.ee/softwareeng" className="bg-amber-500 hover:bg-neutral-500 px-6 py-3 rounded-lg text-lg font-medium transition">
              Get in Touch
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
