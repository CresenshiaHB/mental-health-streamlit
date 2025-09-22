"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Lightbulb, TrendingUp, Database } from "lucide-react"

// Dummy feature importance data
const featureImportance = [
  { feature: "Jam Belajar", importance: 0.28, description: "Faktor paling berpengaruh" },
  { feature: "Jam Tidur", importance: 0.24, description: "Sangat penting untuk recovery" },
  { feature: "IPK", importance: 0.19, description: "Tekanan akademik" },
  { feature: "Aktivitas Fisik", importance: 0.16, description: "Pengelola stres alami" },
  { feature: "Kegiatan Sosial", importance: 0.13, description: "Dukungan sosial" },
]

export function ModelExplanationSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Di Balik Prediksi - Faktor Apa yang Paling Menentukan?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Model machine learning kami menganalisis berbagai faktor untuk memberikan prediksi yang akurat. Mari kita
            lihat faktor mana yang paling berpengaruh dalam menentukan tingkat stres.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Feature Importance Chart */}
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-6 w-6 text-secondary mr-3" />
              <h3 className="text-xl font-semibold text-card-foreground">Tingkat Kepentingan Faktor</h3>
            </div>

            <div className="h-80 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={featureImportance} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 0.3]} />
                  <YAxis dataKey="feature" type="category" width={80} fontSize={12} />
                  <Tooltip formatter={(value: number) => [`${(value * 100).toFixed(1)}%`, "Importance"]} />
                  <Bar dataKey="importance" fill="#164e63" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="text-sm text-muted-foreground">
              <p className="text-pretty">
                Grafik di atas menunjukkan seberapa besar pengaruh masing-masing faktor dalam model prediksi. Semakin
                tinggi nilai importance, semakin besar pengaruhnya terhadap tingkat stres.
              </p>
            </div>
          </Card>

          {/* Detailed Explanation */}
          <div className="space-y-6">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-6 w-6 text-secondary mr-3" />
                <h3 className="text-xl font-semibold text-primary">Insight Utama</h3>
              </div>
              <p className="text-muted-foreground text-pretty">
                Model kami menemukan bahwa <strong className="text-primary">Jam Belajar</strong> adalah faktor yang
                paling berpengaruh dalam memprediksi stres, diikuti oleh
                <strong className="text-primary"> Jam Tidur</strong> dan <strong className="text-primary">IPK</strong>.
                Ini menunjukkan bahwa manajemen waktu akademik dan istirahat adalah kunci utama.
              </p>
            </Card>

            <div className="space-y-4">
              {featureImportance.map((item, index) => (
                <Card key={item.feature} className="p-4 bg-card border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-card-foreground">{item.feature}</h4>
                    <span className="text-sm font-bold text-secondary">{(item.importance * 100).toFixed(1)}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-2 bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${item.importance * 100}%` }}
                    />
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold text-card-foreground">Tentang Model</h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Algoritma:</span>
                  <span className="font-medium text-card-foreground">Random Forest Classifier</span>
                </div>
                <div className="flex justify-between">
                  <span>Akurasi Model:</span>
                  <span className="font-medium text-card-foreground">87.3%</span>
                </div>
                <div className="flex justify-between">
                  <span>Data Training:</span>
                  <span className="font-medium text-card-foreground">2000 sampel</span>
                </div>
                <div className="flex justify-between">
                  <span>Cross-validation:</span>
                  <span className="font-medium text-card-foreground">5-fold CV</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
