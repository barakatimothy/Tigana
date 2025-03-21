import Image from "next/image";
import Link from "next/link";
import profile from "./assets/profile.png";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold">Tigana</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="#home">
              <a className="hover:text-blue-500 transition">Home</a>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <a className="hover:text-blue-500 transition">About</a>
            </Link>
          </li>
          <li>
            <Link href="#services">
              <a className="hover:text-blue-500 transition">Services</a>
            </Link>
          </li>
        </ul>
        <Link href="#contact">
          <a className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Contact</a>
        </Link>
      </nav>

      {/* Hero Section */}
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-6xl mx-auto"
      >
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold">Howdy! I&apos;m Tigana</h1>
          <p className="mt-4 text-lg text-gray-700">
            I&apos;m a software engineer with 6 years of experience, currently working at Standard Bank as a System Analyst.
          </p>
          <a
            href="/resume.pdf"
            download
            className="mt-6 inline-block bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            aria-label="Download Resume PDF"
          >
            View Resume
          </a>
        </div>
        <div className="mt-8 md:mt-0">
          <Image
            src={profile}
            alt="Tigana"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>
      </main>

      {/* Sections */}
      <section id="about" className="py-16 bg-white">
        <About />
      </section>
      <section id="services" className="py-16">
        <Services />
      </section>
      <section id="contact" className="py-16 bg-white">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600">
        © {new Date().getFullYear()} Tigana. All rights reserved.
      </footer>
    </div>
  );
}

