import { Github, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.nameEn}. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
