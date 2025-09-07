import { GlassNavigation } from "@/components/navigation/GlassNavigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/enhanced-button"
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  MapPin, 
  Calendar,
  Download,
  Filter,
  RefreshCw
} from "lucide-react"

const mockChartData = [
  { month: "Jan", incidents: 45, socialMentions: 234 },
  { month: "Feb", incidents: 52, socialMentions: 189 },
  { month: "Mar", incidents: 78, socialMentions: 456 },
  { month: "Apr", incidents: 34, socialMentions: 123 },
  { month: "May", incidents: 89, socialMentions: 567 },
  { month: "Jun", incidents: 67, socialMentions: 345 }
]

const riskAreas = [
  { location: "Chennai Coast", riskLevel: 85, incidents: 23, trend: "+12%" },
  { location: "Mumbai Harbor", riskLevel: 72, incidents: 18, trend: "+8%" },
  { location: "Kochi Backwaters", riskLevel: 58, incidents: 12, trend: "-5%" },
  { location: "Goa Beaches", riskLevel: 45, incidents: 9, trend: "+3%" },
  { location: "Vizag Port", riskLevel: 38, incidents: 7, trend: "-15%" }
]

const insights = [
  {
    title: "Seasonal Pattern Detected",
    description: "Ocean hazard incidents increase by 34% during monsoon season",
    impact: "high",
    date: "2 hours ago"
  },
  {
    title: "Social Media Early Warning",
    description: "Twitter mentions preceded 78% of confirmed incidents by 15-30 minutes",
    impact: "critical",
    date: "4 hours ago"
  },
  {
    title: "Response Time Improvement",
    description: "Average emergency response time reduced by 23% with social monitoring",
    impact: "positive",
    date: "1 day ago"
  }
]

export default function Analytics() {
  const getRiskColor = (level: number) => {
    if (level >= 80) return "text-destructive bg-destructive/10"
    if (level >= 60) return "text-warning bg-warning/10"
    if (level >= 40) return "text-primary bg-primary/10"
    return "text-success bg-success/10"
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "critical": return "border-l-destructive"
      case "high": return "border-l-warning"
      case "positive": return "border-l-success"
      default: return "border-l-primary"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <GlassNavigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 animate-fade-in-up">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Analytics Dashboard
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive insights and predictive analytics for ocean safety
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-6 md:mt-0">
              <Button variant="glass" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="ghost_glass" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button variant="ocean" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card p-6 animate-slide-in-right">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Incidents</p>
                  <p className="text-3xl font-bold text-foreground">247</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-success mr-1" />
                    <span className="text-success text-sm">+12%</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20">
                  <AlertTriangle className="h-8 w-8 text-primary" />
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 animate-slide-in-right" style={{ animationDelay: "100ms" }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Avg Response Time</p>
                  <p className="text-3xl font-bold text-foreground">8.5m</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-success mr-1" />
                    <span className="text-success text-sm">-23%</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-r from-success/20 to-primary/20">
                  <BarChart3 className="h-8 w-8 text-success" />
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 animate-slide-in-right" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Prediction Accuracy</p>
                  <p className="text-3xl font-bold text-foreground">89.4%</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-success mr-1" />
                    <span className="text-success text-sm">+5.2%</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-r from-accent/20 to-primary/20">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 animate-slide-in-right" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Areas Monitored</p>
                  <p className="text-3xl font-bold text-foreground">156</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-primary mr-1" />
                    <span className="text-primary text-sm">+8</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-r from-warning/20 to-accent/20">
                  <MapPin className="h-8 w-8 text-warning" />
                </div>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Charts Section */}
            <div className="lg:col-span-2 space-y-8">
              {/* Incident Trends Chart */}
              <Card className="glass-card p-6 animate-fade-in-up">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-foreground">Incident Trends</h3>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost_glass" size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Last 6 Months
                    </Button>
                  </div>
                </div>
                
                {/* Mock Chart Area */}
                <div className="h-80 bg-gradient-glass rounded-lg p-6 flex items-end justify-between">
                  {mockChartData.map((data, index) => (
                    <div key={data.month} className="flex flex-col items-center space-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="bg-primary/20 rounded-lg p-4 w-16 text-center">
                        <div className="text-sm font-medium text-foreground">{data.incidents}</div>
                      </div>
                      <div className="bg-accent/20 rounded-lg p-4 w-16 text-center">
                        <div className="text-sm font-medium text-foreground">{data.socialMentions}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{data.month}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-center space-x-6 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded bg-primary/60"></div>
                    <span className="text-sm text-muted-foreground">Incidents</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded bg-accent/60"></div>
                    <span className="text-sm text-muted-foreground">Social Mentions</span>
                  </div>
                </div>
              </Card>

              {/* Risk Areas Map */}
              <Card className="glass-card p-6 animate-slide-in-right">
                <h3 className="text-xl font-semibold text-foreground mb-6">High-Risk Areas</h3>
                <div className="space-y-4">
                  {riskAreas.map((area, index) => (
                    <div 
                      key={area.location} 
                      className="flex items-center justify-between p-4 rounded-lg bg-glass/20 hover:bg-glass/30 transition-all duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-lg bg-primary/20">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{area.location}</h4>
                          <p className="text-sm text-muted-foreground">{area.incidents} incidents this month</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(area.riskLevel)}`}>
                          {area.riskLevel}% Risk
                        </div>
                        <p className="text-sm text-success mt-1">{area.trend}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* AI Insights */}
              <Card className="glass-card p-6 animate-slide-in-right">
                <h3 className="text-xl font-semibold text-foreground mb-6">AI Insights</h3>
                <div className="space-y-4">
                  {insights.map((insight, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg bg-glass/20 border-l-4 ${getImpactColor(insight.impact)} animate-fade-in-up`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <h4 className="font-medium text-foreground mb-2">{insight.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{insight.date}</span>
                        <Button variant="ghost_glass" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Reports */}
              <Card className="glass-card p-6 animate-fade-in-up">
                <h3 className="text-xl font-semibold text-foreground mb-6">Quick Reports</h3>
                <div className="space-y-3">
                  <Button variant="ocean" className="w-full justify-start">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Monthly Summary
                  </Button>
                  <Button variant="glass" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Trend Analysis
                  </Button>
                  <Button variant="ghost_glass" className="w-full justify-start">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Risk Assessment
                  </Button>
                  <Button variant="ghost_glass" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Export Data
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}