const HeroSection = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>

          <p className="text-gray-600 mt-5 max-w-md">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <button className="mt-6 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
            Shop Now
          </button>

          {/* STATS */}
          <div className="flex gap-10 mt-10">
            <div>
              <h3 className="text-2xl font-bold">200+</h3>
              <p className="text-gray-500 text-sm">International Brands</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">2,000+</h3>
              <p className="text-gray-500 text-sm">High-Quality Products</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">30,000+</h3>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <img
            src="https://image2url.com/r2/default/images/1769256605671-9eaa694f-2509-4b2b-b7c8-a6c2ad0287c3.png"
            alt="fashion model"
            className="w-[420px] object-cover"
          />

          {/* Decorative stars */}
          <div className="absolute top-10 right-10 text-3xl">✦</div>
          <div className="absolute bottom-10 left-10 text-3xl">✦</div>
        </div>
      </div>

      {/* BRAND BAR */}
      <div className="bg-black text-white mt-16 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-xl font-semibold tracking-wider px-6">
          <span>VERSACE</span>
          <span>ZARA</span>
          <span>GUCCI</span>
          <span>PRADA</span>
          <span>Calvin Klein</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
