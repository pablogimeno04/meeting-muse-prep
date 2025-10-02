import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Mail, Clock, ArrowLeft, Star, Printer, Reply } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BriefingExample = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What you receive before every meeting
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete executive briefing delivered directly to your inbox
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Gmail-style email interface */}
          <Card className="border shadow-2xl overflow-hidden">
            {/* Email toolbar */}
            <div className="bg-background border-b px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Star className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Reply className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Printer className="h-4 w-4" />
              </Button>
            </div>

            {/* Email header */}
            <div className="bg-background px-8 py-6 border-b">
              <h1 className="text-2xl font-semibold mb-4">Meeting Briefing: Acme Corporation</h1>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-muted-foreground min-w-[80px]">From:</span>
                  <div>
                    <p className="font-medium">MeetingPrep 360° AI Agent</p>
                    <p className="text-muted-foreground">briefings@meetingprep360.ai</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-muted-foreground min-w-[80px]">To:</span>
                  <p>john.consultant@yourcompany.com</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-muted-foreground min-w-[80px]">Date:</span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <p>Today, 9:00 AM (24 hours before meeting)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-muted-foreground min-w-[80px]">Subject:</span>
                  <p className="font-medium">Your briefing for tomorrow's meeting with Acme Corp at 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Email body */}
            <CardContent className="p-8 bg-background">
              <div className="prose max-w-none space-y-8">
                {/* Introduction */}
                <div>
                  <p className="text-base leading-relaxed text-foreground">
                    Hi John,
                  </p>
                  <p className="text-base leading-relaxed text-foreground mt-4">
                    Your meeting with Acme Corporation is scheduled for <strong>tomorrow at 2:00 PM</strong>. 
                    Here's everything you need to know to make this meeting successful:
                  </p>
                </div>

                {/* Key Performance Metrics */}
                <div className="border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Key Performance Indicators</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-background p-4 rounded-lg border">
                      <p className="text-3xl font-bold text-blue-600">$847M</p>
                      <p className="text-sm text-muted-foreground mt-1">Annual Revenue</p>
                      <p className="text-xs text-green-600 mt-1">↑ 23% YoY</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg border">
                      <p className="text-3xl font-bold text-purple-600">8,500</p>
                      <p className="text-sm text-muted-foreground mt-1">Employees Globally</p>
                      <p className="text-xs text-green-600 mt-1">↑ 12% growth</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg border">
                      <p className="text-3xl font-bold text-orange-600">94%</p>
                      <p className="text-sm text-muted-foreground mt-1">Customer Retention</p>
                      <p className="text-xs text-muted-foreground mt-1">Industry avg: 87%</p>
                    </div>
                  </div>
                </div>

                {/* Meeting Attendees */}
                <div className="border-l-4 border-accent pl-6 py-2 bg-accent/5 rounded-r">
                  <div className="flex items-center gap-2 mb-4">
                    <Mail className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-semibold text-foreground">Meeting Attendees</h3>
                  </div>

                  <div className="space-y-4">
                    {/* Attendee 1 */}
                    <div className="bg-background p-5 rounded-lg border">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-lg text-foreground">Sarah Chen</h4>
                          <p className="text-sm text-primary font-medium">VP of Digital Transformation</p>
                        </div>
                        <a href="mailto:s.chen@acmecorp.com" className="text-sm text-primary hover:underline">
                          s.chen@acmecorp.com
                        </a>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><strong className="text-foreground">Background:</strong> 12 years at Acme Corp, previously Senior Partner at McKinsey & Company where she led digital transformation initiatives for Fortune 500 companies.</p>
                        <p><strong className="text-foreground">Education:</strong> MBA from Harvard Business School, BS in Computer Science from Stanford</p>
                        <p><strong className="text-foreground">Recent Activity:</strong> Led the recent $2.3B acquisition of CloudTech Inc. Frequently speaks at industry conferences about AI adoption in enterprise.</p>
                        <p><strong className="text-foreground">LinkedIn Insights:</strong> Recently posted about challenges in legacy system modernization and the importance of change management in digital initiatives.</p>
                      </div>
                    </div>

                    {/* Attendee 2 */}
                    <div className="bg-background p-5 rounded-lg border">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-lg text-foreground">Michael Rodriguez</h4>
                          <p className="text-sm text-primary font-medium">Chief Technology Officer</p>
                        </div>
                        <a href="mailto:m.rodriguez@acmecorp.com" className="text-sm text-primary hover:underline">
                          m.rodriguez@acmecorp.com
                        </a>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><strong className="text-foreground">Background:</strong> Joined Acme Corp 8 years ago as Director of Engineering, promoted to CTO in 2022. Previously held senior engineering roles at Microsoft and Amazon.</p>
                        <p><strong className="text-foreground">Education:</strong> MS in Computer Engineering from MIT, BS in Electrical Engineering from UC Berkeley</p>
                        <p><strong className="text-foreground">Technical Focus:</strong> Specializes in cloud infrastructure, microservices architecture, and AI/ML implementation at scale.</p>
                        <p><strong className="text-foreground">Current Priorities:</strong> Overseeing the integration of CloudTech's data platform with Acme's existing infrastructure. Managing a team of 400+ engineers across 6 global offices.</p>
                      </div>
                    </div>

                    {/* Attendee 3 */}
                    <div className="bg-background p-5 rounded-lg border">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-lg text-foreground">Amanda Foster</h4>
                          <p className="text-sm text-primary font-medium">Director of Strategic Partnerships</p>
                        </div>
                        <a href="mailto:a.foster@acmecorp.com" className="text-sm text-primary hover:underline">
                          a.foster@acmecorp.com
                        </a>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><strong className="text-foreground">Background:</strong> 6 years at Acme Corp, responsible for managing key vendor relationships and technology partnerships worth $200M+ annually.</p>
                        <p><strong className="text-foreground">Education:</strong> MBA from Wharton, BA in Business Administration from Georgetown</p>
                        <p><strong className="text-foreground">Role in Meeting:</strong> Decision-maker for vendor contracts and partnership agreements. Will be evaluating ROI and implementation timeline.</p>
                        <p><strong className="text-foreground">Recent Projects:</strong> Successfully negotiated partnerships with Salesforce, AWS, and SAP. Known for thorough due diligence process.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strategic Questions */}
                <div className="border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Recommended Questions to Ask</h3>
                  <div className="space-y-3">
                    <div className="bg-background p-4 rounded-lg border">
                      <p className="font-medium text-foreground mb-2">1. About the CloudTech Integration</p>
                      <p className="text-sm text-muted-foreground">"How is the CloudTech acquisition progressing, particularly around consolidating the data platforms? What are the main technical challenges you're facing in the integration?"</p>
                      <p className="text-xs text-primary mt-2">💡 This shows awareness of their recent activity and addresses Michael's current priorities</p>
                    </div>
                    
                    <div className="bg-background p-4 rounded-lg border">
                      <p className="font-medium text-foreground mb-2">2. AI Transformation Strategy</p>
                      <p className="text-sm text-muted-foreground">"Sarah, I noticed your recent LinkedIn posts about AI adoption challenges. What's your vision for AI transformation at Acme over the next 12-18 months, and what obstacles are you anticipating?"</p>
                      <p className="text-xs text-primary mt-2">💡 Personal touch referencing Sarah's thought leadership and demonstrating research</p>
                    </div>
                    
                    <div className="bg-background p-4 rounded-lg border">
                      <p className="font-medium text-foreground mb-2">3. Partnership Evaluation Criteria</p>
                      <p className="text-sm text-muted-foreground">"Amanda, given your experience with partnerships like Salesforce and AWS, what are the key factors you evaluate when considering a new strategic partnership? What does success look like in the first 90 days?"</p>
                      <p className="text-xs text-primary mt-2">💡 Acknowledges Amanda's expertise and focuses on practical decision-making criteria</p>
                    </div>
                    
                    <div className="bg-background p-4 rounded-lg border">
                      <p className="font-medium text-foreground mb-2">4. Scale and Implementation</p>
                      <p className="text-sm text-muted-foreground">"With 8,500 employees across multiple offices, how do you typically approach the rollout of new enterprise tools? What lessons have you learned from past implementations?"</p>
                      <p className="text-xs text-primary mt-2">💡 Demonstrates understanding of their scale and complexity, invites them to share expertise</p>
                    </div>
                    
                    <div className="bg-background p-4 rounded-lg border">
                      <p className="font-medium text-foreground mb-2">5. Change Management</p>
                      <p className="text-sm text-muted-foreground">"Given your strong customer retention rate of 94%, what role does technology adoption play in maintaining that success? How do you balance innovation with stability?"</p>
                      <p className="text-xs text-primary mt-2">💡 Connects business metrics with technology decisions, shows strategic thinking</p>
                    </div>
                  </div>
                </div>

                {/* Email Footer */}
                <div className="pt-6 border-t">
                  <p className="text-base text-foreground">
                    Good luck with your meeting tomorrow!
                  </p>
                  <p className="text-base text-muted-foreground mt-2">
                    — MeetingPrep 360° AI Agent
                  </p>
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    This briefing was automatically generated by analyzing CRM data, LinkedIn profiles, recent news, SEC filings, and internal documents.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
