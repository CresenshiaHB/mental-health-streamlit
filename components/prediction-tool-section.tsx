"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Calculator, Brain, AlertCircle, CheckCircle, AlertTriangle } from "lucide-react"

interface PredictionInputs {
  studyHours: number
  sleepHours: number
  gpa: number
  physicalActivity: number
  socialActivity: number
}

interface PredictionResult {
  level: "Rendah" | "Sedang" | "Tinggi"
  probability: number
  confidence: number
}

export function PredictionToolSection() {
  const [inputs, setInputs] = useState<PredictionInputs>({
    studyHours: 6,
    sleepHours: 7,
    gpa: 3.0,
    physicalActivity: 3,
    socialActivity: 3,
  })

  const [result, setResult] = useState<PredictionResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Dummy prediction logic - replace with actual model
  const predictStress = () => {
    setIsLoading(true)

    setTimeout(() => {
      // Simple rule-based prediction for demo
      let stressScore = 0

      // Study hours impact (more hours = more stress)
      stressScore += (inputs.studyHours - 4) * 0.15

      // Sleep hours impact (less sleep = more stress)
      stressScore += (8 - inputs.sleepHours) * 0.2

      // GPA impact (pressure for high GPA)
      if (inputs.gpa > 3.5) stressScore += 0.1

      // Physical activity impact (less activity = more stress)
      stressScore += (5 - inputs.physicalActivity) * 0.1

      // Social activity impact (less social = more stress)
      stressScore += (5 - inputs.socialActivity) * 0.08

      // Normalize to 0-1 range
      stressScore = Math.max(0, Math.min(1, stressScore))

      let level: "Rendah" | "Sedang" | "Tinggi"
      if (stressScore < 0.33) level = "Rendah"
      else if (stressScore < 0.66) level = "Sedang"
      else level = "Tinggi"

      setResult({
        level,
        probability: stressScore * 100,
        confidence: 85 + Math.random() * 10, // Random confidence between 85-95%
      })

      setIsLoading(false)
    }, 1500)
  }

  const getResultIcon = () => {
    if (!result) return null

    switch (result.level) {
      case "Rendah":
        return <CheckCircle className="h-8 w-8 text-green-500" />
      case "Sedang":
        return <AlertTriangle className="h-8 w-8 text-yellow-500" />
      case "Tinggi":
        return <AlertCircle className="h-8 w-8 text-red-500" />
    }
  }

  const getResultColor = () => {
    if (!result) return "bg-muted"

    switch (result.level) {
      case "Rendah":
        return "bg-green-100 border-green-300"
      case "Sedang":
        return "bg-yellow-100 border-yellow-300"
      case "Tinggi":
        return "bg-red-100 border-red-300"
    }
  }

  return (
    <section id="prediction" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Bagaimana dengan Anda? Cek Prediksi Tingkat Stres Anda!
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Berdasarkan gaya hidup harian Anda, model machine learning kami dapat memprediksi tingkat stres yang mungkin
            Anda alami. Isi data di bawah ini untuk mengetahui hasilnya.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center mb-6">
              <Calculator className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold text-card-foreground">Input Data Anda</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Jam Belajar per Hari: {inputs.studyHours} jam
                </label>
                <Slider
                  value={[inputs.studyHours]}
                  onValueChange={(value) => setInputs({ ...inputs, studyHours: value[0] })}
                  max={16}
                  min={1}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 jam</span>
                  <span>16 jam</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Jam Tidur per Hari: {inputs.sleepHours} jam
                </label>
                <Slider
                  value={[inputs.sleepHours]}
                  onValueChange={(value) => setInputs({ ...inputs, sleepHours: value[0] })}
                  max={12}
                  min={3}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>3 jam</span>
                  <span>12 jam</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  IPK Saat Ini: {inputs.gpa.toFixed(2)}
                </label>
                <Slider
                  value={[inputs.gpa]}
                  onValueChange={(value) => setInputs({ ...inputs, gpa: value[0] })}
                  max={4.0}
                  min={1.0}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1.0</span>
                  <span>4.0</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Aktivitas Fisik per Minggu: {inputs.physicalActivity} hari
                </label>
                <Slider
                  value={[inputs.physicalActivity]}
                  onValueChange={(value) => setInputs({ ...inputs, physicalActivity: value[0] })}
                  max={7}
                  min={0}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0 hari</span>
                  <span>7 hari</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Kegiatan Sosial per Minggu: {inputs.socialActivity} hari
                </label>
                <Slider
                  value={[inputs.socialActivity]}
                  onValueChange={(value) => setInputs({ ...inputs, socialActivity: value[0] })}
                  max={7}
                  min={0}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0 hari</span>
                  <span>7 hari</span>
                </div>
              </div>

              <Button
                onClick={predictStress}
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                {isLoading ? "Menganalisis..." : "Prediksi Tingkat Stres"}
              </Button>
            </div>
          </Card>

          {/* Result Section */}
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center mb-6">
              <Brain className="h-6 w-6 text-secondary mr-3" />
              <h3 className="text-xl font-semibold text-card-foreground">Hasil Prediksi</h3>
            </div>

            {!result && !isLoading && (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-4">
                  Isi data di sebelah kiri dan klik tombol "Prediksi" untuk melihat hasil analisis tingkat stres Anda.
                </div>
              </div>
            )}

            {isLoading && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <div className="text-muted-foreground">Menganalisis data Anda...</div>
              </div>
            )}

            {result && (
              <div className="space-y-6">
                <Card className={`p-6 ${getResultColor()}`}>
                  <div className="flex items-center justify-center mb-4">{getResultIcon()}</div>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold mb-2">Prediksi Tingkat Stres: {result.level.toUpperCase()}</h4>
                    <p className="text-muted-foreground">Skor Stres: {result.probability.toFixed(1)}%</p>
                  </div>
                </Card>

                <div>
                  <h5 className="font-semibold text-card-foreground mb-3">Detail Probabilitas:</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Tingkat Stres</span>
                        <span>{result.probability.toFixed(1)}%</span>
                      </div>
                      <Progress value={result.probability} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Confidence Level</span>
                        <span>{result.confidence.toFixed(1)}%</span>
                      </div>
                      <Progress value={result.confidence} className="h-2" />
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h5 className="font-semibold text-card-foreground mb-2">Interpretasi:</h5>
                  <p className="text-sm text-muted-foreground">
                    {result.level === "Rendah" &&
                      "Bagus! Gaya hidup Anda cenderung mendukung kesehatan mental yang baik. Pertahankan pola ini."}
                    {result.level === "Sedang" &&
                      "Anda berada di zona moderat. Pertimbangkan untuk meningkatkan manajemen waktu dan aktivitas relaksasi."}
                    {result.level === "Tinggi" &&
                      "Tingkat stres Anda cukup tinggi. Sangat disarankan untuk mencari dukungan dan menerapkan teknik manajemen stres."}
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
