"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiChakraui,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiNestjs,
  SiGraphql,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiNginx,
  SiGithubactions,
  SiGitlab,
  SiJenkins,
  SiCircleci,
  SiTravisci,
  SiGoogleanalytics,
  SiMailchimp,
  SiHubspot,
  SiSemrush,
  SiNotion,
  SiSlack,
  SiTrello,
  SiAsana,

  SiFigma,
  SiFramer,
  SiAdobexd,
  SiSketch,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiCanva
} from "react-icons/si";

type ItemType = {
  name: string;
  icon: React.ReactNode;
};

type CategoryProps = {
  title: string;
  desc: string;
  items: ItemType[];
};

export default function TechnologyPage() {
  return (
    <div className="w-full py-20 bg-[#f5f8fb]">

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h3 className="text-[#e28c39] font-semibold tracking-wide">
          Technology
        </h3>

        <h1 className="text-4xl md:text-5xl font-bold text-[#142d54] mt-3">
          Our Full Technology <span className="text-[#e28c39]">Stack</span>
        </h1>

        <p className="text-gray-600 mt-4">
          Explore the complete ecosystem powering our powerful, scalable and modern digital products.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-24 px-6">

        {/* Development */}
        <AnimatedCategory
          title="Frontend Development"
          desc="Modern UI/UX frameworks and libraries to build fast, responsive and interactive user interfaces."
          items={[
            { name: "HTML5", icon: <SiHtml5 size={28} /> },
            { name: "CSS3", icon: <SiCss3 size={28} /> },
            { name: "JavaScript", icon: <SiJavascript size={28} /> },
            { name: "TypeScript", icon: <SiTypescript size={28} /> },
            { name: "React.js", icon: <SiReact size={28} /> },
            { name: "Next.js", icon: <SiNextdotjs size={28} /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
            { name: "Chakra UI", icon: <SiChakraui size={28} /> },
          ]}
        />

        <AnimatedCategory
          title="Backend Development"
          desc="Reliable backend architectures using strong frameworks and runtime environments."
          items={[
            { name: "Node.js", icon: <SiNodedotjs size={28} /> },
            { name: "Express.js", icon: <SiExpress size={28} /> },
            { name: "Python", icon: <SiPython size={28} /> },
            { name: "Django", icon: <SiDjango size={28} /> },
            { name: "NestJS", icon: <SiNestjs size={28} /> },
            { name: "GraphQL", icon: <SiGraphql size={28} /> },
            { name: "Prisma", icon: <SiPrisma size={28} /> },
          ]}
        />

        {/* Infrastructure & Operations */}
        <AnimatedCategory
          title="Databases"
          desc="Powerful and secure data storage technologies for scalable applications."
          items={[
            { name: "MongoDB", icon: <SiMongodb size={28} /> },
            { name: "PostgreSQL", icon: <SiPostgresql size={28} /> },
            { name: "MySQL", icon: <SiMysql size={28} /> },
            { name: "Redis", icon: <SiRedis size={28} /> },
          ]}
        />

        <AnimatedCategory
          title="DevOps & Infrastructure"
          desc="Deployment, containerization, orchestration and server management."
          items={[
            { name: "Docker", icon: <SiDocker size={28} /> },
            { name: "Kubernetes", icon: <SiKubernetes size={28} /> },
            { name: "Linux", icon: <SiLinux size={28} /> },
            { name: "Nginx", icon: <SiNginx size={28} /> },
           
          ]}
        />

        <AnimatedCategory
          title="CI/CD Pipelines"
          desc="Continuous integration & deployment automation tools for smooth development."
          items={[
            { name: "GitHub Actions", icon: <SiGithubactions size={28} /> },
            { name: "GitLab CI", icon: <SiGitlab size={28} /> },
            { name: "Jenkins", icon: <SiJenkins size={28} /> },
            { name: "CircleCI", icon: <SiCircleci size={28} /> },
            { name: "Travis CI", icon: <SiTravisci size={28} /> },
          ]}
        />

        {/* Marketing & Business */}
        <AnimatedCategory
          title="Digital Marketing Tools"
          desc="Powerful tools to analyze, automate, and optimize your marketing strategies."
          items={[
            { name: "Google Analytics", icon: <SiGoogleanalytics size={28} /> },
            { name: "Mailchimp", icon: <SiMailchimp size={28} /> },
            { name: "HubSpot", icon: <SiHubspot size={28} /> },
            { name: "SEMRush", icon: <SiSemrush size={28} /> },
          ]}
        />

        <AnimatedCategory
          title="Business Tools"
          desc="Collaboration and productivity tools to manage teams and projects efficiently."
          items={[
            { name: "Notion", icon: <SiNotion size={28} /> },
            { name: "Slack", icon: <SiSlack size={28} /> },
            { name: "Trello", icon: <SiTrello size={28} /> },
            { name: "Asana", icon: <SiAsana size={28} /> },
          ]}
        />

        {/* Design */}
        <AnimatedCategory
          title="UI/UX Design"
          desc="Design tools to create intuitive and visually appealing user experiences."
          items={[
            { name: "Figma", icon: <SiFigma size={28} /> },
            { name: "Framer", icon: <SiFramer size={28} /> },
            { name: "Adobe XD", icon: <SiAdobexd size={28} /> },
            { name: "Sketch", icon: <SiSketch size={28} /> },
          ]}
        />

        <AnimatedCategory
          title="Branding"
          desc="Creative tools for logos, graphics, and brand identity design."
          items={[
            { name: "Illustrator", icon: <SiAdobeillustrator size={28} /> },
            { name: "Photoshop", icon: <SiAdobephotoshop size={28} /> },
            { name: "Canva", icon: <SiCanva size={28} /> },
          ]}
        />

      </div>
    </div>
  );
}

/* --------------------------------------------
   REUSABLE CATEGORY COMPONENT (ANIMATED)
--------------------------------------------- */
function AnimatedCategory({ title, desc, items }: CategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 gap-10 items-start"
    >
      {/* LEFT SECTION */}
      <div>
        <h2 className="text-3xl font-bold text-[#142d54]">{title}</h2>
        <p className="text-gray-600 mt-3 max-w-md">{desc}</p>
      </div>

      {/* RIGHT ICON GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            className="flex flex-col items-center bg-[#142d54] text-white p-5 rounded-xl 
                       shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-white">{item.icon}</div>
            <span className="mt-3 font-medium text-sm text-center">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
