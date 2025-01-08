import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  // State to handle collapsible sections for mobile view
  const [openSection, setOpenSection] = useState("");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <footer className="bg-gradient-to-b from-[#ddf7f7] via-[#a4bdbd] to-[#c8eeee] text-black py-8 min-h-screen flex flex-col justify-center items-center md:min-h-0 md:py-16">
      <div className="max-w-7xl w-full px-4">
        {/* Newsletter Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-4 cursor-default">Subscribe to our Newsletter</h3>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Email Address"
              spellCheck="false"
              className="px-4 py-2 rounded-l-md w-2/3 max-w-xs text-black focus: outline-none focus: ring-0"
            />
            <button className="px-4 py-2 bg-gray-100 rounded-r-md hover:bg-gray-300">
              Submit
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Categories Section */}
          <div>
            <h4
              className="text-lg font-semibold cursor-pointer md:cursor-default flex justify-between items-center"
              onClick={() => toggleSection("categories")}
            >
              Categories
              <span className="ml-2 md:hidden">
                {openSection === "categories" ? "-" : "+"}
              </span>
            </h4>
            <ul
              className={`mt-3 space-y-2 text-sm ${
                openSection === "categories" || "md:block" ? "block" : "hidden"
              }`}
            >
              <li><Link to="#">Casual</Link></li>
              <li><Link to="#">Formals</Link></li>
              <li><Link to="#">Ethnic</Link></li>
              <li><Link to="#">Athleisure</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4
              className="text-lg font-semibold cursor-pointer md:cursor-default flex justify-between items-center"
              onClick={() => toggleSection("support")}
            >
              Support
              <span className="ml-2 md:hidden">
                {openSection === "support" ? "-" : "+"}
              </span>
            </h4>
            <ul
              className={`mt-3 space-y-2 text-sm ${
                openSection === "support" || "md:block" ? "block" : "hidden"
              }`}
            >
              <li><Link to="#">Track Order</Link></li>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">My Account</Link></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4
              className="text-lg font-semibold cursor-pointer md:cursor-default flex justify-between items-center"
              onClick={() => toggleSection("quick-links")}
            >
              Quick Links
              <span className="ml-2 md:hidden">
                {openSection === "quick-links" ? "-" : "+"}
              </span>
            </h4>
            <ul
              className={`mt-3 space-y-2 text-sm ${
                openSection === "quick-links" || "md:block" ? "block" : "hidden"
              }`}
            >
              <li><Link to="#">Shop</Link></li>
              <li><Link to="#">About Us</Link></li>
            </ul>
          </div>

           {/* Policies Section */}
           <div>
            <h4
              className="text-lg font-semibold cursor-pointer md:cursor-default flex justify-between items-center"
              onClick={() => toggleSection("support")}
            >
              Our Policies
              <span className="ml-2 md:hidden">
                {openSection === "support" ? "-" : "+"}
              </span>
            </h4>
            <ul
              className={`mt-3 space-y-2 text-sm ${
                openSection === "support" || "md:block" ? "block" : "hidden"
              }`}
            >
              <li><Link to="#">FAQs</Link></li>
              <li><Link to="#">Return Policy</Link></li>
              <li><Link to="#">Terms of Use</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
            </ul>
          </div>


          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold cursor-default">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="">
                  careoutfitorbit@gmail.com
                </Link>
              </li>
              <li className="cursor-default">Call us at: 1400-180-011-300 (India)</li>
              <li className="cursor-default">10 am - 7 pm, Monday - Saturday</li>
              <li className="cursor-default">
                For Bulk/Institutional Orders: <br />
                +91 7208782597
              </li>
            </ul>
          </div>
        </div>

      {/* social section  */}
        <div className="mt-8 text-center text-sm">
          <div className="mt-8 text-center">
          <h4 className="text-lg font-semibold mb-4 cursor-default">Keep in Touch</h4>
            <div className="flex justify-center space-x-6">
              {/* Facebook */}
                <Link
                  to="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M22.675 0h-21.35C.589 0 0 .589 0 1.316v21.369C0 23.411.589 24 1.316 24h11.539v-9.293H9.691V11.08h3.164V8.413c0-3.146 1.926-4.863 4.742-4.863 1.348 0 2.507.1 2.847.145v3.292l-1.955.001c-1.532 0-1.827.729-1.827 1.796v2.355h3.647l-.475 3.627h-3.172V24h6.216c.727 0 1.316-.589 1.316-1.316V1.316C24 .589 23.411 0 22.675 0z" />
                  </svg>
                </Link>

    {/* Instagram */}
    <Link
      to="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-600 hover:text-pink-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.343 3.608 1.317.975.975 1.255 2.243 1.317 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.343 2.633-1.317 3.608-.975.975-2.243 1.255-3.608 1.317-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.343-3.608-1.317-.975-.975-1.255-2.243-1.317-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.343-2.633 1.317-3.608.975-.975 2.243-1.255 3.608-1.317 1.265-.058 1.645-.07 4.849-.07m0-2.163C8.735 0 8.332.015 7.052.072 5.771.13 4.601.45 3.576 1.475 2.55 2.501 2.23 3.671 2.172 4.952c-.058 1.28-.072 1.683-.072 4.048s.015 2.769.072 4.048c.058 1.28.38 2.451 1.404 3.476 1.025 1.025 2.195 1.346 3.476 1.404 1.28.058 1.683.072 4.048.072s2.769-.015 4.048-.072c1.28-.058 2.451-.38 3.476-1.404 1.025-1.025 1.346-2.195 1.404-3.476.058-1.28.072-1.683.072-4.048s-.015-2.769-.072-4.048c-.058-1.28-.38-2.451-1.404-3.476C19.45.45 18.28.13 17 .072 15.72.015 15.317 0 12 0z" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M18.406 4.594a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
      </svg>
    </Link>

    {/* X (Twitter) */}
    <Link
      to="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5"
      >
        <path d="M23.954 4.569c-.885.394-1.83.661-2.825.781 1.014-.609 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.594-1.559-2.717 0-4.924 2.203-4.924 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.159-10.148-5.132-.426.729-.666 1.575-.666 2.475 0 1.71.87 3.213 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.831-.413.111-.849.171-1.296.171-.316 0-.622-.03-.923-.086.623 1.956 2.432 3.381 4.576 3.421-1.675 1.308-3.778 2.091-6.07 2.091-.394 0-.779-.023-1.16-.067 2.179 1.397 4.768 2.213 7.548 2.213 9.142 0 14.307-7.721 14.307-14.424 0-.22-.005-.439-.016-.657.984-.713 1.84-1.601 2.515-2.611z" />
      </svg>
    </Link>
  </div>
</div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 my-6"></div>

        {/* Footer Bottom Section */}
        <div className="text-center text-sm">
          <p className="cursor-default">&copy; {new Date().getFullYear()} Outfit Orbit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;