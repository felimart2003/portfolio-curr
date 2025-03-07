"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am currently a student at the University of Waterloo (Ontario, Canada) enrolled in
              Bachelor of Mathematics. I am looking for a coop position for
              Summer 2025.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I have a strong passion for programming. I also love to play soccer, chess <a href="https://lichess.org/@/TheProChessMaster">online</a>,
              read, <a href="https://letterboxd.com/felimart">watch movies</a> and TV shows with friends! I enjoy listening to <a href="https://spoti.fi/3EJp9ZD">music</a>, playing piano, weightlifting, rock-climbing, testing fragrances, photography, no-stakes poker, <a href="https://vsco.co/fmart3/gallery">photography</a>, and YouTube.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I am keen to learn new things and apply what I know and I am excited to bring my passion for technology and problem-solving to a team.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <Image
                src="/f_about2.jpg"
                alt="Felipe picture"
                width={300}
                height={300}
                className="rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative background"
          width={256}
          height={256}
        />
      </div>
    </section>
  );
}
