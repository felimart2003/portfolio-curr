"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Layout, GitBranch, Terminal, Layers, Cpu, Globe, Workflow, Github } from "lucide-react"
import { SiPython } from "react-icons/si"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const SkillIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg mb-2`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
)

const languages = [
  {
    icon: Code,
    name: "Frontend Development",
    color: "text-blue-500",
  },
  {
    icon: Terminal,
    name: "TypeScript",
    color: "text-yellow-500",
  },
  {
    icon: Cpu,
    name: "API Development",
    color: "text-red-500",
  },
  {
    icon: Globe,
    name: "Web Performance",
    color: "text-teal-500",
  },
  {
    icon: SiPython,
    name: "Python Development",
    color: "text-green-500",
  },
]

const tools = [
  {
    icon: Server,
    name: "Backend Development",
    color: "text-green-500",
  },
  {
    icon: Database,
    name: "Database Management",
    color: "text-purple-500",
  },
  {
    icon: Layout,
    name: "UI/UX Design",
    color: "text-pink-500",
  },
  {
    icon: GitBranch,
    name: "Version Control",
    color: "text-orange-500",
  },
  {
    icon: Layers,
    name: "State Management",
    color: "text-indigo-500",
  },
  {
    icon: Workflow,
    name: "Agile Methodologies",
    color: "text-cyan-500",
  },
  {
    icon: Github,
    name: "GitHub",
    color: "text-black",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      {/* Skill Illustrations */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Skills" />
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold dark:text-white mb-6">Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {languages.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <h3 className="text-sm font-semibold dark:text-white text-center mt-2">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold dark:text-white mb-6">Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {tools.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <h3 className="text-sm font-semibold dark:text-white text-center mt-2">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

