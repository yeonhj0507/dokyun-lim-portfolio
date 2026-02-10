export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3">
          Contact
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Get in Touch
        </h2>
        <p className="text-white/60 mb-12 max-w-md mx-auto">
          작품 의뢰, 협업, 또는 아쿠아스케이핑에 대한 문의가 있으시면 편하게
          연락해 주세요.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/aquascaper_pio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-black font-semibold px-8 py-4 rounded-full transition-colors text-sm"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Instagram
          </a>
          <a
            href="mailto:i56061529@gmail.com"
            className="inline-flex items-center gap-2 bg-transparent border border-white/20 hover:border-accent text-white font-semibold px-8 py-4 rounded-full transition-colors text-sm"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13L2 4" />
            </svg>
            이메일 보내기
          </a>
        </div>
      </div>
    </section>
  );
}
