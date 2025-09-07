import { useState } from "react"
import { GlassNavigation } from "@/components/navigation/GlassNavigation"
import { Button } from "@/components/ui/enhanced-button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  MessageSquare,
  TrendingUp,
  AlertTriangle,
  Search,
  Filter,
  BarChart3,
  MapPin,
  Clock,
  ExternalLink,
  Twitter,
  Facebook,
  Instagram
} from "lucide-react"

const mockSocialPosts = [
  {
    id: 1,
    platform: "twitter",
    content: "Massive waves hitting Chennai marina! Never seen anything like this #TsunamiAlert #ChennaiFloods",
    author: "@fisherman_raja",
    timestamp: "2 minutes ago",
    location: "Chennai, Tamil Nadu",
    sentiment: "critical",
    engagement: 234,
    verified: false,
    riskScore: 95
  },
  {
    id: 2,
    platform: "facebook",
    content: "Oil spill spotted near Mumbai harbor. Local fishermen reporting dead fish. Authorities need to act now!",
    author: "Marine Conservation Group",
    timestamp: "15 minutes ago",
    location: "Mumbai, Maharashtra",
    sentiment: "high",
    engagement: 567,
    verified: true,
    riskScore: 88
  },
  {
    id: 3,
    platform: "instagram",
    content: "Beautiful sunset but the water looks different today... very dark patches #KeralaPollution",
    author: "coastal_photographer",
    timestamp: "32 minutes ago",
    location: "Kochi, Kerala",
    sentiment: "medium",
    engagement: 123,
    verified: false,
    riskScore: 65
  }
]

const trendingTopics = [
  { tag: "#TsunamiAlert", posts: 1250, trend: "+45%" },
  { tag: "#OilSpill", posts: 890, trend: "+23%" },
  { tag: "#CoastalErosion", posts: 456, trend: "+12%" },
  { tag: "#MarinePollution", posts: 234, trend: "+8%" }
]

const platforms = [
  { name: "Twitter", icon: Twitter, posts: 1234, alerts: 12 },
  { name: "Facebook", icon: Facebook, posts: 890, alerts: 8 },
  { name: "Instagram", icon: Instagram, posts: 567, alerts: 5 }
]

export default function SocialMonitor() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "critical": return "bg-destructive text-destructive-foreground"
      case "high": return "bg-warning text-warning-foreground"
      case "medium": return "bg-primary text-primary-foreground"
      default: return "bg-success text-success-foreground"
    }
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "twitter": return Twitter
      case "facebook": return Facebook
      case "instagram": return Instagram
      default: return MessageSquare
    }
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <GlassNavigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Social Media Monitoring
            </h1>
            <p className="text-xl text-muted-foreground">
              Real-time analysis of social media for early ocean hazard detection
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Posts</p>
                  <p className="text-2xl font-bold text-foreground">2,691</p>
                </div>
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
            </Card>
            
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Active Alerts</p>
                  <p className="text-2xl font-bold text-foreground">25</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
            </Card>
            
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Risk Score</p>
                  <p className="text-2xl font-bold text-foreground">78</p>
                </div>
                <BarChart3 className="h-8 w-8 text-warning" />
              </div>
            </Card>
            
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Locations</p>
                  <p className="text-2xl font-bold text-foreground">156</p>
                </div>
                <MapPin className="h-8 w-8 text-accent" />
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              {/* Search and Filters */}
              <Card className="glass-card p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search posts, locations, hashtags..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 glass-card border-glass-border/50"
                    />
                  </div>
                  <Button variant="glass" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </Card>

              {/* Social Posts Feed */}
              <div className="space-y-4">
                {mockSocialPosts.map((post, index) => {
                  const PlatformIcon = getPlatformIcon(post.platform)
                  return (
                    <Card 
                      key={post.id} 
                      className="glass-card p-6 hover:glass-panel transition-all duration-300 animate-slide-in-right"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-lg bg-primary/20">
                              <PlatformIcon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-foreground">{post.author}</span>
                                {post.verified && (
                                  <Badge variant="secondary" className="text-xs">Verified</Badge>
                                )}
                              </div>
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <span className="flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {post.timestamp}
                                </span>
                                <span className="flex items-center">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {post.location}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Badge className={getSentimentColor(post.sentiment)}>
                            Risk: {post.riskScore}%
                          </Badge>
                        </div>

                        {/* Content */}
                        <p className="text-foreground">{post.content}</p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-glass-border/30">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <TrendingUp className="h-4 w-4 mr-1" />
                              {post.engagement} interactions
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost_glass" size="sm">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                            <Button variant="ocean" size="sm">
                              Create Alert
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending Topics */}
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Trending Topics</h3>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div 
                      key={topic.tag} 
                      className="flex items-center justify-between p-3 rounded-lg bg-glass/20 hover:bg-glass/30 transition-colors animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div>
                        <p className="font-medium text-foreground">{topic.tag}</p>
                        <p className="text-sm text-muted-foreground">{topic.posts} posts</p>
                      </div>
                      <span className="text-success text-sm font-medium">{topic.trend}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Platform Stats */}
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Platform Activity</h3>
                <div className="space-y-4">
                  {platforms.map((platform, index) => {
                    const Icon = platform.icon
                    return (
                      <div 
                        key={platform.name} 
                        className="flex items-center justify-between animate-slide-in-right"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-primary/20">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{platform.name}</p>
                            <p className="text-sm text-muted-foreground">{platform.posts} posts</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-destructive">{platform.alerts}</p>
                          <p className="text-xs text-muted-foreground">alerts</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="ocean" className="w-full justify-start">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Create Alert
                  </Button>
                  <Button variant="glass" className="w-full justify-start">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Generate Report
                  </Button>
                  <Button variant="ghost_glass" className="w-full justify-start">
                    <Filter className="h-4 w-4 mr-2" />
                    Manage Filters
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