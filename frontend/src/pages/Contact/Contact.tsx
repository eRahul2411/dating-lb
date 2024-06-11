import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen p-6 bg-soft-beige flex items-center justify-center w-full">
      <div className="container max-w-screen-lg mx-auto w-full">
        <div className="bg-white rounded shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
          
          <div className="grid gap-6 gap-y-4 text-sm grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-4">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <strong>Email:</strong> support@datingwebpage.com
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <strong>Phone:</strong> +1 234 567 890
              </p>
              <p className="text-lg text-gray-600 mb-4">
                <strong>Address:</strong> 123 Love Lane, Romance City, HC 12345
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Send Us a Message</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-600 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-600 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="h-24 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
