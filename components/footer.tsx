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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-12">
          {/* Brand — logo 1: vertical stacked */}
          <div>
            <div className="mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-HRKSC29pjx4k0AbEDLs0MApemfrMuO.png"
                alt="Elementus Marcas e Patentes"
                className="h-20 w-auto object-contain"
              />
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
            <ul className="flex flex-col gap-3">
              <li className="text-[#8A9BB0] text-sm leading-relaxed">
                Rua Jupira Cunha Marcondes, 1980<br />
                Vila Tótoli, Franca/SP<br />
                CEP 14409-192
              </li>
              <li>
                <a href="tel:+5516991435330" className="text-[#8A9BB0] text-sm hover:text-white transition-colors">
                  +55 (16) 9 9143-5330
                </a>
              </li>
              <li className="text-[#8A9BB0] text-sm">
                Segunda a sexta, 08h às 18h
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://wa.me/5516991435330"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-[#8A9BB0] hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors duration-200"
              >
                <WhatsAppIcon className="w-4 h-4" />
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
            &copy; {new Date().getFullYear()} Elementus Marcas e Patentes. Todos os direitos reservados.
          </p>
          <p className="text-[#8A9BB0] text-xs">
            OAB/SP 297.087
          </p>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
