const HeroSection = () => {
  return (
    <section className="w-full bg-[#f8fafc] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <div>
          <span className="inline-block mb-4 bg-black text-white px-4 py-1 rounded-full text-sm tracking-wide">
            Trusted Industrial Supplier
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Divya <br />
            <span className="text-gray-700 text-4xl md:text-5xl">
              Industrial & Safety Supplies
            </span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-xl leading-relaxed">
            Wholesale supplier of lint-free wipes, safety equipment,
            housekeeping materials, and industrial consumables — proudly serving
            the <strong>Baddi Industrial Area</strong>.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
              View Products
            </button>

            <button className="border border-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
              Request Bulk Quote
            </button>
          </div>

          {/* ================= STATS ================= */}
          <div className="flex flex-wrap gap-10 mt-12">
            <div>
              <h3 className="text-3xl font-bold">10+ Years</h3>
              <p className="text-gray-500 text-sm">Industry Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-gray-500 text-sm">Industrial Clients</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">1000+</h3>
              <p className="text-gray-500 text-sm">Products Supplied</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative flex justify-center">
          <img
            src="https://image2url.com/r2/default/images/1769256605671-9eaa694f-2509-4b2b-b7c8-a6c2ad0287c3.png"
            alt="Industrial supplies"
            className="w-[460px] rounded-xl shadow-lg object-cover"
          />

          {/* Decorative industrial accent */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-black/10 rounded-full"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-black/10 rounded-full"></div>
        </div>
      </div>

      {/* ================= INDUSTRY BAR ================= */}
      <div className="bg-black text-white mt-20 py-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 items-center text-sm md:text-base font-semibold tracking-wide px-6">
          <span>PHARMA UNITS</span>
          <span>MANUFACTURING</span>
          <span>CLEANROOMS</span>
          <span>INDUSTRIAL HOUSEKEEPING</span>
          <span>SAFETY & COMPLIANCE</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
