import { useState } from "react"
import { GlassNavigation } from "@/components/navigation/GlassNavigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Shield, 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Phone,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  Bell,
  Users,
  Truck
} from "lucide-react"

const activeAlerts = [
  {
    id: 1,
    title: "Critical Wave Height Alert",
    location: "Chennai Marina Beach",
    severity: "critical",
    status: "active",
    description: "Wave heights exceeding 4.5m detected. Immediate evacuation recommended for coastal areas.",
    timestamp: "5 minutes ago",
    source: "Fishermen Report + Sensor Data",
    responders: 12,
    affected: 2500,
    actions: [
      "Emergency services dispatched",
      "Coastal evacuation in progress",
      "Warning sirens activated"
    ]
  },
  {
    id: 2,
    title: "Oil Spill Containment Required",
    location: "Mumbai Harbor - Zone 3",
    severity: "high",
    status: "responding",
    description: "Large oil spill detected spreading towards Juhu Beach. Marine cleanup teams mobilized.",
    timestamp: "23 minutes ago",
    source: "Social Media Analytics",
    responders: 8,
    affected: 1200,
    actions: [
      "Containment booms deployed",
      "Cleanup crews en route",
      "Beach access restricted"
    ]
  },
  {
    id: 3,
    title: "Unusual Marine Life Behavior",
    location: "Kochi Backwaters",
    severity: "medium",
    status: "investigating",
    description: "Reports of mass fish deaths and unusual water discoloration requiring investigation.",
    timestamp: "1 hour ago",
    source: "Multiple Crowdsourced Reports",
    responders: 4,
    affected: 300,
    actions: [
      "Environmental team deployed",
      "Water samples collected",
      "Local authorities notified"
    ]
  }
]

const recentAlerts = [
  {
    id: 4,
    title: "Coastal Erosion Monitoring",
    location: "Goa North Beach",
    severity: "low",
    status: "resolved",
    timestamp: "2 hours ago",
    duration: "45 minutes"
  },
  {
    id: 5,
    title: "Fishing Vessel Distress",
    location: "Vizag Port Area",
    severity: "high",
    status: "resolved",
    timestamp: "4 hours ago",
    duration: "1 hour 20 minutes"
  },
  {
    id: 6,
    title: "Weather Anomaly Alert",
    location: "Andaman Sea",
    severity: "medium",
    status: "resolved",
    timestamp: "6 hours ago",
    duration: "2 hours 15 minutes"
  }
]

export default function Alerts() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTab, setSelectedTab] = useState("active")

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-destructive text-destructive-foreground"
      case "high": return "bg-warning text-warning-foreground"
      case "medium": return "bg-primary text-primary-foreground"
      default: return "bg-success text-success-foreground"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <AlertTriangle className="h-4 w-4" />
      case "responding": return <Truck className="h-4 w-4" />
      case "investigating": return <Search className="h-4 w-4" />
      case "resolved": return <CheckCircle className="h-4 w-4" />
      default: return <AlertTriangle className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-destructive bg-destructive/10"
      case "responding": return "text-warning bg-warning/10"
      case "investigating": return "text-primary bg-primary/10"
      case "resolved": return "text-success bg-success/10"
      default: return "text-muted-foreground bg-muted/10"
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
                Alert Management
              </h1>
              <p className="text-xl text-muted-foreground">
                Real-time emergency alerts and response coordination
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-6 md:mt-0">
              <Button variant="hero" size="sm" className="animate-glow-pulse">
                <Bell className="h-4 w-4 mr-2" />
                Emergency Alert
              </Button>
            </div>
          </div>

          {/* Alert Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card p-6 animate-slide-in-right">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Active Alerts</p>
                  <p className="text-3xl font-bold text-destructive">3</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-destructive animate-pulse" />
              </div>
            </Card>

            <Card className="glass-card p-6 animate-slide-in-right" style={{ animationDelay: "100ms" }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Responders</p>
                  <p className="text-3xl font-bold text-foreground">24</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </Card>

            <Card className="glass-card p-6 animate-slide-in-right" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">People Affected</p>
                  <p className="text-3xl font-bold text-foreground">4,000</p>
                </div>
                <Shield className="h-8 w-8 text-warning" />
              </div>
            </Card>

            <Card className="glass-card p-6 animate-slide-in-right" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Avg Response</p>
                  <p className="text-3xl font-bold text-foreground">7.2m</p>
                </div>
                <Clock className="h-8 w-8 text-success" />
              </div>
            </Card>
          </div>

          {/* Search and Tabs */}
          <Card className="glass-card p-6 mb-8 animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button 
                  variant={selectedTab === "active" ? "ocean" : "ghost_glass"} 
                  size="sm"
                  onClick={() => setSelectedTab("active")}
                >
                  Active Alerts ({activeAlerts.length})
                </Button>
                <Button 
                  variant={selectedTab === "recent" ? "ocean" : "ghost_glass"} 
                  size="sm"
                  onClick={() => setSelectedTab("recent")}
                >
                  Recent ({recentAlerts.length})
                </Button>
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search alerts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 glass-card border-glass-border/50"
                  />
                </div>
                <Button variant="glass" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Active Alerts */}
          {selectedTab === "active" && (
            <div className="space-y-6">
              {activeAlerts.map((alert, index) => (
                <Card 
                  key={alert.id} 
                  className="glass-card p-6 hover:glass-panel transition-all duration-300 animate-slide-in-right"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-6">
                    {/* Alert Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-destructive/20 to-warning/20">
                            <AlertTriangle className="h-6 w-6 text-destructive" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{alert.title}</h3>
                            <div className="flex items-center space-x-4 text-muted-foreground mt-1">
                              <span className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {alert.location}
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {alert.timestamp}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-foreground text-lg">{alert.description}</p>
                        <p className="text-sm text-muted-foreground">Source: {alert.source}</p>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-2">
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity.toUpperCase()}
                        </Badge>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getStatusColor(alert.status)}`}>
                          {getStatusIcon(alert.status)}
                          <span className="ml-2 capitalize">{alert.status}</span>
                        </div>
                      </div>
                    </div>

                    {/* Response Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-lg bg-glass/20">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-lg bg-primary/20">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Active Responders</p>
                          <p className="text-lg font-semibold text-foreground">{alert.responders} teams</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-lg bg-warning/20">
                          <Shield className="h-5 w-5 text-warning" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">People Affected</p>
                          <p className="text-lg font-semibold text-foreground">{alert.affected.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Items */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Current Actions:</h4>
                      <div className="space-y-2">
                        {alert.actions.map((action, actionIndex) => (
                          <div key={actionIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-success" />
                            <span className="text-muted-foreground">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-glass-border/30">
                      <Button variant="hero" size="sm">
                        <Phone className="h-4 w-4 mr-2" />
                        Contact Response Team
                      </Button>
                      <Button variant="ocean" size="sm">
                        Update Status
                      </Button>
                      <Button variant="glass" size="sm">
                        View Details
                      </Button>
                      <Button variant="ghost_glass" size="sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        View on Map
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Recent Alerts */}
          {selectedTab === "recent" && (
            <div className="space-y-4">
              {recentAlerts.map((alert, index) => (
                <Card 
                  key={alert.id} 
                  className="glass-card p-6 hover:glass-panel transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-lg bg-success/20">
                        <CheckCircle className="h-6 w-6 text-success" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{alert.title}</h3>
                        <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                          <span className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {alert.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            Resolved {alert.timestamp}
                          </span>
                          <span>Duration: {alert.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getSeverityColor(alert.severity)}>
                        {alert.severity.toUpperCase()}
                      </Badge>
                      <Button variant="ghost_glass" size="sm">
                        View Report
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}