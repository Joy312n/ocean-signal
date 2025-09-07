import { useState } from "react"
import { GlassNavigation } from "@/components/navigation/GlassNavigation"
import { Button } from "@/components/ui/enhanced-button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  AlertTriangle,
  MapPin,
  Camera,
  Phone,
  Send,
  Clock,
  User
} from "lucide-react"

const hazardTypes = [
  "High Waves/Tsunami",
  "Oil Spill",
  "Coastal Erosion",
  "Marine Pollution",
  "Unusual Marine Life",
  "Weather Anomaly",
  "Other"
]

const severityLevels = [
  { value: "low", label: "Low", color: "text-success" },
  { value: "medium", label: "Medium", color: "text-warning" },
  { value: "high", label: "High", color: "text-destructive" },
  { value: "critical", label: "Critical", color: "text-destructive" }
]

export default function HazardReport() {
  const [formData, setFormData] = useState({
    hazardType: "",
    severity: "",
    location: "",
    description: "",
    reporterName: "",
    reporterContact: "",
    images: []
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Report submitted successfully! Emergency response team has been notified.")
      setFormData({
        hazardType: "",
        severity: "",
        location: "",
        description: "",
        reporterName: "",
        reporterContact: "",
        images: []
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <GlassNavigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-destructive/20 to-warning/20 backdrop-blur-sm mb-6">
              <AlertTriangle className="h-12 w-12 text-destructive animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Ocean Hazard Reporting
            </h1>
            <p className="text-xl text-muted-foreground">
              Report ocean hazards to help protect coastal communities and marine ecosystems
            </p>
          </div>

          {/* Emergency Notice */}
          <Card className="glass-card p-6 mb-8 border-destructive/30 animate-slide-in-right">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-lg bg-destructive/20">
                <Phone className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Emergency Situations</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  For immediate life-threatening situations, call emergency services first: <strong>112</strong>
                </p>
                <Button variant="hero" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Emergency Services
                </Button>
              </div>
            </div>
          </Card>

          {/* Report Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Card className="glass-card p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-primary" />
                Hazard Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="hazardType">Hazard Type *</Label>
                  <Select value={formData.hazardType} onValueChange={(value) => setFormData({...formData, hazardType: value})}>
                    <SelectTrigger className="glass-card border-glass-border/50">
                      <SelectValue placeholder="Select hazard type" />
                    </SelectTrigger>
                    <SelectContent className="glass-panel border-glass-border/50">
                      {hazardTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="severity">Severity Level *</Label>
                  <Select value={formData.severity} onValueChange={(value) => setFormData({...formData, severity: value})}>
                    <SelectTrigger className="glass-card border-glass-border/50">
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent className="glass-panel border-glass-border/50">
                      {severityLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          <span className={level.color}>{level.label}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    placeholder="Detailed location (coordinates, landmarks, address)"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="glass-card border-glass-border/50"
                    required
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Detailed description of the hazard, what you observed, current conditions..."
                    rows={6}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="glass-card border-glass-border/50"
                    required
                  />
                </div>
              </div>
            </Card>

            <Card className="glass-card p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <User className="h-6 w-6 mr-2 text-primary" />
                Reporter Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="reporterName">Your Name *</Label>
                  <Input
                    id="reporterName"
                    placeholder="Full name"
                    value={formData.reporterName}
                    onChange={(e) => setFormData({...formData, reporterName: e.target.value})}
                    className="glass-card border-glass-border/50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reporterContact">Contact Number *</Label>
                  <Input
                    id="reporterContact"
                    placeholder="Phone number"
                    type="tel"
                    value={formData.reporterContact}
                    onChange={(e) => setFormData({...formData, reporterContact: e.target.value})}
                    className="glass-card border-glass-border/50"
                    required
                  />
                </div>
              </div>
            </Card>

            <Card className="glass-card p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Camera className="h-6 w-6 mr-2 text-primary" />
                Evidence (Optional)
              </h2>
              
              <div className="border-2 border-dashed border-glass-border/50 rounded-xl p-8 text-center hover:border-glass-border/70 transition-colors">
                <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  Upload photos or videos of the hazard (Max 10 files, 5MB each)
                </p>
                <Button variant="glass" type="button">
                  Choose Files
                </Button>
              </div>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                disabled={isSubmitting}
                className="min-w-[200px]"
              >
                {isSubmitting ? (
                  <>
                    <Clock className="h-5 w-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Submit Report
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Card className="glass-card p-6 animate-fade-in-up">
              <h3 className="font-semibold text-foreground mb-3">What happens next?</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Your report is immediately sent to emergency response teams</li>
                <li>• Location is verified and assessed for risk level</li>
                <li>• Relevant authorities are notified based on severity</li>
                <li>• You'll receive updates on the response status</li>
              </ul>
            </Card>

            <Card className="glass-card p-6 animate-slide-in-right">
              <h3 className="font-semibold text-foreground mb-3">Privacy & Security</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Your contact info is only shared with response teams</li>
                <li>• Reports are encrypted and securely transmitted</li>
                <li>• Anonymous reporting options available</li>
                <li>• Data retention follows government guidelines</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}