"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Brain, Heart } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Brain className="h-6 w-6 text-primary" />
              <Heart className="h-5 w-5 text-secondary" />
            </div>
            <span className="font-bold text-lg text-primary">MindWell</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("awareness")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Kesadaran
            </button>
            <button
              onClick={() => scrollToSection("insights")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Data Insights
            </button>
            <button
              onClick={() => scrollToSection("prediction")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Cek Stres
            </button>
            <button
              onClick={() => scrollToSection("recommendations")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Rekomendasi
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2">
              <button
                onClick={() => scrollToSection("awareness")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Kesadaran
              </button>
              <button
                onClick={() => scrollToSection("insights")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Data Insights
              </button>
              <button
                onClick={() => scrollToSection("prediction")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Cek Stres
              </button>
              <button
                onClick={() => scrollToSection("recommendations")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Rekomendasi
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
