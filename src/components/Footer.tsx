import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t, otherLangPath, otherLang } = useLanguage();
  const currentYear = new Date().getFullYear();

  const links = [
    { label: t.nav.about, href: "#a-propos" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.gallery, href: "#galerie" },
    { label: t.nav.hours, href: "#horaires" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">VJ Peinture</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              {t.footer.tagline}
            </p>
            <p className="text-xs text-primary-foreground/70">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">
              {t.footer.navigation}
            </h4>
            <nav className="space-y-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors block"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to={otherLangPath}
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors block"
              >
                {otherLang.toUpperCase()}
              </Link>
            </nav>
          </div>

          {/* Contact Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">
              {t.contact.label}
            </h4>
            <div className="space-y-2">
              <a
                href="tel:+41794729197"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors block"
              >
                +41 79 472 91 97
              </a>
              <a
                href="mailto:vjpeinture25@gmail.com"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors block"
              >
                vjpeinture25@gmail.com
              </a>
              <p className="text-xs text-primary-foreground/70 pt-2">
                Le Cornat 106<br />
                2947 Charmoille, CH
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>
              © {currentYear} VJ Peinture Sàrl. {t.footer.copyright}
            </p>
            <p className="text-xs">
              Design by <a href="#" className="hover:text-primary-foreground transition-colors">Claude Code</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
