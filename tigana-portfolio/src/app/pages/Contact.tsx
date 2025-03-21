export default function Contact() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-amber-50 p-6">
        <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Contact
          </h2>
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 font-semibold">Full Name</label>
              <input
                type="text"
                className="w-full p-3 text-lg border border-gray-400 rounded-md focus:ring-2"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                className="w-full p-3 text-lg border border-gray-400 rounded-md focus:ring-2"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Phone</label>
              <input
                type="tel"
                className="w-full p-3 text-lg border border-gray-400 rounded-md focus:ring-2"
                placeholder=" +25470004335 "
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea
                className="w-full p-3 text-lg border border-gray-400 rounded-md focus:ring-2"
                rows={4}
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button className="w-full bg-amber-500 text-white font-semibold py-3 rounded-md hover:bg-neutral-500 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  