import { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Github, Linkedin, Mail } from "lucide-react";

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (gradientRef.current) {
      gradientRef.current.style.background = `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.05) 80%)`;
    }
  }, [mousePosition]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Cursor-following gradient */}
      <div
        ref={gradientRef}
        className="fixed inset-0 pointer-events-none transition-none"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.05) 80%)`,
        }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 lg:px-12 py-6 backdrop-blur-sm border-b border-white/10">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="flex items-center gap-8">
            <a
              href="#work"
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 lg:px-12 text-center">
          <div className="space-y-8 max-w-4xl">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300 backdrop-blur-sm">
                ✨ Welcome to my portfolio
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Create{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  extraordinary
                </span>{" "}
                digital experiences
              </h1>
              <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Combining design thinking, technical expertise, and creative
                vision to build products that make an impact
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-slate-400">Scroll to explore</span>
              <div className="w-6 h-10 border border-slate-400 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-slate-400 rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Featured Work Section */}
        <section id="work" className="px-6 lg:px-12 py-24 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Featured Work
              </h2>
              <p className="text-lg text-slate-400">
                A selection of recent projects and experiments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                      {i}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-colors">
                      Project Title
                    </h3>
                    <p className="text-slate-400 text-sm">
                      A brief description of the project and its impact
                    </p>
                    <div className="flex items-center gap-2 text-indigo-400 group-hover:text-purple-400 transition-colors pt-2">
                      <span className="text-sm font-semibold">View Project</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-6 lg:px-12 py-24 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-slate-400 leading-relaxed">
                  I'm a passionate designer and developer focused on creating
                  digital experiences that are both beautiful and functional.
                  With expertise across design, development, and strategy.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  When I'm not designing or coding, you'll find me exploring
                  new technologies, contributing to open source, or sharing my
                  knowledge with the community.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Projects", value: "25+" },
                  { label: "Experience", value: "5+ yrs" },
                  { label: "Clients", value: "50+" },
                  { label: "Awards", value: "8" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg bg-white/5 border border-white/10 p-6 text-center hover:bg-white/10 transition-colors"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400 mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="px-6 lg:px-12 py-24 relative border-t border-white/10"
        >
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Let's Create Something Great
              </h2>
              <p className="text-lg text-slate-400">
                Have a project in mind? I'd love to hear about it. Get in touch
                and let's discuss how I can help.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <a
                href="mailto:hello@example.com"
                className="group flex items-center gap-3 px-6 py-3 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 hover:bg-clip-text transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Send me an email</span>
              </a>
              <a
                href="#"
                className="group flex items-center gap-3 px-6 py-3 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 hover:bg-clip-text transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="#"
                className="group flex items-center gap-3 px-6 py-3 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 hover:bg-clip-text transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 lg:px-12 py-8 border-t border-white/10 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400">
            <div>© 2024 Your Name. All rights reserved.</div>
            <div className="flex items-center gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
