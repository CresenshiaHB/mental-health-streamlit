import { Card } from "@/components/ui/card"
import { AlertTriangle, Users, BookOpen, Lightbulb } from "lucide-react"

export function AwarenessSection() {
  return (
    <section id="awareness" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Mengapa Kesehatan Mental Mahasiswa Penting?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Stres akademik bukan hanya masalah individual, tetapi isu kesehatan masyarakat yang memerlukan perhatian
            serius. Mari kita pahami dampaknya dan bagaimana kita bisa membantu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-8 w-8 text-destructive mr-3" />
              <h3 className="text-lg font-semibold text-card-foreground">Masalah Nyata</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Tingkat stres mahasiswa terus meningkat dengan dampak pada prestasi akademik dan kesehatan fisik
            </p>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-lg font-semibold text-card-foreground">Dampak Sosial</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Stres berlebihan mempengaruhi hubungan sosial dan kemampuan berkolaborasi dalam lingkungan akademik
            </p>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-secondary mr-3" />
              <h3 className="text-lg font-semibold text-card-foreground">Prestasi Akademik</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Manajemen stres yang baik terbukti meningkatkan fokus, kreativitas, dan hasil belajar mahasiswa
            </p>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-8 w-8 text-accent mr-3" />
              <h3 className="text-lg font-semibold text-card-foreground">Solusi Data</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Dengan memahami pola data, kita dapat menciptakan intervensi yang tepat sasaran dan efektif
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-primary/5 border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Fakta Penting tentang Stres Mahasiswa</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">75%</div>
                <p className="text-muted-foreground">
                  Mahasiswa melaporkan mengalami stres terkait akademik dalam 6 bulan terakhir
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">60%</div>
                <p className="text-muted-foreground">Mengalami gangguan tidur akibat tekanan akademik dan sosial</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">45%</div>
                <p className="text-muted-foreground">Merasa tidak memiliki cukup dukungan untuk mengatasi stres</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
