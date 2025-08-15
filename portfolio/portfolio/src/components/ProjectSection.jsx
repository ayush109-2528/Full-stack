import { ArrowRight, ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "AQI Prediction",
    description: "Designed and implemented a machine learning model to forecast India’s Air Quality Index using historical environmental data. This project transforms raw data into interactive, easy-to-understand visual insights, helping raise awareness about pollution levels and promoting informed decision-making for healthier living.",
    image: "/projects/project1.png",
    tags: ["Python", "AI/ML", "Jupyter Notebool"],
    demoUrl: "https://github.com/ayush109-2528/AQI_prediction",
    githubUrl: "https://github.com/ayush109-2528/AQI_prediction",
  },
  {
    id: 2,
    title: "Full Stack web development bootcamp",
    description:
      "Learned React, Node.js, Express, MongoDB, and Tailwind CSS by building real-world projects with authentication, security, and deployment.",
    image: "/projects/project2.png",
    tags: ["React","HTML/CSS","JavaScript", "Node.js", "Express.js","JQuery","PostgSQl","SQL",],
    demoUrl: "https://github.com/ayush109-2528/Full-stack",
    githubUrl: "https://github.com/ayush109-2528/Full-stack",
  },
  {
    id: 3,
    title: "E-commerce site",
    description:
      "Built a fully responsive online flower shop using only HTML, CSS, and JavaScript, focusing on simplicity, speed, and user-friendly design. The site features beautiful product displays, category-based browsing, and an interactive cart system without relying on external frameworks. Designed with clean layouts, smooth animations, and optimized performance to provide an enjoyable and seamless shopping experience.",
    image: "/projects/project3.png",
    tags: ["HTML", "JavaScript", "CSS"],
    demoUrl: "https://ayush109-2528.github.io/ecommerce-site/",
    githubUrl: "https://github.com/ayush109-2528/ecommerce-site",
  },
  {
    id: 4,
    title: "Weather Report",
    description:
      "Designed and developed a personal portfolio website using HTML, CSS, and JavaScript to showcase my projects, skills, and achievements. The site features a clean, responsive design for seamless viewing across devices, smooth navigation, and interactive elements to engage visitors. Built to reflect my creativity and technical abilities, the portfolio serves as a central hub for recruiters and collaborators to connect with me.",
    image: "/projects/project4.png",
    tags: ["HTML", "JavaScript", "CSS","API"],
    demoUrl: "https://ayush109-2528.github.io/weather-report/",
    githubUrl: "https://github.com/ayush109-2528/weather-report",
  },
  {
    id: 5,
    title: "Keeper App",
    description:
      "A simple and intuitive note-taking web application built using HTML, CSS, and JavaScript. Designed to let users quickly add, view, and delete notes, the Keeper App focuses on a clean interface and smooth user experience. It’s lightweight, responsive, and perfect for organizing thoughts, to-dos, and reminders in one place.",
    image: "/projects/project5.png",
    tags: ["React", "Node.js", "HTML/CSS", "Express"],
    demoUrl: "https://github.com/ayush109-2528/Full-stack/tree/main/react/Keeper-App",
    githubUrl: "https://github.com/ayush109-2528/Full-stack/tree/main/react/Keeper-App",
  },
];

export const ProjectSection = () =>{
    return (
        <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ayush109-2528"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
    )
}