import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { personalInfo } from "../constants/data"

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <p className="text-xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Sakshi<span className="text-cyan-400">.</span>
        </p>

        {/* Credit */}
        <p className="text-slate-500 text-sm text-center">
          Designed & Built by{" "}
          <span className="text-cyan-400 font-medium">Sakshi Nagre</span>{" "}
          © {new Date().getFullYear()}
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          <a href={personalInfo.github} target="_blank" rel="noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
            <FiGithub size={20} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
            <FiLinkedin size={20} />
          </a>
          <a href={`mailto:${personalInfo.email}`}
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
            <FiMail size={20} />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer