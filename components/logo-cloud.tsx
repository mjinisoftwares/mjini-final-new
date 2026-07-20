"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";
import Link from "next/link";

export default function LogoCloud() {
  return (
    <section className="bg-background/5 overflow-hidden py-16 shadow-md border-t">
      <div className="group relative m-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center md:flex-row">
          {/* Title Section */}
          <div className="md:max-w-44 md:border-r md:pr-6 mt-6 md:mb-6">
            <p className="text-end text-lg text-secondary-foreground/90 dark:text-secondary-foreground/90 md:mb-0 md:text-lg font-semibold">
              Brands & Companies We&apos;ve Worked With
            </p>
          </div>

          {/* Logos Section */}
          <div className="relative py-4 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={80}>
              {logos.map((logo, index) => (
                <Link
                  key={index}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center mb-2 group cursor-pointer"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      className="mx-auto h-12 md:h-16 w-auto object-contain dark:brightness-90 transition-transform duration-500 group-hover:scale-110"
                      src={logo.src}
                      alt={logo.alt}
                      height={60}
                      width={160}
                      //cover fit
                      style={{ objectFit: "contain" }}
                      
                    />
                  </div>
                  <span className="mt-4 text-sm md:text-base font-semibold text-foreground/80 dark:text-secondary-foreground/90 hover:text-primary/70 group-hover:text-primary transition-colors duration-300">
                    {logo.name}
                  </span>
                </Link>
              ))}
            </InfiniteSlider>

            {/* Gradient Fades + Blur */}
            <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ✅ Companies We've Worked With
const logos = [
  {
    src: "/joric-builders-logo.jpeg",
    alt: "Joric Builders",
    name: "Joric Builders",
    link: "https://joricbuilders.co.ke/",
  },
  {
    src: "/Konnect.webp",
    alt: "Konnected Data Networks",
    name: "Konnect Data Networks",
    link: "https://www.konnected.co.ke/",
  },
  {
    src: "/linksys.png",
    alt: "Linksys ISP Molo",
    name: "Linksys ISP Molo",
    link: "https://linksysfiber.ke/",
  },
  {
    src: "/rift-view-logo.png",
    alt: "Rift View Specialist Center",
    name: "Rift View Specialist Center",
    link: "https://riftviewspecialistcentre.co.ke/",
  },
  {
    src: "/the-dentist-ltd-logo.png",
    alt: "The Dentist LTD",
    name: "The Dentist LTD",
    link: "https://www.thedentistltd.co.ke/",
  },
    {
    src: "/ubuntu.png",
    alt: "Ubuntu Logistics",
    name: "Ubuntu Logistics",
    link: "https://www.ubuntulogistics.co.ke/",
  },
];
