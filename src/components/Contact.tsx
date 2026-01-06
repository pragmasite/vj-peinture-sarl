import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 79 472 91 97",
      href: "tel:+41794729197",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "vjpeinture25@gmail.com",
      href: "mailto:vjpeinture25@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Le Cornat 106, 2947 Charmoille, CH",
      href: "https://maps.google.com/?q=47.421751,7.203445",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="mt-2 font-serif text-3xl md:text-5xl text-foreground">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/70">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-lg border border-border bg-card hover:border-accent hover:shadow-medium transition-all group"
                >
                  <div className="flex-shrink-0 p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                      {info.label}
                    </h3>
                    <p className="text-foreground/70 group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Quick actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 flex-1"
              >
                <a href="tel:+41794729197">
                  <Phone className="mr-2 h-5 w-5" />
                  {t.contact.callNow}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="flex-1"
              >
                <a href="mailto:vjpeinture25@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  {t.contact.cta}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-full min-h-[400px] rounded-lg overflow-hidden border border-border shadow-medium"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.5555555555556!2d7.203445!3d47.421751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479014e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sLe%20Cornat%20106%2C%202947%20Charmoille!5e0!3m2!1sfr!2sch!4v1234567890"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
