export default function Hero({ onExploreClick }) {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <div className="absolute w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-sans">
          An Interactive Folio
        </span>
        <h2
          style={{ fontFamily: 'var(--font-serif-display)' }}
          className="text-4xl sm:text-6xl md:text-7xl font-extralight text-[#fdfbf7] mt-4 mb-6 leading-tight tracking-wider"
        >
          The Music of Ireland’s Harper
        </h2>
        <p className="text-lg sm:text-xl text-[#cfc2af] font-light max-w-xl mx-auto leading-relaxed mb-10">
          Journey through the life, surviving airs, and timeless legacy of Ireland's legendary wandering bard.
        </p>

        <button
          onClick={onExploreClick}
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-[#d4af37]/50 text-[#f5ecd8] text-xs uppercase tracking-[0.25em] hover:bg-[#d4af37] hover:text-[#0b0a08] transition-all duration-300 cursor-pointer"
        >
          <span>Explore The Shelf</span>
          <span>↓</span>
        </button>
      </div>
    </section>
  )
}