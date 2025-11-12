"use client";
import Link from "next/link";
import Clock from "@/components/Clock";
import ThemeToggle from "@/components/ThemeToggle";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700">
      {/* Left: Navigation Links */}
      <div className="flex gap-6 text-gray-800 dark:text-gray-100 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
      </div>

      {/* Right: Clock + Theme Toggle */}
      <div className="flex items-center gap-4">
        <Clock />
      </div>
    </nav>
  );
}
