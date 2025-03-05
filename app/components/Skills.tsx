"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Layout, GitBranch, Terminal, Layers, Cpu, Globe, Workflow, Github } from "lucide-react"
import { SiPython, SiHtml5, SiCss3, SiJavascript, SiC, SiGnubash, SiLua, SiRacket, SiLinux, SiArchlinux, SiDebian, SiVmware, SiVirtualbox, SiNeovim, SiPycharm, SiWireshark } from "react-icons/si"
import { FaJava } from "react-icons/fa";

import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

import { BiLogoVisualStudio } from "react-icons/bi";

import AnimatedSectionHeader from "./AnimatedSectionHeader"

const SkillIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <div className={"p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg mb-2"}>
    <Icon className={"w-6 h-6 ${color}"} />
  </div>
)

const languages = [
  {
    icon: SiPython,
    name: "Python",
    color: "text-green-500",
  },
  {
    icon: FaJava,
    name: "Java",
    color: "text-red-500",
  },
  {
    icon: SiHtml5,
    name: "HTML",
    color: "text-orange-500",
  },
  {
    icon: SiCss3,
    name: "CSS",
    color: "text-blue-500",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    color: "text-yellow-500",
  },
  {
    icon: SiC,
    name: "C",
    color: "text-blue-500",
  },
  {
    icon: SiGnubash,
    name: "Bash",
    color: "text-gray-500",
  },
  {
    icon: SiLua,
    name: "Lua",
    color: "text-blue-500",
  },
  {
    icon: SiRacket,
    name: "Racket",
    color: "text-red-500",
  },
]

const tools = [
  {
    icon: SiLinux,
    name: "Linux",
    color: "text-yellow-500",
  },
  {
    icon: SiArchlinux,
    name: "Arch Linux",
    color: "text-blue-500",
  },
  {
    icon: SiDebian,
    name: "Debian",
    color: "text-red-500",
  },
  {
    icon: SiVmware,
    name: "VMware",
    color: "text-blue-500",
  },
  {
    icon: SiVirtualbox ,
    name: "VirtualBox ",
    color: "text-blue-500",
  },
  {
    icon: SiNeovim,
    name: "Neovim",
    color: "text-green-500",
  },
  {
    icon: BiLogoVisualStudio,
    name: "VS Code",
    color: "text-blue-500",
  },
  {
    icon: SiPycharm,
    name: "PyCharm",
    color: "text-green-500",
  },
  {
    icon: Github,
    name: "GitHub",
    color: "text-black",
  },
  {
    icon: GitBranch,
    name: "Git",
    color: "text-orange-500",
  },
  {
    icon: SiWireshark,
    name: "Wireshark",
    color: "text-blue-500",
  },
  {
    icon: PiMicrosoftExcelLogoFill,
    name: "Excel",
    color: "text-green-500",
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

