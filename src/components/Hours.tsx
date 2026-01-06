import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  const schedule = [
    { hours: "08:00 - 18:00" }, // Lundi
    { hours: "08:00 - 18:00" }, // Mardi
    { hours: "08:00 - 18:00" }, // Mercredi
    { hours: "08:00 - 18:00" }, // Jeudi
    { hours: "08:00 - 16:00" }, // Vendredi
    { hours: t.hours.closed },  // Samedi
    { hours: t.hours.closed },  // Dimanche
  ];

  // Get today's index (0 = Sunday in JS, but our array is 0 = Monday)
  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];

  return (
    <section id="horaires" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <span className="text-sm uppercase tracking-widest text-primary">
              {t.hours.label}
            </span>
            <h2 className="mt-2 font-serif text-3xl md:text-5xl text-foreground">
              {t.hours.title}
            </h2>
          </div>

          {/* Schedule Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-background shadow-medium overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-bold text-foreground">
                {t.hours.header}
              </span>
            </div>

            {/* Schedule items */}
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      )}
                      <span
                        className={`font-medium ${
                          isToday ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full font-semibold">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        isClosed
                          ? "text-muted-foreground"
                          : isToday
                          ? "text-primary font-bold"
                          : "text-foreground"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer note */}
            <div className="px-6 py-4 bg-muted/50 border-t text-center text-sm text-muted-foreground">
              <p>Contactez-nous pour les urgences ou demandes spéciales</p>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 p-6 rounded-lg bg-accent/10 border border-accent/20 text-center"
          >
            <p className="text-sm font-medium text-foreground mb-3">
              Besoin d'une intervention rapide ?
            </p>
            <a
              href="tel:+41794729197"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Appelez maintenant
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
