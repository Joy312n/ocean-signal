import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const handleStatClick = (statType: string) => {
    switch (statType) {
      case 'reports':
        navigate('/report')
        break
      case 'social':
        navigate('/social')
        break
      case 'stations':
        navigate('/analytics')
        break
      case 'teams':
        navigate('/alerts')
        break
    }
  }
  
  const handleAlertClick = (alertId: number) => {
    navigate('/alerts')
  }
  
  const handleQuickActionClick = (action: string) => {
    switch (action) {
      case 'social':
        navigate('/social')
        break
      case 'analytics':
        navigate('/analytics')
        break
      case 'emergency':
        navigate('/alerts')
        break
    }
  }
  return (
    <div className="min-h-screen bg-gradient-hero smooth-scroll">
      <GlassNavigation />
      
      {/* Full Screen Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen overflow-hidden parallax-container">
        {/* Full Screen Background Image with Parallax */}
        <div 
          className="absolute inset-0 parallax-element"
          style={{
            transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0003})`
          }}
        >
          <img
            src={heroImage}
            alt="Ocean monitoring system"
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
            style={{
              transform: `translateY(${scrollY * -0.2}px) scale(1.1)`
            }}
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-4xl">
              <div className="space-y-8">
                <div className="animate-fade-in-up">
                  <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                    Ocean Safety
                    <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                      Monitoring System
                    </span>
                  </h1>
                  <p className="text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed max-w-3xl">
                    Advanced crowdsourced reporting and AI-powered social media analytics 
                    for real-time ocean hazard detection and disaster management.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-6 animate-slide-in-right">
                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="group tile-interactive text-lg px-8 py-4 h-auto"
                    onClick={() => navigate('/report')}
                  >
                    <AlertTriangle className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                    Report Emergency
                  </Button>
                  <Button 
                    variant="glass" 
                    size="xl" 
                    className="tile-interactive text-lg px-8 py-4 h-auto bg-white/10 backdrop-blur-xl text-white border-white/20 hover:bg-white/20"
                    onClick={() => navigate('/analytics')}
                  >
                    <BarChart3 className="mr-3 h-6 w-6" />
                    View Analytics
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating UI Elements */}
        <div 
          className="absolute top-8 right-8 glass-panel p-4 rounded-2xl animate-float z-20"
          style={{ animationDelay: '0.5s' }}
        >
          <Waves className="h-8 w-8 text-primary" />
        </div>
        <div 
          className="absolute bottom-8 left-8 glass-panel p-4 rounded-2xl animate-float z-20"
          style={{ animationDelay: '1s' }}
        >
          <Shield className="h-8 w-8 text-accent" />
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Interactive Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              const statType = stat.label === "Active Reports" ? "reports" : 
                              stat.label === "Social Mentions" ? "social" :
                              stat.label === "Monitoring Stations" ? "stations" : "teams"
              return (
                <Card 
                  key={stat.label} 
                  className="glass-card p-6 tile-interactive tile-hover-lift cursor-pointer animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handleStatClick(statType)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                        {stat.label}
                      </p>
                      <p className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {stat.value}
                      </p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="h-4 w-4 text-success mr-1 group-hover:animate-pulse" />
                        <span className="text-success text-sm">{stat.trend}</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Recent Alerts */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Recent Alerts</h2>
            <Button 
              variant="ocean" 
              size="lg" 
              className="tile-interactive"
              onClick={() => navigate('/alerts')}
            >
              View All Alerts
            </Button>
          </div>
          
          <div className="space-y-4">
            {recentAlerts.map((alert, index) => (
              <Card 
                key={alert.id} 
                className="glass-card p-6 tile-interactive tile-hover-lift cursor-pointer animate-slide-in-right group"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => handleAlertClick(alert.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                      alert.severity === 'Critical' ? 'bg-destructive/20 text-destructive group-hover:bg-destructive/40' :
                      alert.severity === 'High' ? 'bg-warning/20 text-warning group-hover:bg-warning/40' :
                      'bg-primary/20 text-primary group-hover:bg-primary/40'
                    }`}>
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {alert.type}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {alert.location}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center mt-1 group-hover:text-accent transition-colors">
                        <Clock className="h-3 w-3 mr-1" />
                        {alert.time} • {alert.source}
                      </p>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="ghost_glass" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quick Actions */}
      <section className="py-16 px-4 bg-gradient-glass">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              className="glass-card p-8 tile-interactive tile-hover-lift cursor-pointer group"
              onClick={() => handleQuickActionClick('social')}
            >
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4 group-hover:animate-pulse group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Social Media Monitor
              </h3>
              <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors">
                Track social media mentions and early warning signals
              </p>
              <Button variant="ocean" className="w-full tile-interactive">
                Open Monitor
              </Button>
            </Card>
            
            <Card 
              className="glass-card p-8 tile-interactive tile-hover-lift cursor-pointer group"
              onClick={() => handleQuickActionClick('analytics')}
            >
              <BarChart3 className="h-12 w-12 text-accent mx-auto mb-4 group-hover:animate-pulse group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                Analytics Dashboard
              </h3>
              <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors">
                View detailed reports and predictive analytics
              </p>
              <Button variant="glass" className="w-full tile-interactive">
                View Analytics
              </Button>
            </Card>
            
            <Card 
              className="glass-card p-8 tile-interactive tile-hover-lift cursor-pointer group"
              onClick={() => handleQuickActionClick('emergency')}
            >
              <Shield className="h-12 w-12 text-success mx-auto mb-4 group-hover:animate-pulse group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-success transition-colors">
                Emergency Response
              </h3>
              <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors">
                Coordinate emergency response teams and resources
              </p>
              <Button variant="hero" className="w-full tile-interactive">
                Emergency Panel
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}