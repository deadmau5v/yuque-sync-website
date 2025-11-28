"use client";

import { Button } from "@/components/ui/button";
import { Download, Terminal, Monitor, Apple, Server } from "lucide-react";
import { useEffect, useState } from "react";

const codeLines = [
  {
    prefix: "→",
    text: "docker run -d --name yuque-sync \\",
    color: "text-cyan-400",
  },
  {
    prefix: " ",
    text: '  -e YUQUE_TOKEN="********" \\',
    color: "text-muted-foreground",
  },
  {
    prefix: " ",
    text: '  -e YUQUE_SESSION="********" \\',
    color: "text-muted-foreground",
  },
  { prefix: " ", text: "  -v /data:/data \\", color: "text-muted-foreground" },
  { prefix: " ", text: "  ghcr.io/deadmau5v/YuqueSync:v1.0.0", color: "text-muted-foreground" },
  {
    prefix: "#",
    text: " Initializing sync process...",
    color: "text-zinc-500",
  },
  {
    prefix: "✓",
    text: " Successfully connected to Yuque API",
    color: "text-primary",
  },
  { prefix: "✓", text: " Found 3 Knowledge Bases", color: "text-primary" },
  {
    prefix: "i",
    text: ' Syncing "Personal Wiki" (1/3)...',
    color: "text-blue-400",
  },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          clearInterval(lineTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(lineTimer);
  }, []);

  useEffect(() => {
    if (visibleLines >= codeLines.length) {
      const progressTimer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressTimer);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(progressTimer);
    }
  }, [visibleLines]);

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative min-h-[90vh] flex items-center">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/3 to-transparent rounded-full" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Version badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-primary font-medium">
                v2.0 现已发布
              </span>
            </div>

            {/* Main heading - larger */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="text-foreground">语雀文档</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  本地同步工具
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
              YuqueSync
              是一款跨平台的语雀文档同步工具。支持实时监控、多格式导出、知识库完整备份，确保您的知识资产安全无忧。
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://github.com/deadmau5v/YuqueSync/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-7 text-lg gap-3 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.02]"
                >
                  <Terminal className="w-5 h-5" />
                  Docker 部署
                </Button>
              </a>
            </div>

            {/* Platform support */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Apple className="w-4 h-4" />
                <span>macOS</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Monitor className="w-4 h-4" />
                <span>Windows</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Server className="w-4 h-4" />
                <span>Linux</span>
              </div>
            </div>
          </div>

          {/* Right visual - animated terminal */}
          <div className="relative hidden lg:block">
            {/* Glow effect behind terminal */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-2xl blur-2xl" />
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-transparent rounded-xl" />

            {/* Terminal window */}
            <div className="relative terminal-glow rounded-xl overflow-hidden border border-primary/20 bg-[#0d1117]">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-primary/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27ca40]"></div>
                </div>
                <div className="text-xs text-muted-foreground font-mono">
                  yuque-sync — bash — 80x24
                </div>
              </div>

              {/* Terminal content */}
              <div className="p-5 font-mono text-sm space-y-1 min-h-[280px]">
                {codeLines.slice(0, visibleLines).map((line, index) => (
                  <div
                    key={index}
                    className={`${line.color} flex items-start gap-2 animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span
                      className={
                        line.prefix === "✓"
                          ? "text-primary"
                          : line.prefix === "i"
                          ? "text-blue-400"
                          : "text-primary"
                      }
                    >
                      {line.prefix}
                    </span>
                    <span>{line.text}</span>
                  </div>
                ))}

                {/* Cursor blink */}
                {visibleLines < codeLines.length && (
                  <span className="inline-block w-2 h-4 bg-primary animate-blink ml-4"></span>
                )}
              </div>

              {/* Progress bar */}
              {visibleLines >= codeLines.length && (
                <div className="px-5 pb-4">
                  <div className="h-1.5 bg-[#1c2128] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full transition-all duration-100 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
