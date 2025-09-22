"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Brain, Target } from "lucide-react"

export function HeroSection() {
  const scrollToAwareness = () => {
    document.getElementById("awareness")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="flex items-center space-x-1">
              <Brain className="h-8 w-8 text-primary" />
              <Heart className="h-7 w-7 text-secondary" />
            </div>
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">SDG 3</div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">
            Data Sehat: Memahami Stres Mahasiswa untuk Kesejahteraan Jiwa
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto text-pretty">
            <strong className="text-foreground">Kesehatan Bukan Hanya Fisik, Tapi Juga Mental.</strong>
            Bergabunglah dalam perjalanan memahami dan mengatasi stres akademik untuk mendukung Tujuan Pembangunan
            Berkelanjutan (SDG) nomor 3: "Kehidupan Sehat dan Sejahtera".
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={scrollToAwareness}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Mulai Eksplorasi
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("prediction")?.scrollIntoView({ behavior: "smooth" })}
            >
              Cek Tingkat Stres
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-card border-border">
            <div className="flex justify-center mb-4">
              <Target className="h-12 w-12 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-2">51.5%</h3>
            <p className="text-muted-foreground">
              Mahasiswa mengalami tingkat stres tinggi berdasarkan penelitian terbaru
            </p>
          </Card>

          <Card className="p-6 text-center bg-card border-border">
            <div className="flex justify-center mb-4">
              <Brain className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-2">2000+</h3>
            <p className="text-muted-foreground">Data mahasiswa dianalisis untuk memahami pola stres akademik</p>
          </Card>

          <Card className="p-6 text-center bg-card border-border">
            <div className="flex justify-center mb-4">
              <Heart className="h-12 w-12 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-2">SDG 3</h3>
            <p className="text-muted-foreground">Mendukung tujuan kesehatan dan kesejahteraan untuk semua</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
