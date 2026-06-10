import { motion } from "framer-motion"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from "react-icons/fi"
import { personalInfo } from "../constants/data"

const contactLinks = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "sakshinagre49@gmail.com",
    href: `mailto:sakshinagre49@gmail.com`,
    color: "group-hover:text-cyan-400 group-hover:border-cyan-500",
    bg: "group-hover:bg-cyan-500/10",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/sakshinagre",
    href: "https://linkedin.com/in/sakshinagre",
    color: "group-hover:text-blue-400 group-hover:border-blue-500",
    bg: "group-hover:bg-blue-500/10",
  },
  {
    icon: <FiGithub size={20} />,
    label: "GitHub",
    value: "github.com/Sakshi3456",
    href: "https://github.com/Sakshi3456",
    color: "group-hover:text-purple-400 group-hover:border-purple-500",
    bg: "group-hover:bg-purple-500/10",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "Pune, Maharashtra",
    href: null,
    color: "group-hover:text-green-400 group-hover:border-green-500",
    bg: "group-hover:bg-green-500/10",
  },
]

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState(null)
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("sending")
    emailjs.send(
      "service_s2q88fo",
      "template_3q1z61h",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        name: form.name,
        time: new Date().toLocaleString(),
      },
      "Qqj1Wif6lOIwdZVcU"
    ).then(() => {
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    }).catch(() => setStatus("error"))
  }

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Section Title — centered */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-cyan-400 font-medium mb-2 tracking-widest text-sm uppercase">Get in touch</p>
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              Contact Me
            </motion.h2>
          </div>
          <motion.div
            className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mt-4 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="text-slate-400 mt-4 max-w-md mx-auto text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            I'm currently open to entry-level opportunities. Have a question or just want to say hi? My inbox is always open!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left — Contact cards */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Big availability badge */}
            <motion.div
              className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 mb-2 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-green-400 font-medium text-sm">Available for work</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Looking for entry-level Software Developer roles. Open to full-time, contract, or internship opportunities across India.
              </p>
            </motion.div>

            {/* Contact links */}
            {contactLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`group flex items-center gap-4 p-4 rounded-xl border border-slate-700 bg-slate-800/40 transition-all duration-300 ${link.bg}`}
                  >
                    <div className={`w-10 h-10 rounded-lg border border-slate-600 flex items-center justify-center text-slate-400 transition-all duration-300 ${link.color}`}>
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{link.label}</p>
                      <p className={`text-sm text-slate-300 transition-colors duration-300 ${link.color.split(" ")[0]}`}>
                        {link.value}
                      </p>
                    </div>
                    {link.href.startsWith("http") && (
                      <span className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors duration-300 text-xs">↗</span>
                    )}
                  </a>
                ) : (
                  <div className={`group flex items-center gap-4 p-4 rounded-xl border border-slate-700 bg-slate-800/40 transition-all duration-300 ${link.bg}`}>
                    <div className={`w-10 h-10 rounded-lg border border-slate-600 flex items-center justify-center text-slate-400 transition-all duration-300 ${link.color}`}>
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{link.label}</p>
                      <p className="text-sm text-slate-300">{link.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Card glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-xl font-semibold text-white mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}>
              Send a Message
            </h3>

            <div className="flex flex-col gap-4">

              {/* Name */}
              <div className="relative">
                <motion.label
                  className={`absolute left-4 transition-all duration-200 pointer-events-none text-sm ${
                    focused === "name" || form.name
                      ? "-top-2 text-xs text-cyan-400 bg-slate-800 px-1"
                      : "top-3.5 text-slate-500"
                  }`}
                >
                  Your Name
                </motion.label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-slate-900/60 border border-slate-600 rounded-xl px-4 pt-4 pb-2 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-cyan-500 rounded-full"
                  animate={{ width: focused === "name" ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <motion.label
                  className={`absolute left-4 transition-all duration-200 pointer-events-none text-sm ${
                    focused === "email" || form.email
                      ? "-top-2 text-xs text-cyan-400 bg-slate-800 px-1"
                      : "top-3.5 text-slate-500"
                  }`}
                >
                  Your Email
                </motion.label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-slate-900/60 border border-slate-600 rounded-xl px-4 pt-4 pb-2 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-cyan-500 rounded-full"
                  animate={{ width: focused === "email" ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Message */}
              <div className="relative">
                <motion.label
                  className={`absolute left-4 transition-all duration-200 pointer-events-none text-sm ${
                    focused === "message" || form.message
                      ? "-top-2 text-xs text-cyan-400 bg-slate-800 px-1"
                      : "top-3.5 text-slate-500"
                  }`}
                >
                  Your Message
                </motion.label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-slate-900/60 border border-slate-600 rounded-xl px-4 pt-4 pb-2 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors duration-300 resize-none"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-cyan-500 rounded-full"
                  animate={{ width: focused === "message" ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Submit */}
              <motion.button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 disabled:from-slate-600 disabled:to-slate-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(6,182,212,0.3)" }}
                whileTap={{ scale: 0.97 }}
              >
                {status === "sending" ? (
                  <>
                    <motion.div
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </motion.button>

              {status === "success" && (
                <motion.p
                  className="text-green-400 text-sm text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✅ Message sent! I'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  className="text-red-400 text-sm text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ❌ Something went wrong. Email me directly!
                </motion.p>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact