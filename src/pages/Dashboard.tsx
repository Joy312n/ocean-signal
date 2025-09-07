import { GlassNavigation } from "@/components/navigation/GlassNavigation"
import { Button } from "@/components/ui/enhanced-button"
import { Card } from "@/components/ui/card"
import { 
  Waves, 
  AlertTriangle, 
  BarChart3, 
  MessageSquare, 
  Shield,
  TrendingUp,
  Users,
  MapPin,
  Clock
} from "lucide-react"
import heroImage from "@/assets/hero-ocean.jpg"

const stats = [
  { label: "Active Reports", value: "247", icon: AlertTriangle, trend: "+12%" },
  { label: "Social Mentions", value: "1,832", icon: MessageSquare, trend: "+8%" },
  { label: "Monitoring Stations", value: "156", icon: MapPin, trend: "0%" },
  { label: "Response Teams", value: "23", icon: Users, trend: "+5%" },
]

const recentAlerts = [
  {
    id: 1,
    type: "High Waves",
    location: "Chennai Coast",
    severity: "Critical",
    time: "15 minutes ago",
    source: "Fishermen Report"
  },
  {
    id: 2,
    type: "Oil Spill",
    location: "Mumbai Harbor",
    severity: "High",
    time: "32 minutes ago",
    source: "Social Media"
  },
  {
    id: 3,
    type: "Coastal Erosion",
    location: "Kerala Backwaters",
    severity: "Medium",
    time: "1 hour ago",
    source: "Sensor Network"
  }
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <GlassNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Ocean Safety
                  <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                    Monitoring System
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Advanced crowdsourced reporting and AI-powered social media analytics 
                  for real-time ocean hazard detection and disaster management.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 animate-slide-in-right">
                <Button variant="hero" size="xl" className="group">
                  <AlertTriangle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Report Emergency
                </Button>
                <Button variant="glass" size="xl">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  View Analytics
                </Button>
              </div>
            </div>
            
            <div className="relative animate-float">
              <img
                src={heroImage}
                alt="Ocean monitoring system"
                className="w-full h-[500px] object-cover rounded-3xl glass-panel"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card 
                  key={stat.label} 
                  className="glass-card p-6 hover:glass-panel transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="h-4 w-4 text-success mr-1" />
                        <span className="text-success text-sm">{stat.trend}</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent Alerts */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Recent Alerts</h2>
            <Button variant="ocean" size="lg">
              View All Alerts
            </Button>
          </div>
          
          <div className="space-y-4">
            {recentAlerts.map((alert, index) => (
              <Card 
                key={alert.id} 
                className="glass-card p-6 hover:glass-panel transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${
                      alert.severity === 'Critical' ? 'bg-destructive/20 text-destructive' :
                      alert.severity === 'High' ? 'bg-warning/20 text-warning' :
                      'bg-primary/20 text-primary'
                    }`}>
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{alert.type}</h3>
                      <p className="text-muted-foreground">{alert.location}</p>
                      <p className="text-sm text-muted-foreground flex items-center mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {alert.time} • {alert.source}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost_glass" size="sm">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 bg-gradient-glass">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card p-8 hover:glass-panel transition-all duration-300 group">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Social Media Monitor</h3>
              <p className="text-muted-foreground mb-6">Track social media mentions and early warning signals</p>
              <Button variant="ocean" className="w-full">
                Open Monitor
              </Button>
            </Card>
            
            <Card className="glass-card p-8 hover:glass-panel transition-all duration-300 group">
              <BarChart3 className="h-12 w-12 text-accent mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Analytics Dashboard</h3>
              <p className="text-muted-foreground mb-6">View detailed reports and predictive analytics</p>
              <Button variant="glass" className="w-full">
                View Analytics
              </Button>
            </Card>
            
            <Card className="glass-card p-8 hover:glass-panel transition-all duration-300 group">
              <Shield className="h-12 w-12 text-success mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Emergency Response</h3>
              <p className="text-muted-foreground mb-6">Coordinate emergency response teams and resources</p>
              <Button variant="hero" className="w-full">
                Emergency Panel
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}