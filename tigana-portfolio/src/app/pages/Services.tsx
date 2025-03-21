import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">My Services</h1>
        <p className="text-lg text-gray-700 mb-12">
          Unlock the full potential of technology with my tailored software solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Cards */}
          {[
            { title: "Web Development", desc: "Building scalable and responsive web applications." },
            { title: "Mobile App Development", desc: "Creating seamless experiences on iOS and Android platforms." },
            { title: "System Analysis", desc: "Providing in-depth analysis to optimize business processes." },
          ].map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 transition hover:shadow-xl hover:-translate-y-2">
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Rate Card Button */}
        <div className="mt-12">
          <a 
            href="/rate-card.pdf" 
            download 
            className="bg-amber-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-amber-600 transition"
            aria-label="Download Rate Card PDF"
          >
            Download Rate Card
          </a>
        </div>
      </div>
    </div>
  );
}
