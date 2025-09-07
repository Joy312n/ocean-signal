import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/enhanced-button"
import { 
  Waves, 
  AlertTriangle, 
  BarChart3, 
  MessageSquare, 
  Shield, 
  Menu,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/", icon: BarChart3 },
  { name: "Report Hazard", href: "/report", icon: AlertTriangle },
  { name: "Social Monitor", href: "/social", icon: MessageSquare },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Alerts", href: "/alerts", icon: Shield },
]

export function GlassNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-xl bg-gradient-to-r from-primary to-accent glow-pulse">
              <Waves className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">OceanGuard</h1>
              <p className="text-xs text-muted-foreground">Ministry of Earth Sciences</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={isActive ? "ocean" : "ghost_glass"}
                    size="sm"
                    className={cn(
                      "flex items-center space-x-2 transition-all duration-300",
                      isActive && "shadow-[0_0_20px_hsla(200,100%,50%,0.3)]"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Button>
                </Link>
              )
            })}
          </div>

          {/* Emergency Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="hero" size="sm" className="animate-glow-pulse">
              <AlertTriangle className="h-4 w-4" />
              Emergency Report
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost_glass"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-glass-border/20 animate-fade-in-up">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  <Button
                    variant={isActive ? "ocean" : "ghost_glass"}
                    size="sm"
                    className="w-full justify-start space-x-2"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Button>
                </Link>
              )
            })}
            <Button variant="hero" size="sm" className="w-full animate-glow-pulse">
              <AlertTriangle className="h-4 w-4" />
              Emergency Report
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}