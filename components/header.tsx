"use client"

import Link from "next/link"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <Image src="/logo.png" alt="YuqueSync" width={36} height={36} className="object-contain rounded-lg" />
          </div>
          <span className="font-bold text-lg">YuqueSync</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            特性
          </Link>
          <Link
            href="#getting-started"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            使用指南
          </Link>
          <Link
            href="#config"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            配置
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/deadmau5v/YuqueSync"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  )
}
