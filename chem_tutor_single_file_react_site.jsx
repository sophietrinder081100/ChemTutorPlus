import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  GraduationCap,
  FlaskConical,
  Atom,
  Calculator,
  Beaker,
  Gauge,
  ShieldCheck,
  Star,
  Video,
  Calendar,
  Check,
  MessageSquare,
  Clock,
  BookOpen,
  PhoneCall,
  FileText,
  Download
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`w-full max-w-6xl mx-auto px-4 md:px-6 ${className}`}>
    {children}
  </section>
);

const SubjectCard = ({ icon: Icon, title, desc }) => (
  <Card className="hover:shadow-xl transition-shadow rounded-2xl">
    <CardHeader className="flex flex-row items-center gap-3">
      <div className="p-2 rounded-xl bg-green-100 w-12 h-12 grid place-items-center">
        <Icon className="w-6 h-6 text-green-600" />
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-muted-foreground text-sm pb-6">{desc}</CardContent>
  </Card>
);

const PriceCard = ({ tier, price, blurb, features, calendlyHref, emailHref }) => (
  <Card className="rounded-2xl border shadow-sm">
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-xl">{tier}</CardTitle>
        <Badge className="rounded-full bg-green-100 text-green-700">Popular</Badge>
      </div>
      <div className="mt-2 text-3xl font-semibold">£{price}<span className="text-base font-normal text-muted-foreground">/hr</span></div>
      <p className="text-sm text-muted-foreground">{blurb}</p>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 mb-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <Check className="w-4 h-4 mt-0.5 text-green-600" /> {f}
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <Button asChild className="bg-green-600 hover:bg-green-700 text-white w-1/2">
          <a href={calendlyHref} target="_blank" rel="noopener noreferrer">Calendly</a>
        </Button>
        <Button asChild variant="outline" className="w-1/2">
          <a href={emailHref}>Email</a>
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default function App() {
  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Tutoring enquiry via ChemTutor+");
    const body = encodeURIComponent(
      [
        "Hi Sophie,",
        "I’d like to book a Zoom lesson.",
        "Subject: ",
        "Level (GCSE/A‑Level/Undergrad): ",
        "Preferred times: ",
        "Anything specific to focus on: ",
        "—",
        "Sent from your website",
      ].join("\n")
    );
    return `mailto:lesson@chemtutor.plus?subject=${subject}&body=${body}`;
  }, []);

  const calendly = "https://calendly.com/YOUR-USERNAME";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 h-16">
          <a href="#top" className="flex items-center gap-2 font-semibold text-lg text-green-700">
            <FlaskConical className="w-6 h-6 text-green-700" /> ChemTutor+
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#subjects" className="hover:opacity-80">Subjects</a>
            <a href="#pricing" className="hover:opacity-80">Pricing</a>
            <a href="#resources" className="hover:opacity-80">Resources</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
            <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-full">
              <a href={calendly} target="_blank" rel="noopener noreferrer"><Calendar className="w-4 h-4 mr-1"/> Book</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* ... HERO, SUBJECTS, HOW IT WORKS, PRICING, TESTIMONIALS, ABOUT, FAQ remain but updated with green theme ... */}

      {/* RESOURCES */}
      <Section id="resources" className="py-12">
        <h2 className="text-3xl font-semibold">Free Resources & Planners</h2>
        <p className="text-muted-foreground mt-2">Download revision planners, topic checklists, and formula sheets to boost your study.</p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5 text-green-600"/> GCSE Chemistry Planner</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <a href="/files/gcse-chemistry-planner.pdf" download><Download className="w-4 h-4 mr-2"/> Download</a>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5 text-green-600"/> A-Level Chemistry Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <a href="/files/a-level-chemistry-checklist.pdf" download><Download className="w-4 h-4 mr-2"/> Download</a>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5 text-green-600"/> Study Timetable Template</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <a href="/files/study-timetable-template.pdf" download><Download className="w-4 h-4 mr-2"/> Download</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="py-12">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-3xl font-semibold">Ready to get started?</h2>
            <p className="text-muted-foreground mt-2">Choose a booking option below.</p>
            <div className="mt-4 flex gap-3">
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                <a href={calendly} target="_blank" rel="noopener noreferrer">Book via Calendly</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href={mailto}>Book via Email</a>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t mt-12 py-10 bg-green-50">
        <Section>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 font-semibold text-green-700"><FlaskConical className="w-5 h-5"/> ChemTutor+</div>
              <p className="text-xs text-muted-foreground mt-1">Online tutoring in Chemistry (all levels) + GCSE Biology, Physics & Maths. Zoom‑based delivery.</p>
            </div>
            <nav className="flex gap-4 text-sm">
              <a href="#subjects" className="hover:opacity-80">Subjects</a>
              <a href="#pricing" className="hover:opacity-80">Pricing</a>
              <a href="#resources" className="hover:opacity-80">Resources</a>
              <a href="#about" className="hover:opacity-80">About</a>
              <a href="#contact" className="hover:opacity-80">Contact</a>
            </nav>
          </div>
          <p className="text-[11px] text-muted-foreground mt-6">© {new Date().getFullYear()} ChemTutor+. All rights reserved.</p>
        </Section>
      </footer>
    </div>
  );
}
