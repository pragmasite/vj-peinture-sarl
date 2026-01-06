import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Image descriptions in both languages
  const images = [
    { src: "/images/img-1.jpg", fr: "Peinture intérieure", de: "Innenmalerei" },
    { src: "/images/img-2.jpg", fr: "Devanture commerciale", de: "Geschäftsfassade" },
    { src: "/images/img-3.jpg", fr: "Façade rénovée", de: "Sanierte Fassade" },
    { src: "/images/img-4.jpg", fr: "Finition murale", de: "Wandfinish" },
    { src: "/images/img-5.jpg", fr: "Décoration papier", de: "Wandbeschichtung" },
    { src: "/images/img-6.jpg", fr: "Finition détails", de: "Detail-Finalisierung" },
    { src: "/images/img-7.jpg", fr: "Peinture décorative", de: "Dekorative Malerei" },
    { src: "/images/img-8.jpg", fr: "Finition plafond", de: "Deckenfinish" },
    { src: "/images/img-9.jpg", fr: "Mur texturé", de: "Strukturierte Wand" },
    { src: "/images/img-10.jpg", fr: "Détail architectural", de: "Architekturdetail" },
    { src: "/images/img-11.jpg", fr: "Peinture murale", de: "Wandmalerei" },
    { src: "/images/img-12.jpg", fr: "Finition intérieure", de: "Innenausbau" },
    { src: "/images/img-13.jpg", fr: "Revêtement mural", de: "Wandverkleidung" },
    { src: "/images/img-14.jpg", fr: "Peinture professionnelle", de: "Fachmalerei" },
    { src: "/images/img-15.jpg", fr: "Détail lumineux", de: "Helligkeit Detail" },
    { src: "/images/img-16.jpg", fr: "Finition soignée", de: "Sorgfältige Ausführung" },
    { src: "/images/img-17.jpg", fr: "Travail de précision", de: "Präzisionsarbeit" },
  ];

  const { lang } = useLanguage();
  const getDescription = (image: typeof images[0]) => {
    return lang === "fr" ? image.fr : image.de;
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index % images.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galerie" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="mt-2 font-serif text-3xl md:text-5xl text-foreground">
            {t.gallery.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/70">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Grid View for thumbnails */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {images.map((image, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index % 8) * 0.05 }}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={image.src}
                alt={getDescription(image)}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs sm:text-sm font-medium text-white">
                  {getDescription(image)}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Slider for detailed view */}
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 p-6 lg:p-8 rounded-xl border border-border bg-card"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={images[currentSlide].src}
                  alt={getDescription(images[currentSlide])}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Close button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Description and counter */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-serif text-lg font-bold text-foreground">
                  {getDescription(images[currentSlide])}
                </p>
                <p className="text-sm text-muted-foreground">
                  {currentSlide + 1} / {images.length}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  Précédent
                </button>
                <button
                  onClick={nextSlide}
                  className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  Suivant
                </button>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-colors ${
                    index === currentSlide
                      ? "border-accent"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={getDescription(image)}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
