export default function Header({ onScrollToShelf }) {
  return (
    <header className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-8 sm:px-14 py-7 bg-[#0b0a08]/75 backdrop-blur-md border-b border-[#d4af37]/15">
      <div>
        <h1
          style={{ fontFamily: 'var(--font-serif-display)' }}
          className="text-2xl sm:text-3xl font-extralight tracking-[0.28em] text-[#f7f2e8] uppercase"
        >
          turlough o carolan
        </h1>
        <p className="text-[10px] sm:text-xs tracking-[0.35em] text-[#c2b299]/70 uppercase font-light mt-1">
          Last of the Irish Bards • 1670–1738
        </p>
      </div>

      <button
        onClick={onScrollToShelf}
        className="text-xs uppercase tracking-[0.25em] text-[#d4af37] hover:text-[#fff] transition-colors duration-200 cursor-pointer hidden sm:block"
      >
        View Library ↓
      </button>
    </header>
  )
}