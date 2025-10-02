import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, FileText, Calendar } from "lucide-react";

export const BriefingExample = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What you receive before every meeting
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete executive briefing automatically compiled from multiple data sources
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Example briefing preview */}
          <Card className="border-2 border-primary/20 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">Executive Briefing</CardTitle>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Meeting with Acme Corp - Tomorrow, 2:00 PM
                  </p>
                </div>
                <div className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                  Auto-generated
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              {/* Company Context */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Company Context</h3>
                </div>
                <div className="pl-7 space-y-2 text-sm text-muted-foreground">
                  <p>• Fortune 500 company specializing in enterprise software solutions</p>
                  <p>• Recent acquisition of CloudTech Inc. ($2.3B) completed Q4 2024</p>
                  <p>• CEO Jennifer Martinez quoted emphasizing AI transformation strategy</p>
                </div>
              </div>

              {/* Attendees */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Meeting Attendees</h3>
                </div>
                <div className="pl-7 grid md:grid-cols-2 gap-4">
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <p className="font-semibold">Sarah Chen</p>
                      <p className="text-sm text-muted-foreground">VP of Digital Transformation</p>
                      <p className="text-xs text-muted-foreground mt-2">12 years at Acme Corp, previously at McKinsey</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <p className="font-semibold">Michael Rodriguez</p>
                      <p className="text-sm text-muted-foreground">CTO</p>
                      <p className="text-xs text-muted-foreground mt-2">Tech leadership background, MIT graduate</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Key Metrics */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Key Performance Indicators</h3>
                </div>
                <div className="pl-7 grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20">
                    <p className="text-3xl font-bold text-blue-600">+23%</p>
                    <p className="text-sm text-muted-foreground">Revenue Growth YoY</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20">
                    <p className="text-3xl font-bold text-green-600">8,500</p>
                    <p className="text-sm text-muted-foreground">Employees Globally</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20">
                    <p className="text-3xl font-bold text-purple-600">15</p>
                    <p className="text-sm text-muted-foreground">Active Projects</p>
                  </div>
                </div>
              </div>

              {/* Suggested Questions */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Suggested Discussion Points</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>How is the CloudTech integration progressing, particularly around data platform consolidation?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>What are the key priorities for the AI transformation roadmap in the next quarter?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Can we explore opportunities to expand our partnership across additional business units?</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-8">
            This briefing was automatically generated by analyzing CRM data, LinkedIn profiles, company news, and internal documents
          </p>
        </div>
      </div>
    </section>
  );
};
