import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  story: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Uwimana",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    story: "COOPEC Ikirenga helped me grow my tailoring business from a small shop to a thriving enterprise with 5 employees. The business loan process was smooth and the rates were affordable.",
  },
  {
    id: 2,
    name: "Jean Pierre Habimana",
    role: "Farmer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    story: "Thanks to the agricultural loan, I was able to invest in modern farming equipment. My harvest has tripled and I can now support my family better than ever before.",
  },
  {
    id: 3,
    name: "Claudine Mukamana",
    role: "Teacher",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    story: "I've been a member for 8 years. The savings programs helped me fund my children's education and build our family home. The staff are always helpful and professional.",
  },
  {
    id: 4,
    name: "Emmanuel Niyonzima",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    story: "When I needed capital to expand my restaurant, COOPEC Ikirenga was there for me. Their flexible repayment terms made it possible to manage my cash flow while growing.",
  },
  {
    id: 5,
    name: "Grace Ingabire",
    role: "University Graduate",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    story: "The education loan changed my life. I was able to complete my degree and now work as an accountant. I'm proud to still be a member and help my younger siblings through their studies.",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            Member Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Members Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real members who have transformed their lives with COOPEC Ikirenga.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-background border-2 shadow-lg">
                    <CardContent className="pt-8 pb-8 px-8">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/* Photo and Rating */}
                        <div className="flex flex-col items-center">
                          <div className="relative">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-1.5">
                              <Quote className="w-4 h-4" />
                            </div>
                          </div>
                          <div className="flex gap-0.5 mt-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < testimonial.rating
                                    ? "text-yellow-500 fill-yellow-500"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <blockquote className="text-lg text-foreground leading-relaxed mb-4">
                            "{testimonial.story}"
                          </blockquote>
                          <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-background shadow-lg hover:bg-primary hover:text-primary-foreground"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-background shadow-lg hover:bg-primary hover:text-primary-foreground"
            onClick={goToNext}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
