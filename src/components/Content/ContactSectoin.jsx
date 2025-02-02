export default function ContactSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-20 py-16">
      {/* Left Side - Contact Info */}
      <div className="bg-pink p-8 rounded-lg w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
          tempor, congue justo at, lobortis orci.
        </p>
        <div className="space-y-4">
          <p className="flex items-center gap-2">
            📍{" "}
            <a href="#" className="text-blue-500 hover:underline">
              123 Fifth Avenue, New York, NY 10160
            </a>
          </p>
          <p className="flex items-center gap-2">
            📧{" "}
            <a
              href="mailto:contact@info.com"
              className="text-blue-500 hover:underline"
            >
              contact@info.com
            </a>
          </p>
          <p className="flex items-center gap-2">📞 9-334-7565-9787</p>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="bg-white shadow-md p-8 rounded-lg w-full md:w-1/2">
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="border p-3 w-full rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-3 w-full rounded"
            />
          </div>
          <input
            type="email"
            placeholder="Your email address..."
            className="border p-3 w-full rounded mb-4"
          />
          <textarea
            placeholder="Message..."
            rows="4"
            className="border p-3 w-full rounded mb-4"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
