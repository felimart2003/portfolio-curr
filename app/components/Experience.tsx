"use client"

import { Briefcase, Calendar, MapPin, Globe, Building } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [
    {
      company: "Lynxfield",
      location: "Remote",
      period: "Jan 2024 - Present",
      role: "Technical Support Engineer",
      responsibilities: [
        "Remotely accessed Lynxfield devices to reprogram them, addressing and resolving typically under 6 hours",
        "Developed a Bash script to automate an important daily task, saving up to 38% of task time",
        "Performed data entry tasks directly on Lynxfield’s online portals, generating 30+ page reports containing detailed driver performance and statistics for clients",
        "Cross-referenced data with clients achieving 98.7% accuracy across 250+ instances",
        "Tested a pre-release Flutter app to improve functionality and user experience",
      ],
    },
    {
      company: "Self-Employed",
      location: "Belleville, ON, CA",
      period: "May 2024 - Present",
      role: "Math Tutor",
      responsibilities: [
        "Delivered focused 1-on-1 tutoring sessions on a scheduled basis",
        "Provided intuition and problem-solving techniques",
        "Clients achieved 95%+ grades on IB tests and other satisfactory results",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Work Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  {exp.company === "Remote" ? <Globe className="w-6 h-6 mr-2 text-blue-500" /> : null}
                  {exp.role}
                </h3>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  {exp.company}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

