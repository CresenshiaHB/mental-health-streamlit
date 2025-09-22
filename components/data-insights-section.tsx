"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { useState } from "react"
import { ChevronDown, ChevronUp, TrendingUp, Users, Clock, GraduationCap, BarChart3 } from "lucide-react"
import Image from "next/image"

// Dummy data for stress level distribution
const stressData = [
  { level: "Rendah", count: 485, percentage: 24.25 },
  { level: "Sedang", count: 485, percentage: 24.25 },
  { level: "Tinggi", count: 1030, percentage: 51.5 },
]

// Dummy data for correlation insights
const correlationData = [
  { factor: "Jam Belajar", correlation: 0.72, impact: "Positif Kuat" },
  { factor: "Jam Tidur", correlation: -0.58, impact: "Negatif Sedang" },
  { factor: "IPK", correlation: 0.45, impact: "Positif Sedang" },
  { factor: "Aktivitas Fisik", correlation: -0.41, impact: "Negatif Sedang" },
  { factor: "Kegiatan Sosial", correlation: -0.33, impact: "Negatif Lemah" },
]

// New GPA distribution data based on provided insights
const gpaByStressData = [
  {
    stressLevel: "Low Stress",
    gpa_2_0_2_5: 21,
    gpa_2_5_3_0: 223,
    gpa_3_0_3_5: 52,
    gpa_3_5_4_0: 1,
    total: 297,
  },
  {
    stressLevel: "Moderate Stress",
    gpa_2_0_2_5: 18,
    gpa_2_5_3_0: 307,
    gpa_3_0_3_5: 352,
    gpa_3_5_4_0: 5,
    total: 682,
  },
  {
    stressLevel: "High Stress",
    gpa_2_0_2_5: 6,
    gpa_2_5_3_0: 167,
    gpa_3_0_3_5: 658,
    gpa_3_5_4_0: 198,
    total: 1029,
  },
]

// Study hours vs GPA correlation data
const studyGpaData = Array.from({ length: 50 }, (_, i) => ({
  studyHours: 5 + Math.random() * 5,
  gpa: 2.2 + Math.random() * 1.8 + i * 0.02,
}))

const COLORS = ["#4b5563", "#d97706", "#164e63"]

export function DataInsightsSection() {
  const [showCorrelation, setShowCorrelation] = useState(false)
  const [showGpaInsights, setShowGpaInsights] = useState(false)

  return (
    <section id="insights" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Bagaimana Gaya Hidup Berhubungan dengan Tingkat Stres?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Mari kita lihat data dari 2000 mahasiswa untuk memahami pola dan hubungan antara berbagai faktor gaya hidup
            dengan tingkat stres.
          </p>
        </div>

        {/* Main Insight Card */}
        <Card className="p-8 mb-8 bg-card border-border">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-8 w-8 text-secondary mr-3" />
            <h3 className="text-2xl font-bold text-card-foreground">Stres Ternyata Masalah Umum</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Dari 2000 data mahasiswa yang kami analisis, lebih dari separuhnya (51.5%) mengalami tingkat stres yang
                tinggi. Ini membuktikan bahwa stres akademik adalah isu yang nyata dan perlu perhatian serius.
              </p>

              <div className="space-y-4">
                {stressData.map((item, index) => (
                  <div key={item.level} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded mr-3" style={{ backgroundColor: COLORS[index] }} />
                      <span className="font-medium text-card-foreground">{item.level}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-card-foreground">{item.count}</span>
                      <span className="text-muted-foreground ml-2">({item.percentage}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stressData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ level, percentage }) => `${level}: ${percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {stressData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-card border-border mb-8">
          <Button
            variant="ghost"
            onClick={() => setShowGpaInsights(!showGpaInsights)}
            className="w-full flex items-center justify-between p-4 hover:bg-muted/50"
          >
            <div className="flex items-center">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              <span className="text-lg font-semibold text-card-foreground">
                Hubungan Menarik: Stres vs IPK Mahasiswa
              </span>
            </div>
            {showGpaInsights ? <ChevronUp /> : <ChevronDown />}
          </Button>

          {showGpaInsights && (
            <div className="mt-6 pt-6 border-t border-border">
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-card-foreground mb-4">
                    Distribusi IPK Berdasarkan Tingkat Stres
                  </h4>
                  <Image
                    src="/images/gpa-distribution.png"
                    alt="GPA Distribution by Stress Level"
                    width={600}
                    height={400}
                    className="rounded-lg border border-border"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-card-foreground mb-4">Insight Kunci</h4>
                  <Image
                    src="/images/gpa-insights.png"
                    alt="Key Insights from GPA Analysis"
                    width={600}
                    height={400}
                    className="rounded-lg border border-border"
                  />
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-card-foreground mb-4 flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-secondary" />
                  Temuan Mengejutkan dari Data IPK
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-card rounded-lg">
                    <h5 className="font-semibold text-primary mb-2">Stres Rendah</h5>
                    <p className="text-sm text-muted-foreground">
                      75.1% mahasiswa memiliki IPK 2.5-3.0. Kurangnya tekanan akademik dapat mengurangi motivasi.
                    </p>
                  </div>
                  <div className="p-4 bg-card rounded-lg">
                    <h5 className="font-semibold text-secondary mb-2">Stres Sedang</h5>
                    <p className="text-sm text-muted-foreground">
                      Distribusi paling seimbang dengan 52.2% mencapai IPK 3.0-3.5. Stres optimal untuk performa.
                    </p>
                  </div>
                  <div className="p-4 bg-card rounded-lg">
                    <h5 className="font-semibold text-destructive mb-2">Stres Tinggi</h5>
                    <p className="text-sm text-muted-foreground">
                      19.2% mencapai IPK 3.5-4.0 (tertinggi), tapi 63.9% di range 3.0-3.5. Ada risiko overwhelm.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-4">Korelasi Jam Belajar vs IPK</h4>
                  <Image
                    src="/images/study-correlation.png"
                    alt="Study Hours vs GPA Correlation"
                    width={500}
                    height={300}
                    className="rounded-lg border border-border"
                  />
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h5 className="font-semibold text-primary mb-2">📈 Tren Positif yang Jelas</h5>
                    <p className="text-sm text-muted-foreground">
                      Semakin banyak jam belajar, semakin tinggi IPK. Namun perhatikan bahwa konsistensi juga meningkat
                      di jam belajar yang lebih tinggi.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                    <h5 className="font-semibold text-secondary mb-2">⚖️ Keseimbangan adalah Kunci</h5>
                    <p className="text-sm text-muted-foreground">
                      Stres sedang menghasilkan performa akademik yang paling stabil dan konsisten dibanding ekstrem
                      lainnya.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Correlation Analysis */}
        <Card className="p-6 bg-card border-border">
          <Button
            variant="ghost"
            onClick={() => setShowCorrelation(!showCorrelation)}
            className="w-full flex items-center justify-between p-4 hover:bg-muted/50"
          >
            <div className="flex items-center">
              <Users className="h-6 w-6 text-primary mr-3" />
              <span className="text-lg font-semibold text-card-foreground">
                Klik untuk Melihat Hubungan Antar Variabel
              </span>
            </div>
            {showCorrelation ? <ChevronUp /> : <ChevronDown />}
          </Button>

          {showCorrelation && (
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-muted-foreground mb-6 text-pretty">
                Ditemukan korelasi yang menarik antara berbagai faktor gaya hidup dengan tingkat stres.
                <strong className="text-card-foreground"> Jam Belajar</strong> memiliki korelasi positif yang kuat,
                sementara <strong className="text-card-foreground">Jam Tidur</strong> dan
                <strong className="text-card-foreground"> Aktivitas Fisik</strong> memiliki korelasi negatif, artinya
                semakin cukup tidur dan aktif berolahraga, semakin rendah potensi stres.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-secondary" />
                    Faktor Korelasi dengan Stres
                  </h4>
                  <div className="space-y-3">
                    {correlationData.map((item) => (
                      <div key={item.factor} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="font-medium text-card-foreground">{item.factor}</span>
                        <div className="text-right">
                          <div className="font-bold text-card-foreground">{item.correlation}</div>
                          <div className="text-sm text-muted-foreground">{item.impact}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={correlationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="factor" angle={-45} textAnchor="end" height={80} fontSize={12} />
                      <YAxis domain={[-1, 1]} />
                      <Tooltip />
                      <Bar dataKey="correlation" fill="#164e63" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  )
}
