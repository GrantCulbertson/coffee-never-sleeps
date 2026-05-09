export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-white/5 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>
          © 2026 Coffee Never Sleeps LLC ·{' '}
          <a
            href="mailto:tom@coffeeneversleepsllc.com"
            className="hover:text-gold transition-colors"
          >
            tom@coffeeneversleepsllc.com
          </a>
        </p>
        <p>
          Website created by{' '}
          <a
            href="https://www.linkedin.com/in/grantculbertson/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            Grant Culbertson
          </a>
        </p>
      </div>
    </footer>
  )
}
