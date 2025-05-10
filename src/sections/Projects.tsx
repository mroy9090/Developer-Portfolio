import eventmanagement from "@/assets/images/event.png";
import tohoney from "@/assets/images/tohoney.png";
import omniconnect from "@/assets/images/omni_connect.png";
import shredded from "@/assets/images/shreded.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from '@/assets/images/grain.jpg';
import { Card } from '@/components/Card';

const portfolioProjects = [
  {
    year: "2025",
    client: "OLLYO",
    title: "Event Management System",
    results: [
      { title: "Secure User Login and Registration " },
      { title: "Role-Based Access Control" },
      { title: "Online Event Registration" },
      { title: "Displayed pagination,sortable and filterable." },
      { title: "Download Attendee List." },
      { title: "PHP,Javascript, Bootstrap, MySQL" },
    ],
    link: "https://ollyoevent.shreddedfitness.xyz/",
    source: "https://github.com/mroy9090/Event-Management-System.git",
    image: eventmanagement,
  },
  {
    year: "2024",
    client: "TOHONEY",
    title: "Tohoney Ecommerce Platform",
    results: [
      { title: "Manage orders, payment and order fulfillment." },
      { title: "Manage user authentication and authorization." },
      { title: "Monitor inventory, alert on low stock" },
      { title: "SEO optimization for site content" },
      { title: "PHP, Laravel, DOMPDF, Javascript, MySQL." },
    ],
    link: "https://github.com/mroy9090/Tohoney-E-Commerce-Platform.git",
    source: "https://github.com/mroy9090/Tohoney-E-Commerce-Platform.git",
    image: tohoney,
  },
  {
    year: "2025",
    client: "OMNI",
    title: "Omniconnect",
    results: [
      { title: "Real-time Device Monitoring" },
      { title: "Configuration Management" },
      { title: "Centralized Dashboard" },
      { title: "Automated Network Configuration" },
      { title: "Python, Django, Ansible, Vendors" },
    ],
    link: "https://github.com/mroy9090/Developing-an-Integrated-Platform-for-Different-Network-Devices.git",
    source: "https://github.com/mroy9090/Developing-an-Integrated-Platform-for-Different-Network-Devices.git",
    image: omniconnect,
  },
  {
    year: "2025",
    client: "Shredded Fitness",
    title: "Shredded Fitness",
    results: [
      { title: "Authentication & Membership" },
      { title: "Class Scheduling System" },
      { title: "Trainer Profile Management" },
      { title: "Personalized Fitness Plans" },
      { title: "PHP, Laravel, DOMPDF, MySQL,Laravel Breeze" },
    ],
    link: "https://shreddedfitness.xyz/",
    source: "https://github.com/mroy9090/Shreded-Fitness.git",
    image: shredded,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="project">
      <div className="container max-w-3xl mx-auto">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-World Results
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl ">Featured Projects</h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
          A collection of projects demonstrating my expertise in web development, featuring clean, efficient code and intuitive user interfaces that drive user engagement and performance.
        </p>

        <div className="flex flex-col mt-10 gap-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="bg-gray-800 rounded-3xl z-0 p-10 md:pt-12 md:px-10 border border-white/10 shadow-lg after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 after:pointer-events-none lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              {/* Fix: position relative added to support grain background */}
              <div
                className="inset-0 -z-0 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                  backgroundSize: "cover",
                }}
              ></div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16 relative z-10">
                <div>
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm text-white/50 md:text-base">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 relative">
                    <a href={project.link} rel="noopener noreferrer">
                      <button className="inline-flex items-center gap-2 border border-white/15 p-6 h-12 md:h-14 rounded-xl ">
                        <span>View Live</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                    <a href={project.source} rel="noopener noreferrer">
                      <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 p-6 h-12 rounded-xl font-semibold">
                        <span>💻</span>
                        <span>Souce Code</span>
                      </button>

                    </a>
                  </div>
                 

                  {/* <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a> */}
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-6 rounded-xl -mb-4 md:mb-0 lg:mt-20 lg:absolute lg:h-full lg:max-w-none p-0"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

