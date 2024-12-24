import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Outfit Orbit</h3>
          <p className="text-sm">
            Outfit Orbit is your one-stop destination for the latest trends in apparel. From casual wear to formal attire, we've got you covered with the best styles at affordable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/faq" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">
            Email: <a href="mailto:support@outfitorbit.com" className="hover:underline">support@outfitorbit.com</a>
          </p>
          <p className="text-sm">Phone: +1 123-456-7890</p>
          <p className="text-sm">Address: 123 Orbit Lane, Fashion City</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-blue-700 my-6"></div>

      {/* Bottom Section */}
      <div className="text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Outfit Orbit. All rights reserved.</p>
        <p>
          Designed with ❤️ by the Outfit Orbit Team.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer