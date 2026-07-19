import AboutSection from "@/components/about";
import CallToAction from "@/components/call-to-action";
import ContactSection from "@/components/contact";
import ContentSection3 from "@/components/content-3";
import ContentSection4 from "@/components/content-4";
import FacebookReviews from "@/components/FacebookReviews";
import FAQsThree from "@/components/FAQs";
import HeroSectionOne from "@/components/hero-section-one";
import HomeText from "@/components/HomeText";
import IntegrationsSection1 from "@/components/integrations-1";
import LogoCloud from "@/components/logo-cloud";
import Pricing from "@/components/pricing";
import Projects from "@/components/Projects";
import GoogleReviews from "@/components/Reviews";
import Services from "@/components/Services";
import TeamSection from "@/components/team";
import Websites from "@/components/websites";
import WhyChooseUs from "@/components/WhyUs";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mjini Digital",
    image: "https://mjinidigital.co.ke/mjini-logo.webp",
    description: "Nairobi's leading web developers, building modern, powerful websites and applications.",
    url: "https://mjinidigital.co.ke",
    telephone: "+254700000000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Westlands Rd, Nairobi",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi",
      addressCountry: "KE"
    }
  };

  return (
   <>
   <Script
     id="local-business-schema"
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
   />
   <HeroSectionOne/> 
   <LogoCloud />
   <AboutSection/>
   <TeamSection  /> 
   <Projects/>
   <Services/>
   <Pricing/>
   <GoogleReviews /> 
   <FacebookReviews />
   <ContentSection4/>  
   <IntegrationsSection1/>  
   <Websites />
   <ContentSection3/>      
   <WhyChooseUs/> 
   <CallToAction/>
   <FAQsThree/> 
   <HomeText /> 
   <ContactSection/> 
   </>
  );
}
