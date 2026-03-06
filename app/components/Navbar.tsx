"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const sections = [
  { id: "home", label: "Home" },
  { id: "hard-skills", label: "Hard Skills" },
  { id: "soft-skills", label: "Soft Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "experiences", label: "Experiences" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNav = (id: string) => {
    // Si on n'est pas sur la home, on navigue vers /#id
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    // Si on est déjà sur la home, on scroll seulement
    scrollToSection(id);
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur border-b border-foreground/10 transition-colors ${
        scrolled ? "bg-background/90" : "bg-background/60"
      }`}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Name */}
        <button
          onClick={() => handleNav("home")}
          className="text-sm font-semibold tracking-wide uppercase"
        >
          Mourtada<span className="opacity-60">.</span>
        </button>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNav(section.id)}
              className="hover:opacity-70 transition-colors"
            >
              {section.label}
            </button>
          ))}

          {/* Language toggle placeholder */}
          
        </div>
      </nav>
    </header>
  );
}
