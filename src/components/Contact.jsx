


export const Contact = () => {
const handleSubmit =(formData) =>{
    const handleinputData = Object.fromEntries(formData.entries())
    console.log(handleinputData)
}

  return (
    <main className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 md:p-10">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-6">Contact Us</h1>

        <form action={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white font-semibold mb-1">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
              name="username"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white font-semibold mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
              name="email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white font-semibold mb-1">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
              name="message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold py-2 px-4 rounded-2xl hover:cursor-pointer transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};


