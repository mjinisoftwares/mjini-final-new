import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

// ✅ Define pricing plans
export const PRICING_PLANS = [
  {
    title: "Landing Page",
    price: "Ksh. 20,000",
    description: "Perfect for startups & personal brands",
    features: [
      "1 Page Website Design & Development",
      "Modern Responsive Layout (Mobile-First)",
      "Basic SEO Setup & Google Indexing",
      "Contact Form Integration",
      "Delivery: 3–5 Days",
      "Free Hosting (1 Month)",
      "Ongoing Support (7 Days)",
    ],
    relatedServices: [
      "Web Design Services",
      "Website Development",
      "SEO Services Kenya",
    ],
    highlight: false,
  },
  {
    title: "Static Website",
    price: "Ksh. 30,000",
    description: "Best for small businesses & service brands",
    features: [
      "Up to 5 Custom Pages (Home, About, Services, Contact)",
      "Professional, Responsive Design",
      "Basic SEO Optimization & Speed Enhancements",
      "Photo Gallery or Services Showcase",
      "Contact Form + Google Map Integration",
      "Free Hosting (1 Month)",
      "Delivery: 5–7 Days",
    ],
    relatedServices: [
      "Web Design Services",
      "Website Development",
      "Website Maintenance",
    ],
    highlight: false,
  },
  {
    title: "Dynamic Website",
    price: "Ksh. 50,000",
    description: "Blogs, CMS & Editable Websites",
    features: [
      "Integrated Blog / CMS Dashboard",
      "Medium-Level SEO Optimization",
      "Database Integration (Supabase / MySQL)",
      "Basic AI Chatbot Integration",
      "Modern Responsive UI (Next.js / WordPress)",
      "Admin Panel for Easy Updates",
      "Delivery: 7–10 Days",
    ],
    relatedServices: [
      "Website Development",
      "AI Integration & Automation",
      "SEO Services Kenya",
    ],
    highlight: true,
  },
  {
    title: "Advanced Website",
    price: "Ksh. 80,000",
    description: "For established brands & growing companies",
    features: [
      "Advanced SEO Strategy (Keywords + Analytics)",
      "CMS + Blogs + Database Management",
      "AI Chatbot & Workflow Automation",
      "Analytics Dashboard & CRM Integration",
      "Handles up to 1M Monthly Users",
      "Performance & Security Optimization",
      "Dedicated Support (30 Days)",
    ],
    relatedServices: [
      "AI Integration & Automation",
      "Website Development",
      "Digital Marketing",
    ],
    highlight: false,
  },
  {
    title: "Enterprise Solutions",
    price: "Ksh. 100,000+",
    description: "Custom Web & Mobile App Solutions",
    features: [
      "Custom Web Applications (E-commerce, MIS, Analytics)",
      "Mobile App Development (Android & iOS)",
      "Scalable Cloud Architecture & Deployment",
      "AI-Powered Data Analysis & Automation",
      "Dedicated Support & Maintenance Contract",
      "Enterprise-Level Security & Hosting Setup",
      "Full Branding, Design & Marketing Integration",
    ],
    relatedServices: [
      "Mobile & Web App Development",
      "Ecommerce Solutions",
      "Digital Marketing",
    ],
    highlight: false,
  },
]

// ✅ SEO Pricing plans
export const SEO_PLANS = [
  {
    title: "Starter SEO",
    price: "Ksh. 20,000",
    period: "/mo",
    description: "Ideal for local businesses getting started.",
    features: [
      "Up to 5 Highly Competitive Keywords",
      "On-Page SEO Optimization",
      "Google My Business Setup",
      "Basic Competitor Analysis",
      "Monthly Progress Report",
      "Ai Overview Optimization",
      "Top Ranking on Google Search Engines",
      "Top Ranking on Bing Search Engines",
      "Top Ranking on AI Chatbots",
      
    ],
    highlight: false,
  },
  {
    title: "Growth SEO",
    price: "Ksh. 35,000",
    period: "/mo",
    description: "Great for growing brands aiming for higher traffic.",
    features: [
      "Up to 10 Highly Competitive Keywords",
      "On-Page & Off-Page SEO",
      "Technical SEO Audit & Fixes",
      "Advanced Google My Business Optimization",
      "Content Strategy & Link Building",
      "Bi-Weekly Analytics Reports",
      "Ai Overview Optimization",
      "Top Ranking on Google Search Engines",
      "Top Ranking on Bing Search Engines",
      "Top Ranking on AI Chatbots",
      "Ai Overview Optimization",
      "Top Ranking on Google Search Engines",
      "Top Ranking on Bing Search Engines",
      "Top Ranking on AI Chatbots",
    ],
    highlight: true,
  },
  {
    title: "Dominator SEO",
    price: "Ksh. 50,000",
    period: "/mo",
    description: "Dominating search results with aggressive strategies.",
    features: [
      "Up to 20+ Highly Competitive Keywords",
      "Advanced Technical & Local SEO",
      "High-Quality Link Building",
      "Competitor Analysis",
      "Advanced Google My Business Optimization",
      "Advanced Content Strategy & Link Building",
      "Conversion Rate Optimization (CRO)",
      "Weekly Reports & Strategy Calls",
      "Ai Overview Optimization",
      "Top Ranking on Google Search Engines",
      "Top Ranking on Bing Search Engines",
      "Top Ranking on AI Chatbots",
      "Ai Overview Optimization",
      "Top Ranking on Google Search Engines",
      "Top Ranking on Bing Search Engines",
      "Top Ranking on AI Chatbots",
    ],
    highlight: false,
  },
]

// ✅ Maintenance Pricing plans
export const MAINTENANCE_PLANS = [
  {
    title: "Basic Care",
    price: "Ksh. 2,500",
    period: "/mo",
    description: "Essential upkeep for small websites and blogs.",
    features: [
      "Core & Plugin Updates",
      "Daily Cloud Backups",
      "Basic Security Monitoring",
      "1 Hour Content Updates",
      "Email Support",
      
    ],
    highlight: false,
  },
  {
    title: "Pro Maintenance",
    price: "Ksh. 5,000",
    period: "/mo",
    description: "Comprehensive support for growing businesses.",
    features: [
      "Everything in Basic Care",
      "24/7 Uptime Monitoring",
      "Speed & Performance Optimization",
      "3 Hours Content Updates",
      "Monthly Analytics Report",
    ],
    highlight: true,
  },
  {
    title: "Enterprise Care",
    price: "Ksh. 10,000",
    period: "/mo",
    description: "Premium support for mission-critical platforms.",
    features: [
      "Everything in Pro Maintenance",
      "Advanced Security Firewalls",
      "Unlimited Content Updates",
      "Custom Feature Additions",
      "Priority 24/7 Support",
    ],
    highlight: false,
  },
]

// ✅ Pricing component
export default function Pricing() {
  return (
    <section className="bg-secondary/50 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-left md:text-center space-y-6">
          <h1 className="text-4xl font-bold">Affordable <span className="text-primary">Plans </span>for Every Business</h1>
          <p className="text-muted-foreground">
            Choose a plan that fits your needs and budget. Our transparent pricing ensures you get the best value for your investment.
          </p>
        </div>

        {/* Web Design Pricing Cards */}
        <div className="mt-16 space-y-6">
          <div className="text-left md:text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold">Web Development Packages</h2>
            <p className="text-muted-foreground mt-2 text-sm">One-time payment for your website design and development.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PRICING_PLANS.map((plan, index) => (
              <Card
                key={index}
                className={`flex p-4 flex-col relative transition-all hover:shadow-lg ${
                  plan.highlight ? 'border-primary/50 shadow-lg ring-1 ring-primary/20' : ''
                }`}
              >
                {/* Highlight Badge */}
                {plan.highlight && (
                  <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white shadow-md">
                    Most Popular
                  </span>
                )}

                <CardHeader>
                  <CardTitle className="mt-8 font-semibold text-2xl text-secondary-foreground/90">{plan.title}</CardTitle>
                  <hr />
                  <span className="my-2 block text-xl font-bold text-primary">{plan.price} /=</span>
                  <CardDescription className="text-sm font-semibold text-secondary-foreground/80">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-2">
                  <hr className="border-dashed" />
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <Check className="size-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="mt-auto">
                  <Button asChild variant={plan.highlight ? 'default' : 'outline'} className="w-full">
                    <Link href="/contact">Start Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* SEO Pricing Cards */}
        <div className="mt-20 space-y-6">
          <div className="text-left md:text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold">SEO & Optimization Packages</h2>
            <p className="text-muted-foreground mt-2 text-sm">Monthly retainers based on the number of optimized keywords.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SEO_PLANS.map((plan, index) => (
              <Card
                key={index}
                className={`flex p-4 flex-col relative transition-all hover:shadow-lg ${
                  plan.highlight ? 'border-primary/50 shadow-lg ring-1 ring-primary/20' : ''
                }`}
              >
                {/* Highlight Badge */}
                {plan.highlight && (
                  <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white shadow-md">
                    Most Popular
                  </span>
                )}

                <CardHeader>
                  <CardTitle className="mt-8 font-semibold text-2xl text-secondary-foreground/90">{plan.title}</CardTitle>
                  <hr />
                  <span className="my-2 flex items-baseline gap-1 text-xl font-bold text-primary">
                    {plan.price} <span className="text-sm font-normal text-muted-foreground">{plan.period}</span>
                  </span>
                  <CardDescription className="text-sm font-semibold text-secondary-foreground/80">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-2">
                  <hr className="border-dashed" />
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <Check className="size-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="mt-auto">
                  <Button asChild variant={plan.highlight ? 'default' : 'outline'} className="w-full">
                    <Link href="/contact">Start SEO Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Maintenance Pricing Cards */}
        <div className="mt-20 space-y-6">
          <div className="text-left md:text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold">Website Maintenance Packages</h2>
            <p className="text-muted-foreground mt-2 text-sm">Keep your website secure, fast, and up-to-date with our monthly care plans.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {MAINTENANCE_PLANS.map((plan, index) => (
              <Card
                key={index}
                className={`flex p-4 flex-col relative transition-all hover:shadow-lg ${
                  plan.highlight ? 'border-primary/50 shadow-lg ring-1 ring-primary/20' : ''
                }`}
              >
                {/* Highlight Badge */}
                {plan.highlight && (
                  <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white shadow-md">
                    Most Popular
                  </span>
                )}

                <CardHeader>
                  <CardTitle className="mt-8 font-semibold text-2xl text-secondary-foreground/90">{plan.title}</CardTitle>
                  <hr />
                  <span className="my-2 flex items-baseline gap-1 text-xl font-bold text-primary">
                    {plan.price} <span className="text-sm font-normal text-muted-foreground">{plan.period}</span>
                  </span>
                  <CardDescription className="text-sm font-semibold text-secondary-foreground/80">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-2">
                  <hr className="border-dashed" />
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <Check className="size-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="mt-auto">
                  <Button asChild variant={plan.highlight ? 'default' : 'outline'} className="w-full">
                    <Link href="/contact">Select Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
