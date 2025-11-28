import { Heart } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="YuqueSync"
                  width={36}
                  height={36}
                  className="object-contain rounded-lg"
                />
              </div>
              <span className="font-bold">YuqueSync</span>
            </div>
            <p className="text-sm text-muted-foreground">
              语雀文档本地同步工具
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">文档</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#getting-started"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  快速开始
                </a>
              </li>
              <li>
                <a
                  href="#config"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  配置说明
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">社区</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/deadmau5v/YuqueSync"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/deadmau5v/YuqueSync/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  问题反馈
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/deadmau5v/YuqueSync?tab=readme-ov-file#-%E8%B4%A1%E7%8C%AE%E6%8C%87%E5%8D%97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  贡献指南
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by{" "}
            <a
              href="https://d5v.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition"
            >
              deadmau5v
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 YuqueSync. Open Source Software
          </p>
        </div>
      </div>
    </footer>
  );
}
