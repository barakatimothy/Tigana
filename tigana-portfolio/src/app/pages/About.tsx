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
        <title>About Me</title>
        <meta name="description" content="Learn more about my skills and experience." />
      </Head>

      <main className="min-h-screen bg-amber-50 text-gray-900 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-3xl text-left">
          {/* About Me Section */}
          <h1 className="text-4xl font-bold text-black mb-4">About Me</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I&apos;m <span className="font-semibold text-gray-900">Tigana</span>, a passionate software engineer with expertise in building scalable
            software applications. I thrive on solving complex problems and challenges. When I&apos;m not coding, I enjoy bike riding and building engines.
          </p>

          {/* Skills Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-black">Skills & Expertise</h2>
            <ul className="mt-3 space-y-4 text-gray-700">
              {[
                { src: laravel, alt: "Laravel Framework", skill: "Laravel" },
                { src: angular, alt: "Angular Framework", skill: "Angular" },
                { src: flutter, alt: "Flutter Mobile Development", skill: "Flutter" },
                { src: uiux, alt: "User Interface & Experience Design", skill: "UI/UX Design" },
              ].map(({ src, alt, skill }, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Image src={src} alt={alt} width={30} height={30} className="inline-block" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Button */}
          <div className="mt-8">
            <a
              href="https://linktr.ee/softwareeng"
              className="bg-amber-500 text-white px-6 py-3 rounded-lg text-lg font-medium transition 
              hover:bg-amber-600 hover:shadow-md"
              aria-label="Get in Touch with Tigana"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
