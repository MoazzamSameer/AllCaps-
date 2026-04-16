/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShoppingBag, User, ArrowUp, Verified, ArrowRight } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-surface border-b border-on-surface">
    <div className="flex justify-between items-end px-6 md:px-12 py-8 max-w-[1440px] mx-auto">
      <div className="text-2xl font-black tracking-[-1px] text-on-surface font-headline uppercase">
        AllCaps*
      </div>
      <div className="hidden md:flex gap-10">
        {["Heritage", "The Drop", "Artisans", "Archive"].map((item) => (
          <a
            key={item}
            href="#"
            className="font-headline tracking-[1px] uppercase font-bold text-[13px] transition-all duration-300 hover:opacity-60 text-on-surface"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <button className="hover:scale-110 transition-transform duration-300 cursor-pointer">
          <ShoppingBag size={20} strokeWidth={2.5} />
        </button>
        <button className="hover:scale-110 transition-transform duration-300 cursor-pointer">
          <User size={20} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen w-full flex items-center pt-32 pb-20 overflow-hidden border-b border-on-surface">
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-[1440px] mx-auto px-6 md:px-12 gap-12">
      <div className="lg:border-r lg:border-on-surface lg:pr-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-7xl md:text-[112px] font-black font-headline leading-[0.85] tracking-[-4px] uppercase text-on-surface mb-8">
            Tradition <br /> Unleashed.
          </h1>
          <div className="flex gap-10 mt-12">
            <div className="flex-1">
              <span className="text-[10px] uppercase tracking-[2px] text-secondary mb-2 block font-bold">Edition</span>
              <span className="text-base font-medium leading-tight">Vol. 01 / Spring '24</span>
            </div>
            <div className="flex-1">
              <span className="text-[10px] uppercase tracking-[2px] text-secondary mb-2 block font-bold">Curation</span>
              <span className="text-base font-medium leading-tight">Movxy Kangr</span>
            </div>
          </div>
          <div className="mt-16">
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-md">
              Exploring the intersection of ancestral Kashmiri aari embroidery and modern street culture.
            </p>
          </div>
          <button className="mt-12 bg-on-surface text-surface px-10 py-4 font-headline font-black uppercase tracking-[1px] text-xs hover:opacity-90 transition-opacity cursor-pointer">
            Shop the Collection
          </button>
        </motion.div>
      </div>
      <div className="relative h-[400px] lg:h-auto">
        <img
          src="https://lh3.googleusercontent.com/aida/ADBb0ugEzqvGu3UesZbTh1F6nWQUkdOaFjrY2B52Bo325PvZGDOqilYyi2y3vZyvR0jnpAcAXaBy6QM1t1gULwpofj5BMfDJdNR9PkZlOPSbt2tEObOE7GeCpXRDFta5YbLRx5Ek8op1RWWxvwBA5466PTNrGnTzJIG3CX7aU-o8_p7zme2-0Nuv-aW4jMiIy-XFzyqI0W7MsgHekSGnW7lR0iB-pBfkF3kYIxc3P8i7CGBQ4NEuzLiqkARCh-yYNDoDSxTyfBeiDcMx"
          alt="High fashion cap"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const Marquee = () => (
  <div className="py-8 bg-surface border-b border-on-surface overflow-hidden whitespace-nowrap">
    <div className="flex animate-marquee gap-12">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex gap-12 items-center">
          <span className="text-5xl font-black font-headline uppercase tracking-tighter text-on-surface/10">ALL CAPS. ALL CULTURE.</span>
          <span className="text-5xl font-black font-headline uppercase tracking-tighter text-accent">KASHMIRI CRAFT.</span>
        </div>
      ))}
    </div>
  </div>
);

const ProductCard = ({ image, title, price, subtitle, badge, isFeatured }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`group flex flex-col justify-between ${isFeatured ? "bg-on-surface text-surface p-8 h-[300px]" : "border border-on-surface p-6 h-[240px]"}`}
  >
    {isFeatured ? (
      <>
        <span className="text-[10px] uppercase tracking-[2px] text-secondary block font-bold">Featured Drop</span>
        <div className="text-3xl md:text-4xl font-bold leading-[1.1] uppercase">{title}</div>
        <div className="flex justify-between items-end">
          <div className="text-xs font-black uppercase tracking-[1px]">View Entry &rarr;</div>
          <span className="text-xl font-bold">${price}</span>
        </div>
      </>
    ) : (
      <>
        <div className="flex justify-between items-start">
          <span className="text-[11px] font-black uppercase text-accent">{badge || "Collection"}</span>
          <span className="text-xs font-medium opacity-60">Available</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold uppercase leading-tight">{title}</h3>
        <div className="flex justify-between items-end">
          <div className="text-[11px] font-bold opacity-60 uppercase">{subtitle}</div>
          <span className="text-lg font-bold">${price}</span>
        </div>
      </>
    )}
  </motion.div>
);

const Collection = () => (
  <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div className="flex flex-col justify-between">
      <div className="mb-12">
        <h2 className="text-6xl md:text-8xl font-black font-headline uppercase tracking-[-4px] leading-none mb-8">
          The <br /> Collection
        </h2>
        <p className="text-lg font-light opacity-60 max-w-sm">
          A curated selection of hand-embroidered headwear, bridging the gap between heritage and street.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductCard
          title="Modular Chinar"
          price="180"
          subtitle="May 12—28"
          badge="Exhibition"
        />
        <ProductCard
          title="Grid Crewel"
          price="210"
          subtitle="Now Shipping"
          badge="Publication"
        />
      </div>
    </div>
    <div className="flex flex-col gap-6">
      <ProductCard
        title="Spatial Systems: The Kashmiri Aari"
        price="240"
        isFeatured
      />
      <div className="aspect-[4/5] overflow-hidden border border-on-surface">
        <img
          src="https://lh3.googleusercontent.com/aida/ADBb0uj70CHl4uyHGA0FP3c5USSeRiY5fZrVOr5piUwoztgYUvj4if0QK0qlT818-49HMqXBxDV0bmZWwSKPq8cEmnbbsoRs7lSbif1AxA0zS6_cZ9cmbwRZCC1TKHpjfD_95ZUndCvlpnK13j3VA02b-HBhQH1FWZY5LkRsvCfJ-RNzsFkMIqSs_oP-mKUPL_E_3pPurgGJxry0aPr-6EwfPOolJ4v9UTixZINre0WotufAeEXym1rlJsDvdt8p3ycI4ZB4DdnIL1U20A"
          alt="Product detail"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const Artisan = () => (
  <section className="py-32 bg-on-surface text-surface border-y border-on-surface">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
      <div className="lg:col-span-6">
        <h2 className="text-accent text-[10px] font-bold uppercase tracking-[4px] mb-8">Studio</h2>
        <h3 className="text-6xl md:text-8xl font-black font-headline uppercase tracking-[-4px] leading-[0.9] mb-12">
          Ancestral <br /> Hands.
        </h3>
        <p className="font-ornate text-3xl italic leading-relaxed text-surface/80 mb-10">
          "Every stitch is a signature, a thousand-year-old whisper translated into the language of the street."
        </p>
      </div>
      <div className="lg:col-span-6">
        <div className="aspect-video overflow-hidden border border-surface/20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2KZOcLL2Uf1O_BWbkBWkD_QIRFHs7sY-aPZZwhp-iDnUx-8nHGhYQTZZVOL-2JTpeaxfUpsBPdiT_0sRZJ4eH9D60Xtg37WrS-fIAtP3kpy0dtnk38pXeHuKLhL8-Cig_3_ZW5nbJGev8eZxJjyoJ6aLcExpZQ5jMqW9A8XADyMCLAFEGedUP762F1RemOObsacTAx6OC2fUG0yr4ItjEvu_dIVikAH3dLV_FQYbTZMzm8jvJxJKtjR8oaeiNorJr4hW2T4t7JMA"
            alt="Artisan at work"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-on-surface text-surface">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-4 text-[11px] uppercase tracking-[1px] font-bold">
        <div className="w-2 h-2 bg-[#00FF00] rounded-full shadow-[0_0_8px_#00FF00]"></div>
        System Live / Srinagar HQ
      </div>
      <div className="text-[11px] font-bold opacity-40 uppercase tracking-[1px]">
        &copy; 2024 AllCaps* Media Group
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-surface text-on-surface px-8 py-3 text-[11px] font-black uppercase tracking-[1px] hover:opacity-90 transition-opacity cursor-pointer"
      >
        Join the Circle
      </button>
    </div>
  </footer>
);

const FloatingBadge = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1.5 }}
    className="fixed bottom-10 right-10 z-40 hidden md:block"
  >
    <div className="bg-on-surface text-surface p-4 border border-surface/10 shadow-2xl rounded-sm max-w-[200px]">
      <div className="flex items-center gap-3 mb-2">
        <Verified className="text-accent" size={20} />
        <p className="font-headline font-black uppercase tracking-tighter text-[10px]">Aari Certified</p>
      </div>
      <p className="text-[10px] font-medium leading-tight opacity-60 uppercase tracking-tight">
        100% Hand-embroidered by local artisans.
      </p>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Collection />
        <Artisan />
      </main>
      <Footer />
      <FloatingBadge />
    </div>
  );
}
