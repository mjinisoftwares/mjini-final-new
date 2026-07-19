    'use client'
    import { useEffect, useState } from 'react'
    import Link from 'next/link'
    import Image from 'next/image'
    import { Button } from '@/components/ui/button'
    import { ChevronRight } from 'lucide-react'

    const images = [
      { src: '/joric-builders-website-projec.webp', alt: 'Joric Builders Website Project - Professional Website Development' },
      { src: '/rift-view-specialist-center-website-project.webp', alt: 'Rift View Specialist Center Website Project - Web Design in Nairobi' },
      { src: '/the-dentist-ltd-websie-project.webp', alt: 'The Dentist Ltd Website Project - Business Management Software' },
      { src: '/linksys-isp-website-project.webp', alt: 'Linksys ISP Website Project - SEO Services in Kenya' },
      { src: '/konnect-data-networks-website-project.webp', alt: 'Konnect Data Networks Website Project - Mobile Applications' },
    ]

    export default function HeroSectionOne() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length)
        }, 3500)

        return () => clearInterval(interval)
    }, [])

    const previous = () =>
        setCurrent((prev) => (prev - 1 + images.length) % images.length)

    const next = () =>
        setCurrent((prev) => (prev + 1) % images.length)

    return (
        <main className="overflow-hidden bg-background">
        <section className="relative mt-12 z-10">
            {/* Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-0 top-0  rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 right-0  rounded-full bg-secondary/10 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16">
            <div className="grid items-center gap-20 lg:grid-cols-2">
                {/* LEFT */}
                <div>
                <span className="mt-20 md:mt-0 mb-6 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    Nairobi&apos;s Gold Standard in Website Development 
                </span>

                <h1 className="text-4xl lg:text-5xl font-bold leading-tight ">
                    Website Developers in Nairobi, Kenya
                </h1>

                <p className="mt-6 max-w-xl text-muted-foreground">
                   We build professional websites for businesses in Nairobi, Kenya. Our services include web design, website development, SEO,  mobile applications, business management software, school management software and many more.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <Button size="lg" asChild className="">
                    <Link href="/services">
                        Our Services
                        <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                    </Button>

                    <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className=""
                    >
                    <Link href="/projects">
                        <ChevronRight className="mr-2 h-5 w-5 fill-primary/20" />
                        Our Projects
                    </Link>
                    </Button>
                </div>

                </div>

                {/* RIGHT */}
                <div className="relative flex  items-center justify-center">
                {/* Decorative Circle */}
                <div className="absolute rounded-full bg-primary/5 blur-xl" />

                {/* Overlapping Cards */}
                <div className="relative h-[560px] w-full  max-w-xl">
                    {images.map((image, index) => {
                    const offset =
                        (index - current + images.length) % images.length

                    let styles = ''

                    switch (offset) {
                        case 0:
                        styles =
                            'translate-x-0 scale-100 rotate-0 opacity-100 z-30'
                        break

                        case 1:
                        styles =
                            'translate-x-32 scale-90 rotate-6 opacity-60 z-20'
                        break

                        case 2:
                        styles =
                            'translate-x-52 scale-80 rotate-12 opacity-20 z-10'
                        break

                        case 3:
                        styles =
                            '-translate-x-32 scale-90 -rotate-6 opacity-60 z-20'
                        break

                        default:
                        styles = 'hidden'
                    }

                    return (
                        <div
                        key={index}
                        className={`absolute left-[2%] md:left-[10%] top-[40%] md:top-1/2 h-[500px] w-[340px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border bg-white shadow-2xl transition-all duration-700 ease-in-out ${styles}`}
                        >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            priority={index === current}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                        </div>
                    )
                    })}

               
                </div>
                </div>
            </div>
            </div>
        </section>
        </main>
    )
    }