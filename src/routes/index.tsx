import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-fogon.asset.json";
import heroBbq from "@/assets/hero-bbq.jpg";
import wingsImg from "@/assets/wings.jpg";
import ribsImg from "@/assets/ribs.jpg";
import sandwichImg from "@/assets/sandwich.jpg";
import {
  Flame, MapPin, Clock, Instagram, Facebook, Phone,
  Beef, Sandwich, Coffee, GlassWater, IceCream, Utensils
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fogón Vaquero — Smokehouse BBQ | Alitas, Costillas y Brisket al Humo" },
      { name: "description", content: "Smokehouse al estilo vaquero. Brisket, costillas BBQ y alitas ahumadas. Sábados y domingos de 11am a 8pm." },
      { property: "og:title", content: "Fogón Vaquero — Smokehouse BBQ" },
      { property: "og:description", content: "Brisket, costillas BBQ y alitas cocidas al humo. Sábados y domingos 11am - 8pm." },
      { property: "og:image", content: logoAsset.url },
    ],
  }),
  component: Home,
});

const MAPS_URL = "https://maps.app.goo.gl/s48Y9hpeXnoxDE4R9?g_st=aw";
const IG = "https://www.instagram.com/fogonvaquero/";
const TT = "https://www.tiktok.com/@fogonvaquero";
const FB = "https://www.facebook.com/profile.php?id=61586102775985";
const TIKTOK_VIDEO = "https://www.tiktok.com/@ellabuciostunt/video/7617669716861013266";
const TIKTOK_EMBED_ID = "7617669716861013266";

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.39a8.16 8.16 0 0 0 4.77 1.52V6.46a4.79 4.79 0 0 1-1.84.23z"/>
    </svg>
  );
}

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return <section id={id} className={`relative py-20 px-6 ${className}`}>{children}</section>;
}

function Home() {
  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Fogón Vaquero" className="h-12 w-12 rounded-md object-cover ring-1 ring-accent/40" />
            <span className="font-display text-2xl tracking-widest text-bone">FOGÓN <span className="text-ember">VAQUERO</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-heading uppercase tracking-wider">
            <a href="#menu" className="hover:text-ember transition-colors">Menú</a>
            <a href="#video" className="hover:text-ember transition-colors">Video</a>
            <a href="#visit" className="hover:text-ember transition-colors">Visítanos</a>
          </nav>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
             className="hidden sm:inline-flex items-center gap-2 bg-fire text-primary-foreground px-4 py-2 rounded-md font-heading uppercase text-sm tracking-wider shadow-fire hover:scale-105 transition-transform">
            <MapPin className="h-4 w-4" /> Cómo llegar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBbq} alt="" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-28 md:pt-32 md:pb-40 text-center">
          <img src={logoAsset.url} alt="Fogón Vaquero logo" className="mx-auto h-44 md:h-56 w-auto rounded-lg shadow-deep ring-1 ring-accent/30 animate-flicker" />
          <p className="mt-8 inline-flex items-center gap-2 text-accent font-heading uppercase tracking-[0.3em] text-xs md:text-sm">
            <Flame className="h-4 w-4" /> Smokehouse · Cocido al humo · Estilo vaquero <Flame className="h-4 w-4" />
          </p>
          <h1 className="mt-6 font-display text-6xl md:text-8xl lg:text-9xl leading-none">
            <span className="text-bone">EL SABOR DEL</span>{" "}
            <span className="text-gradient-fire">FUEGO LENTO</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Alitas, costillas BBQ y brisket ahumados con paciencia y leña.
            Cada bocado, una historia de humo, sal y brasa.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#menu" className="bg-fire text-primary-foreground px-7 py-3 rounded-md font-heading uppercase tracking-wider shadow-fire hover:scale-105 transition-transform inline-flex items-center gap-2">
              <Utensils className="h-4 w-4" /> Ver el menú
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
               className="border border-accent/50 text-accent px-7 py-3 rounded-md font-heading uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Ubicación
            </a>
          </div>
          <div className="mt-12 inline-flex items-center gap-3 text-sm text-muted-foreground border border-border rounded-full px-5 py-2 bg-card/60">
            <Clock className="h-4 w-4 text-ember" />
            <span>Sábado y domingo · <span className="text-bone">11:00 am – 8:00 pm</span></span>
          </div>
        </div>
      </section>

      {/* SIGNATURE PLATES */}
      <Section id="menu" className="wood-texture">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-heading uppercase tracking-[0.3em] text-xs">Las estrellas del fogón</p>
            <h2 className="font-display text-5xl md:text-7xl mt-3 text-bone">
              CARNES <span className="text-gradient-fire">AL HUMO</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Servidas con sopa fría, ensalada de col con zanahoria y bollos recién horneados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: wingsImg, name: "ALITAS AHUMADAS", desc: "Glaseadas con BBQ de la casa o salsa habanero mango, doradas al humo." },
              { img: ribsImg, name: "COSTILLAS BBQ", desc: "Tiernas, jugosas, cocción lenta hasta caer del hueso." },
              { img: heroBbq, name: "BRISKET TEXANO", desc: "12+ horas de humo, corteza oscura y anillo rosado." },
            ].map((p) => (
              <article key={p.name} className="group bg-card rounded-xl overflow-hidden border border-border shadow-deep hover:border-ember/60 transition-colors">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl text-bone tracking-wider">{p.name}</h3>
                  <p className="mt-2 text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* FULL MENU */}
      <Section className="bg-smoke">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-5xl md:text-6xl text-bone">EL <span className="text-ember">MENÚ</span> COMPLETO</h2>
            <div className="mx-auto mt-4 h-[2px] w-24 bg-fire rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <MenuCard icon={<Beef />} title="Smokehouse" items={[
              "Alitas ahumadas (BBQ o salsa habanero mango)",
              "Orden de costilla",
              "Kilo de costilla",
              "Orden de brisket",
              "Kilo de brisket",
              "Tacos montados (brisket o costilla)",
              "Sándwich de brisket o costilla en chapata",
            ]} />
            <MenuCard icon={<Sandwich />} title="Guarniciones" items={[
              "Ensalada de col",
              "Sopa fría",
              "Orden de tortillas",
              "Orden de bollos",
              "Papas gajo",
              "Papas al horno",
              "Papa rellena (brisket o costilla)",
            ]} />
            <MenuCard icon={<GlassWater />} title="Aguas & Refrescos" items={[
              "Agua de mango",
              "Agua de jamaica",
              "Horchata",
              "Té helado",
              "Agua",
              "Agua mineral",
              "Coca-Cola",
              "Cerveza",
            ]} />
            <MenuCard icon={<Coffee />} title="Smoothies" items={[
              "Mango",
              "Tamarindo",
              "Frutos rojos",
              "Fresa",
              "Frapuchino",
            ]} />
            <MenuCard icon={<Coffee />} title="Smoothies de Té" items={[
              "Kiwi maracuyá",
              "Manzana arándano",
              "Arándano cereza",
              "Moras",
            ]} />
            <MenuCard icon={<Coffee />} title="Cafetería" items={[
              "Café de olla",
              "Capuchino",
              "Americano",
              "Expreso",
              "Latte",
              "Chocolate Hershey's",
            ]} />
            <MenuCard icon={<GlassWater />} title="Tés" items={[
              "Kiwi maracuyá",
              "Manzana arándano",
              "Arándano cereza",
              "Moras",
            ]} />
            <MenuCard className="md:col-span-2" icon={<IceCream />} title="Postres" items={[
              "Selección rotativa de postres caseros para cerrar con dulzura.",
            ]} />
          </div>
        </div>
      </Section>

      {/* SANDWICH FEATURE */}
      <Section>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-ember blur-3xl opacity-50" />
            <img src={sandwichImg} alt="Sándwich de brisket" loading="lazy"
                 className="relative rounded-2xl shadow-deep ring-1 ring-accent/30" />
          </div>
          <div>
            <p className="text-accent font-heading uppercase tracking-[0.3em] text-xs">Hand-held heat</p>
            <h2 className="font-display text-5xl md:text-6xl mt-3 text-bone">
              SÁNDWICHES <span className="text-gradient-fire">QUE NO PERDONAN</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Chapata dorada, montaña de carne ahumada al estilo de la casa, col crujiente con zanahoria y un toque de BBQ.
              Disponibles en <span className="text-bone">brisket</span> o <span className="text-bone">costilla</span>.
            </p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
               className="mt-8 inline-flex items-center gap-2 bg-fire text-primary-foreground px-7 py-3 rounded-md font-heading uppercase tracking-wider shadow-fire hover:scale-105 transition-transform">
              <Flame className="h-4 w-4" /> Vente al fogón
            </a>
          </div>
        </div>
      </Section>

      {/* TIKTOK VIDEO */}
      <Section id="video" className="bg-smoke">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-heading uppercase tracking-[0.3em] text-xs">Como se ve, sabe</p>
          <h2 className="font-display text-5xl md:text-6xl mt-3 text-bone">EL HUMO EN <span className="text-ember">ACCIÓN</span></h2>
          <p className="mt-4 text-muted-foreground">Échale ojo a este video de nuestra cocina al humo.</p>

          <div className="mt-10 mx-auto max-w-md">
            <div className="rounded-2xl overflow-hidden border border-border shadow-deep bg-card">
              <blockquote
                className="tiktok-embed"
                cite={TIKTOK_VIDEO}
                data-video-id={TIKTOK_EMBED_ID}
                style={{ maxWidth: "605px", minWidth: "325px", margin: 0 }}
              >
                <section>
                  <a target="_blank" rel="noopener noreferrer" href={TIKTOK_VIDEO}>Ver en TikTok</a>
                </section>
              </blockquote>
              <script async src="https://www.tiktok.com/embed.js"></script>
            </div>
            <a href={TIKTOK_VIDEO} target="_blank" rel="noopener noreferrer"
               className="mt-6 inline-flex items-center gap-2 text-accent hover:text-ember transition-colors font-heading uppercase tracking-wider text-sm">
              <TikTokIcon className="h-4 w-4" /> Ver en TikTok
            </a>
          </div>
        </div>
      </Section>

      {/* VISIT */}
      <Section id="visit">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-deep">
            <Clock className="h-8 w-8 text-ember" />
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-bone">HORARIOS</h2>
            <p className="mt-2 text-muted-foreground">Solo fines de semana. Llega temprano, el humo no espera.</p>
            <div className="mt-6 divide-y divide-border">
              {[
                ["Sábado", "11:00 am – 8:00 pm"],
                ["Domingo", "11:00 am – 8:00 pm"],
                ["Lunes – Viernes", "Cerrado"],
              ].map(([d, h]) => (
                <div key={d} className="flex justify-between py-3 font-heading">
                  <span className="text-bone uppercase tracking-wider">{d}</span>
                  <span className={h === "Cerrado" ? "text-muted-foreground" : "text-ember"}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-deep">
            <MapPin className="h-8 w-8 text-ember" />
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-bone">UBICACIÓN</h2>
            <p className="mt-2 text-muted-foreground">Encuéntranos en Google Maps y traza tu ruta directa al fogón.</p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
               className="mt-6 w-full text-center inline-flex justify-center items-center gap-2 bg-fire text-primary-foreground px-6 py-4 rounded-md font-heading uppercase tracking-wider shadow-fire hover:scale-[1.02] transition-transform">
              <MapPin className="h-5 w-5" /> Abrir en Google Maps
            </a>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a href={IG} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-ember transition-colors">
                <Instagram className="h-4 w-4" /> @fogonvaquero
              </a>
              <a href={TT} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-ember transition-colors">
                <TikTokIcon className="h-4 w-4" /> @fogonvaquero
              </a>
              <a href={FB} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-ember transition-colors">
                <Facebook className="h-4 w-4" /> Fogón Vaquero
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-charcoal py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Fogón Vaquero" className="h-12 w-12 rounded-md object-cover ring-1 ring-accent/40" />
            <div>
              <div className="font-display text-xl tracking-widest text-bone">FOGÓN VAQUERO</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Smokehouse · BBQ</div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-ember transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href={TT} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-muted-foreground hover:text-ember transition-colors"><TikTokIcon className="h-5 w-5" /></a>
            <a href={FB} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-ember transition-colors"><Facebook className="h-5 w-5" /></a>
          </div>
          <p className="text-xs text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Fogón Vaquero. Hecho con humo y fuego.
          </p>
        </div>
      </footer>
    </div>
  );
}

function MenuCard({ icon, title, items, className = "" }: { icon: React.ReactNode; title: string; items: string[]; className?: string }) {
  return (
    <div className={`bg-card border border-border rounded-xl p-6 hover:border-ember/60 transition-colors ${className}`}>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-md bg-fire/20 text-ember flex items-center justify-center [&>svg]:h-5 [&>svg]:w-5">
          {icon}
        </div>
        <h3 className="font-display text-3xl text-bone tracking-wider">{title}</h3>
      </div>
      <ul className="mt-5 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-3 text-muted-foreground">
            <Flame className="h-4 w-4 text-ember mt-1 shrink-0" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
