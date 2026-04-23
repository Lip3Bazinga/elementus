export function Footer() {
  return (
    <footer
      className="py-16"
      style={{
        background: "#0A1628",
        borderTop: "1px solid rgba(201,168,76,0.25)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ShieldIcon className="w-7 h-7 text-[#C9A84C]" />
              <span className="font-serif text-lg font-bold text-white tracking-wide">ELEMENTUS</span>
            </div>
            <p className="text-[#8A9BB0] text-sm leading-relaxed">
              Protegendo marcas, construindo legados.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              Serviços
            </h4>
            <ul className="flex flex-col gap-2">
              {["Registro de Marcas", "Patentes", "Desenho Industrial", "Programas de Computador"].map((item) => (
                <li key={item}>
                  <a
                    href="#servicos"
                    className="text-[#8A9BB0] text-sm hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              Contato
            </h4>
            <ul className="flex flex-col gap-2">
              <li className="text-[#8A9BB0] text-sm">contato@elementus.com.br</li>
              <li className="text-[#8A9BB0] text-sm">+55 (11) 0000-0000</li>
              <li className="text-[#8A9BB0] text-sm">São Paulo, SP — Brasil</li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-[#8A9BB0] hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-colors duration-200"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-[#8A9BB0] hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-colors duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}
        >
          <p className="text-[#8A9BB0] text-xs">
            &copy; 2024 Elementus Marcas e Patentes. Todos os direitos reservados.
          </p>
          <p className="text-[#8A9BB0] text-xs">
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  )
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}
