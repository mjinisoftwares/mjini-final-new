import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Victor Njau Maina",
    role: "Founder | Lead Full-Stack Developer",
    description:
      "Building scalable, high-performance digital products using modern web technologies.",
    technologies: [
      "Full-Stack Development",
      "React/Next.js",
      "Django/Python",
      "Strapi CMS/Payload CMS",
      "PostgreSQL/MySQL",
      "Convex/Supabase",
      "Odoo ERP/ ERP Next",
      "React Native",
      "WordPress",
      "Webflow",
      "UX/UI Design",
      "Figma",    
      "AI Integration"
    ],
    image: "/victor.webp",
    social: {
      facebook: "https://www.facebook.com/victor.maina.227884",
      instagram: "https://www.instagram.com/njau_maina/",

    },
  },

  {
    id: 2,
    name: "Brian Kariuki Maina",
    role: "Lead Digital Marketing Strategist",
    description:
      "Provides Expert Lead Digital Marketing Strategy, Optimization and Development expertise. 10+ Years of experience in Digital Marketing",
    technologies: [
      "SEMRUSH",
      "Ahrefs",
      "Moz",
      "Google Analytics",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "SEO",    
     "Copy Writing"
    ],
    image: "/brayo.jpeg",
    social: {
      facebook: "https://www.facebook.com/brian.maina.90",
      instagram: "https://www.instagram.com/mrbrianmaina/",
    },
  },
  

  {
    id: 3,
    name: "Wendy Makena",
    role: "Sales & Marketing Lead  ",
    description:
      "Responsible for building and maintaining customer relations, sales and  marketing strategies.",
    technologies: [
      "CRM Software",
      "Lead Generation",
      "Customer Relations",
      "Social Media Marketing",
      "SEO",
      "Content Creation",
      "Google Ads",
     "Google Business Profile",
     "Canvas",
      
    ],
    image: "/wendy.jpg",
    social: {
      facebook: "https://www.facebook.com/wendy.makena.104",
      instagram: "https://www.instagram.com/_msmakena/",
    },
  },

  {
    id: 4,
    name: "Eliud Ndegwa",
    role: "Business Development Executive",
    description:
      "Drives business growth through strategic partnerships, client acquisition, and market expansion.",
    technologies: [
      "Business Development",
      "Partnership Management",
      "Market Research",
      "Sales Strategy",
  ],
    image: "/eliud.webp",
    social: {
      facebook: "",
      instagram: "",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-24">

      {/* Background decoration */}
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />


      <div className="container relative mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-20">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="
          inline-flex 
          rounded-full 
          bg-primary/10 
          px-5 
          py-2 
          text-sm 
          font-semibold 
          uppercase 
          tracking-wider 
          text-primary
          ">
            Our Team
          </span>


          <h2 className="
          mt-5 
          text-4xl 
          font-bold 
          tracking-normal
          md:text-5xl
          leading-tight
          ">
            Meet The Leadership Team
          </h2>


          <p className="
          mt-5 
          text-lg 
          leading-relaxed 
          text-muted-foreground
          ">
          Introducing the dynamic leaders driving Mjini Digital’s success. Our team combines deep technical expertise with strategic business vision to deliver exceptional results for our clients.
          </p>

        </div>



        {/* Team Cards */}
        <div className="
        grid 
        gap-8 
        sm:grid-cols-2 
        lg:grid-cols-3
        ">

          {teamMembers.map((member)=>(
            
            <Card
              key={member.id}
              className="
              group 
              overflow-hidden 
              rounded-3xl 
              border 
              bg-background 
              shadow-sm 
              transition-all 
              duration-500 
              hover:-translate-y-3 
              hover:shadow-2xl
              "
            >


              {/* Image */}
              <div className="
              relative 
              aspect-[4/4.5]
              overflow-hidden
              ">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                  "
                />


                {/* Overlay */}
                <div className="
                absolute 
                inset-0 
                bg-gradient-to-t 
                from-black/70 
                via-black/20 
                to-transparent
                opacity-0
                transition
                duration-500
                group-hover:opacity-100
                " />


                {/* Social */}
                <div className="
                absolute
                bottom-6
                left-1/2
                flex
                -translate-x-1/2
                gap-3
                opacity-0
                transition-all
                duration-500
                group-hover:translate-y-0
                group-hover:opacity-100
                ">


                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full"
                  >
                    <FaFacebook className="h-4 w-4"/>
                  </Button>


                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full"
                  >
                    <FaLinkedin className="h-4 w-4"/>
                  </Button>


                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full"
                  >
                    <FaEnvelope className="h-4 w-4"/>
                  </Button>


                </div>


              </div>



              <CardContent className="
              p-7
              text-center
              ">

                <h3 className="
                text-2xl
                font-bold
                ">
                  {member.name}
                </h3>


                <p className="
                mt-2
                font-semibold
                text-primary
                ">
                  {member.role}
                </p>



                <div className="
                mx-auto
                my-4
                h-1
                w-14
                rounded-full
                bg-primary
                "/>


                <p className="
                text-sm
                leading-relaxed
                text-muted-foreground
                ">
                  {member.description}
                </p>



                {/* Skills */}
                <div className="
                mt-6
                flex
                flex-wrap
                justify-center
                gap-2
                ">

                  {member.technologies.map((tech)=>(
                    <span
                      key={tech}
                      className="
                      rounded-full
                      bg-muted
                      px-3
                      py-1
                      text-xs
                      font-medium
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>


              </CardContent>


            </Card>

          ))}

        </div>


      </div>

    </section>
  );
}