"use client";

import { motion } from "framer-motion";
import { Github, Mail, FileText } from "lucide-react";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-primary sm:text-base">
            안녕하세요, 저는
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          {profile.name}
          <span className="text-muted-foreground">.</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2 text-2xl font-semibold text-muted-foreground sm:text-3xl lg:text-4xl"
        >
          {profile.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <Mail size={16} />
            Contact
          </a>
          {profile.blog && (
            <a
              href={profile.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <FileText size={16} />
              Blog
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
