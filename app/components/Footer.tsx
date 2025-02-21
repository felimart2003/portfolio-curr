import React from "react";
import { GithubIcon as GitHub, Linkedin, Mail, ArrowDown } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>
          Copyright &copy; {new Date().getFullYear()} Felipe Martinez. All
          Rights Reserved.
        </p>
        <p>
          <a
            href="https://github.com/felimart2003"
            className=""
          >
            GitHub
            <GitHub className="inline-block w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/fmartinez03-"
            className=""
          >
            LinkedIn
            <Linkedin className="inline-block w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>{" "}
          |{" "}
          <a
            href="mailto:felimart2003@gmail.com"
            className=""
          >
            Email{" "}
            <Mail className="inline-block w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
