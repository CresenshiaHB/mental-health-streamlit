import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Heart, Target, ExternalLink, TrendingDown, TrendingUp, Minus } from "lucide-react"

export function RecommendationsSection() {
  return (
    <section id="recommendations" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Rekomendasi Berdasarkan Tingkat Stres Anda
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Berdasarkan analisis data dan model prediksi, berikut adalah rekomendasi spesifik untuk setiap tingkat stres
            guna mendukung SDG 3: Kehidupan Sehat dan Sejahtera.
          </p>
        </div>

        {/* Key Insights */}
        <Card className="p-8 mb-8 bg-primary/5 border-primary/20">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-secondary mr-3" />
            <h3 className="text-2xl font-bold text-primary">Ringkasan Insight Utama</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-primary">Stres sedang</strong> menghasilkan performa akademik paling seimbang
                  dengan 52.2% mahasiswa mencapai IPK 3.0-3.5.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-primary">Stres tinggi</strong> dapat mendorong prestasi (19.2% IPK 3.5-4.0)
                  namun berisiko overwhelm.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-primary">Stres rendah</strong> cenderung menghasilkan motivasi kurang dengan
                  75.1% di IPK 2.5-3.0.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-primary">Jam belajar vs IPK</strong> berkorelasi positif, namun perlu
                  diimbangi dengan istirahat.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Low Stress Recommendations */}
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center mb-6">
              <TrendingDown className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-card-foreground">Stres Rendah</h3>
            </div>

            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800 font-medium">
                Anda cenderung rileks, namun mungkin kurang termotivasi untuk mencapai potensi maksimal.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-2">🎯 Tingkatkan Motivasi</h4>
                <p className="text-sm text-muted-foreground">
                  Tetapkan target akademik yang lebih menantang dan buat deadline yang realistis untuk meningkatkan
                  fokus belajar.
                </p>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-2">📚 Struktur Belajar</h4>
                <p className="text-sm text-muted-foreground">
                  Buat jadwal belajar yang terstruktur dan konsisten. Gunakan teknik time-blocking untuk meningkatkan
                  produktivitas.
                </p>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-2">🏆 Cari Tantangan</h4>
                <p className="text-sm text-muted-foreground">
                  Ikuti kompetisi akademik, proyek tambahan, atau organisasi untuk menambah stimulasi intelektual.
                </p>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-2">👥 Accountability Partner</h4>
                <p className="text-sm text-muted-foreground">
                  Cari teman belajar atau mentor yang dapat membantu menjaga konsistensi dan motivasi belajar Anda.
                </p>
              </div>
            </div>
          </Card>

          {/* Moderate Stress Recommendations */}
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center mb-6">
              <Minus className="h-8 w-8 text-amber-600 mr-3" />
              <h3 className="text-xl font-bold text-card-foreground">Stres Sedang</h3>
            </div>

            <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800 font-medium">
                Anda berada di zona optimal! Pertahankan keseimbangan ini untuk performa akademik terbaik.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-2">⚖️ Pertahankan Balance</h4>
                <p className="text-sm text-muted-foreground">
                  Jaga keseimbangan antara belajar, istirahat, dan aktivitas sosial. Ini adalah kunci performa stabil
                  Anda.
                </p>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-2">🔄 Rutinitas Sehat</h4>
                <p className="text-sm text-muted-foreground">
                  Pertahankan rutinitas tidur 7-8 jam, olahraga ringan 3x seminggu, dan waktu belajar yang konsisten.
                </p>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-2">📊 Monitor Progress</h4>
                <p className="text-sm text-muted-foreground">
                  Lakukan evaluasi berkala terhadap metode belajar dan tingkat stres untuk memastikan tetap optimal.
                </p>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-2">🎨 Hobi & Kreativitas</h4>
                <p className="text-sm text-muted-foreground">
                  Luangkan waktu untuk hobi dan aktivitas kreatif sebagai outlet positif untuk menjaga keseimbangan
                  mental.
                </p>
              </div>
            </div>
          </Card>

          {/* High Stress Recommendations */}
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-xl font-bold text-card-foreground">Stres Tinggi</h3>
            </div>

            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800 font-medium">
                Anda mungkin berprestasi tinggi, namun berisiko burnout. Prioritaskan kesehatan mental Anda.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-2">🛑 Manajemen Stres</h4>
                <p className="text-sm text-muted-foreground">
                  Pelajari teknik relaksasi seperti deep breathing, meditasi, atau mindfulness untuk mengelola stres
                  berlebih.
                </p>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-2">💤 Prioritaskan Istirahat</h4>
                <p className="text-sm text-muted-foreground">
                  Jangan korbankan tidur untuk belajar. Tidur berkualitas 7-9 jam sangat penting untuk recovery mental.
                </p>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-2">🏃‍♂️ Aktivitas Fisik Wajib</h4>
                <p className="text-sm text-muted-foreground">
                  Jadwalkan olahraga minimal 30 menit setiap hari untuk mengurangi hormon stres dan meningkatkan
                  endorfin.
                </p>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-2">🆘 Cari Bantuan</h4>
                <p className="text-sm text-muted-foreground">
                  Jangan ragu untuk berkonsultasi dengan konselor atau psikolog jika stres mulai mengganggu kehidupan
                  sehari-hari.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Institutional Recommendations */}
        <Card className="p-6 bg-card border-border mb-8">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-secondary mr-3" />
            <h3 className="text-xl font-bold text-card-foreground">Untuk Institusi Pendidikan</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-2">📊 Sistem Monitoring</h4>
                <p className="text-sm text-muted-foreground">
                  Implementasikan sistem deteksi dini tingkat stres mahasiswa untuk intervensi yang tepat waktu.
                </p>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-2">🎯 Program Diferensiasi</h4>
                <p className="text-sm text-muted-foreground">
                  Sediakan program berbeda untuk mahasiswa dengan tingkat stres rendah (motivasi) vs tinggi (manajemen
                  stres).
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-2">🏥 Layanan Kesehatan Mental</h4>
                <p className="text-sm text-muted-foreground">
                  Perkuat layanan konseling dengan fokus pada mahasiswa high-stress yang berisiko burnout.
                </p>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-2">📚 Kurikulum Seimbang</h4>
                <p className="text-sm text-muted-foreground">
                  Desain beban akademik yang mendorong performa optimal tanpa menyebabkan stres berlebihan.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="p-8 mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Heart className="h-12 w-12 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Mari Bersama Wujudkan SDG 3</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
              Dengan memahami pola data dan memberikan rekomendasi yang tepat sasaran, kita bisa menciptakan intervensi
              yang lebih efektif untuk mendukung kesehatan mental dan mencapai tujuan SDG 3: Kehidupan Sehat dan
              Sejahtera.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Bagikan Awareness Ini
              </Button>
              <Button size="lg" variant="outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground">Dibuat dengan ❤️ untuk mendukung kesehatan mental mahasiswa dan SDG 3</p>
          <p className="text-sm text-muted-foreground mt-2">
            Data dan model yang digunakan adalah simulasi untuk tujuan demonstrasi
          </p>
        </div>
      </div>
    </section>
  )
}
