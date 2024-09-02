<footer className="py-8 text-white bg-black">
  <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-4">
    {/* SHOP Section */}
    <div>
      <h3 className="mb-4 font-bold tracking-widest">SHOP</h3>
      <ul>
        <li>
          <a href="/" className="hover:underline">
            Bikes
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline">
            Accessories
          </a>
        </li>
      </ul>
    </div>

    {/* CONNECT Section */}
    <div>
      <h3 className="mb-4 font-bold tracking-widest">CONNECT</h3>
      <ul>
        <li>
          <a href="tel:555-555-5555" className="hover:underline">
            (555) 255-5011
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline">
            Returns
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline">
            Warranty
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline">
            FAQ
          </a>
        </li>
        <li>
          <a href="mailto:support@purecycles.com" className="hover:underline">
            support@purecycles.com
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline">
            Become a Dealer
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline">
            Register your Bike
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline">
            E-Bike Battery Recycling
          </a>
        </li>
      </ul>
    </div>

    {/* ABOUT Section */}
    <div>
      <h3 className="mb-4 font-bold tracking-widest">ABOUT</h3>
      <ul>
        <li>
          <a href="/" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline">
            Find a Dealer
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline">
            Press
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline">
            Promotional Videos
          </a>
        </li>
      </ul>
    </div>

    {/* DON'T MISS OUT Section */}
    <div>
      <h3 className="mb-4 font-bold tracking-widest">DON'T MISS OUT</h3>
      <p className="mb-4">
        These days our bikes sell out fast! Sign up so you don't miss it.
      </p>
      <form className="mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 mb-4 bg-black border-b border-white focus:outline-none"
        />
        <button type="submit" className="w-full px-4 py-2 text-black bg-white">
          Sign Up
        </button>
      </form>
      <div className="flex mt-4 space-x-4">
        <a href="/" className="hover:text-gray-400">
          <FaInstagram size={20} />
        </a>
        <a href="/" className="hover:text-gray-400">
          <FaFacebookF size={20} />
        </a>
        <a href="/" className="hover:text-gray-400">
          <FaYoutube size={20} />
        </a>
        <a href="/" className="hover:text-gray-400">
          <FaTwitter size={20} />
        </a>
        <a href="/" className="hover:text-gray-400">
          <FaStrava size={20} />
        </a>
      </div>
    </div>
  </div>
</footer>;
