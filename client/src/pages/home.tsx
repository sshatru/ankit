import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { 
  Rocket, 
  Shield, 
  IdCard, 
  Users, 
  FileText, 
  Calculator,
  Globe,
  Tag,
  Gift,
  Home as HomeIcon,
  Bus,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Star,
  CheckCircle
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroFormData, setHeroFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [contactFormData, setContactFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your appointment request has been submitted successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(heroFormData);
    setHeroFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(contactFormData);
    setContactFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Start A Business",
      description: "Start your business with any business entities like Proprietorship, Partnership, Limited Liability Partnership, Private Limited Company, One Person Company, Limited Company, Nidhi Company, Association of Persons (AOP), Trust, Society and Section 8 Company."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "IPR Services", 
      description: "We provides the entire range of services required to register and maintain protection for your intellectual property assets. trademarks, copyrights, designs & patents. We can also help you with trademark objection and trademark opposition and renewal."
    },
    {
      icon: <IdCard className="w-8 h-8" />,
      title: "License And Registration",
      description: "Government License and Registration are mandatory to start and run the business in India, We do assist on all type of mandatory and industry based licenses such as Shop and Est, PSARA, MSME, Trade License, Import Export, GST, Drug License, FSSAI etc."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Payroll And Labour Law",
      description: "Payroll processing and follow Labour Law is a highly complex task for most businesses due to the various compliance requirements in India. We take care of payroll and all statutory compliance like PT, PF and ESIC Return Filing and maintaining statutory Registers and Records."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "GST Services",
      description: "We provides end-to-end GST services from GST registration to GST return and compliance. You can easily create invoices, track expenses, manage inventory and file GST returns through our cloud-based GST software. Get in touch with our Experts for GST related advisory."
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Taxation And Compliance", 
      description: "We provide a complete range of compliance solutions from tax registration to tax return filing. Obtain tax registration or file returns with the Income Tax Department, ESI Department, PF Department, Custom Department, Ministry of Corporate Affairs and more."
    }
  ];

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Online And Transparent Process",
      description: "Our process is designed to deliver swift and reliable services, most services provided through online mode with complete transparency."
    },
    {
      icon: <Tag className="w-8 h-8" />,
      title: "Dynamic Pricing Module",
      description: "Our services are based on the concept of pay for actual usage of our time/ services, which is suitable for any level of your requirement."
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Referral Bonus",
      description: "On every referral, we gave three months free GST & TDS return filing or referral points that can be redeemed in any of our services."
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: "Doorstep Services",
      description: "On your request, An expert will visit your office to discuss the object & scope of your startup plan and also advise you on the appropriate mode of your startup like LLP, Private Limited, etc."
    },
    {
      icon: <Bus className="w-8 h-8" />,
      title: "Vast Pool Of Professionals",
      description: "We are an organized team of experienced Chartered Accountant, Company Secretary, and Lawyers, duly supported by a pool of trained accountants and paralegal staff."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Money-Back Guarantee",
      description: "We offer you a 90-day money-back guarantee on every service you rendered. However, We're confident that our services and professionalism will match your desire."
    }
  ];

  const testimonials = [
    {
      name: "Apoorva Bhargav",
      role: "Co-Founder, EDEN IAS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      review: "We started with a Private Limited company incorporation for our Educational Institute. We have been taking the services from last two years and had an amazing service experience with the team. Smooth work everything was completed on time with perfection."
    },
    {
      name: "Dr. Pradyumana Singh",
      role: "MD & Founder - ISPL",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      review: "Had an outstanding experience working with RPG Legal to set up my company & Trademark Registration. Even minute details were explained and all aspects provided. Ready to support beyond hours, hat's off guys."
    },
    {
      name: "Prashant Singh",
      role: "Director, ShiftPurple & Nextdot",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      review: "It was a very immeasurable experience in setting up my company. The team are professional & understands the need and executes at the pace needed. I really appreciate & recommend."
    },
    {
      name: "Vaibhav Vishal Srivastava",
      role: "Director, Certslearning Pvt Ltd",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      review: "Dedicated, supportive and understanding team… What else do we need to get the jobs done? Thanks to RPG Legal for helping us. And I hope this will be maintained as you already established a great business relationship."
    },
    {
      name: "Sumit Ghugharwal",
      role: "Director, Ghugharmedia Pvt Ltd",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      review: "Highly supporting system for new business.. Thank you RPG Legal for providing every type of business-related support to new in the field like me… and want to really appreciate the work of Mr Anand."
    },
    {
      name: "Saajib Zaman",
      role: "Founder, Proict LLC",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      review: "We're using your services form the last three years. We are delighted with the way solutions are provided in matters we have endeavoured professional help. We admire the association and look forward to a similar experience."
    }
  ];

  const trustedCompanies = [
    "ShiftPurple", "Sketch Design", "Healthy Naturals", "Nextdot", "GLA", "Avijaa",
    "Eden IAS", "Marte Films", "Ghugharmedia", "Brewing Co", "BookGuru", "Crivera"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold text-primary" data-testid="logo">
              RPG Legal
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-about"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-testimonials"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-contact"
              >
                Contact Us
              </button>
              <a 
                href="tel:+919319266200" 
                className="bg-accent text-accent-foreground px-4 py-2 rounded-md font-medium hover:bg-accent/90 transition-colors"
                data-testid="header-phone"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                +91-9319-266-200
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-about"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-testimonials"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-contact"
              >
                Contact Us
              </button>
              <a 
                href="tel:+919319266200" 
                className="block w-full text-left text-accent font-medium"
                data-testid="mobile-header-phone"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                +91-9319-266-200
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" data-testid="hero-title">
                Let's start and grow your business
              </h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Business Startup",
                  "Registration & Licenses", 
                  "Accounting & Taxation",
                  "Business Planning & Management",
                  "Legislative & Legal Services",
                  "Payroll & Labour Law Compliances",
                  "Intellectual Property Rights"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3" data-testid={`hero-service-${index}`}>
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={() => scrollToSection('services')} 
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-colors"
                data-testid="hero-cta-button"
              >
                Explore All Our Services
              </Button>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20" data-testid="hero-contact-form">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">Request Appointment</h3>
                <form onSubmit={handleHeroFormSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Name *"
                      required
                      value={heroFormData.name}
                      onChange={(e) => setHeroFormData({...heroFormData, name: e.target.value})}
                      className="bg-white/20 border-white/30 placeholder:text-white/80 text-white focus:ring-accent focus:border-transparent"
                      data-testid="hero-form-name"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email *"
                      required
                      value={heroFormData.email}
                      onChange={(e) => setHeroFormData({...heroFormData, email: e.target.value})}
                      className="bg-white/20 border-white/30 placeholder:text-white/80 text-white focus:ring-accent focus:border-transparent"
                      data-testid="hero-form-email"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={heroFormData.phone}
                      onChange={(e) => setHeroFormData({...heroFormData, phone: e.target.value})}
                      className="bg-white/20 border-white/30 placeholder:text-white/80 text-white focus:ring-accent focus:border-transparent"
                      data-testid="hero-form-phone"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Comment"
                      rows={4}
                      value={heroFormData.message}
                      onChange={(e) => setHeroFormData({...heroFormData, message: e.target.value})}
                      className="bg-white/20 border-white/30 placeholder:text-white/80 text-white focus:ring-accent focus:border-transparent resize-none"
                      data-testid="hero-form-message"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-accent text-accent-foreground py-3 font-semibold hover:bg-accent/90 transition-colors"
                    disabled={contactMutation.isPending}
                    data-testid="hero-form-submit"
                  >
                    {contactMutation.isPending ? "Submitting..." : "Request Appointment"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="services-title">
              Our Most Popular Services
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="services-subtitle">
              Committed To Helping Our Clients Succeed
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid={`service-card-${index}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4" data-testid={`service-title-${index}`}>{service.title}</h3>
                  <p className="text-muted-foreground" data-testid={`service-description-${index}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-primary text-primary-foreground px-8 py-3 font-semibold hover:bg-primary/90 transition-colors" data-testid="services-view-all">
              View All Practice Areas
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="features-title">
              Our Strong Position And Standings
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6" data-testid={`feature-${index}`}>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4" data-testid={`feature-title-${index}`}>{feature.title}</h3>
                <p className="text-muted-foreground" data-testid={`feature-description-${index}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="cta-title">
            Skip Travel! Consult with Experts now
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="tel:+919319266200" 
              className="text-2xl font-semibold flex items-center"
              data-testid="cta-phone"
            >
              <Phone className="w-6 h-6 mr-3" />
              +91-9319-266-200
            </a>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-accent text-accent-foreground px-8 py-3 font-semibold hover:bg-accent/90 transition-colors"
              data-testid="cta-appointment"
            >
              Request Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="testimonials-title">
              What Our Clients Have To Say
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="testimonials-subtitle">
              We take pride! Not in our execution, But in your words. Here's what keeps us going strong.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border border-border" data-testid={`testimonial-${index}`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                      data-testid={`testimonial-image-${index}`}
                    />
                    <div>
                      <h4 className="text-lg font-semibold" data-testid={`testimonial-name-${index}`}>{testimonial.name}</h4>
                      <p className="text-muted-foreground" data-testid={`testimonial-role-${index}`}>{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4" data-testid={`testimonial-review-${index}`}>
                    "{testimonial.review}"
                  </p>
                  <div className="flex text-accent" data-testid={`testimonial-rating-${index}`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="companies-title">
              We Are Trusted By Leading Companies
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {trustedCompanies.map((company, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow" data-testid={`company-${index}`}>
                <CardContent className="flex items-center justify-center p-4">
                  <div className="text-lg font-bold text-muted-foreground text-center" data-testid={`company-name-${index}`}>
                    {company}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="contact-title">
                Request Appointment
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="contact-subtitle">
                Get in touch with our experts for professional consultation
              </p>
            </div>
            
            <Card data-testid="contact-form-card">
              <CardContent className="p-8">
                <form onSubmit={handleContactFormSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">Name *</Label>
                    <Input
                      id="contact-name"
                      type="text"
                      required
                      value={contactFormData.name}
                      onChange={(e) => setContactFormData({...contactFormData, name: e.target.value})}
                      className="w-full"
                      data-testid="contact-form-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      required
                      value={contactFormData.email}
                      onChange={(e) => setContactFormData({...contactFormData, email: e.target.value})}
                      className="w-full"
                      data-testid="contact-form-email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={contactFormData.phone}
                      onChange={(e) => setContactFormData({...contactFormData, phone: e.target.value})}
                      className="w-full"
                      data-testid="contact-form-phone"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">Message</Label>
                    <Textarea
                      id="contact-message"
                      rows={4}
                      value={contactFormData.message}
                      onChange={(e) => setContactFormData({...contactFormData, message: e.target.value})}
                      className="w-full resize-none"
                      data-testid="contact-form-message"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground py-3 font-semibold hover:bg-primary/90 transition-colors"
                    disabled={contactMutation.isPending}
                    data-testid="contact-form-submit"
                  >
                    {contactMutation.isPending ? "Submitting..." : "Request Appointment"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div data-testid="footer-brand">
              <div className="text-2xl font-bold mb-4">RPG Legal</div>
              <p className="text-background/80 mb-6">
                Professional legal and business consultation services to help your business grow and comply with regulations.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-background/80 hover:text-background transition-colors" data-testid="footer-facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-background/80 hover:text-background transition-colors" data-testid="footer-twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-background/80 hover:text-background transition-colors" data-testid="footer-linkedin">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-background/80 hover:text-background transition-colors" data-testid="footer-instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C3.182 14.116 2.45 12.018 2.45 9.724s.732-4.391 2.676-5.967c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c1.944 1.576 2.676 3.673 2.676 5.967s-.732 4.392-2.676 5.967c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div data-testid="footer-services">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors" data-testid="footer-service-startup">Business Startup</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors" data-testid="footer-service-ipr">IPR Services</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors" data-testid="footer-service-license">License & Registration</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors" data-testid="footer-service-gst">GST Services</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors" data-testid="footer-service-tax">Taxation & Compliance</a></li>
              </ul>
            </div>
            
            <div data-testid="footer-links">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-about">About Us</button></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-blog">Blog</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-calendar">Compliance Calendar</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-payment">Payment Mode</a></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-contact">Contact Us</button></li>
              </ul>
            </div>
            
            <div data-testid="footer-contact">
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-background/80" data-testid="footer-phone">+91-9319-266-200</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-background/80" data-testid="footer-email">info@rpglegal.co.in</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <span className="text-background/80" data-testid="footer-address">New Delhi, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-background/80" data-testid="footer-copyright">
              © 2024 RPG Legal. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
