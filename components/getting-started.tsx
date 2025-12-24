"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

const deployMethods = [
  {
    id: "docker",
    label: "Docker (推荐)",
    code: `# 运行容器
$ docker run -d \\
    --name yuque-sync \\
    --restart always \\
    -e YUQUE_TOKEN="你的token" \\
    -e YUQUE_SESSION="你的session" \\
    -v /path/to/save:/data \\
    ghcr.io/deadmau5v/yuquesync:latest`,
  },
  {
    id: "compose",
    label: "Docker Compose",
    code: `# docker-compose.yml
version: '3'
services:
  yuque-sync:
    image: yuque-sync
    restart: always
    environment:
      - YUQUE_TOKEN=你的token
      - YUQUE_SESSION=你的session
    volumes:
      - ./data:/data`,
  },
  {
    id: "python",
    label: "Python 本地运行",
    code: `# 安装依赖
$ pip install -r requirements.txt

# 设置环境变量
$ export YUQUE_TOKEN="你的token"
$ export YUQUE_SESSION="你的session"

# 运行同步
$ python main.py download`,
  },
]

export default function GettingStarted() {
  const [activeMethod, setActiveMethod] = useState("docker")
  const [copied, setCopied] = useState(false)

  const currentMethod = deployMethods.find((m) => m.id === activeMethod)

  const handleCopy = async () => {
    if (currentMethod) {
      await navigator.clipboard.writeText(currentMethod.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section id="getting-started" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">快速开始</h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
          三个简单步骤开启文档同步之旅
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Steps */}
          <div className="space-y-10">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">获取凭证</h3>
                <p className="text-muted-foreground leading-relaxed">
                  登录语雀，打开开发者工具 (F12) → Network，刷新页面。
                  在任意请求头中找到{" "}
                  <code className="px-1.5 py-0.5 bg-primary/10 text-primary rounded text-sm font-mono">
                    yuque_ctoken
                  </code>{" "}
                  和{" "}
                  <code className="px-1.5 py-0.5 bg-primary/10 text-primary rounded text-sm font-mono">
                    _yuque_session
                  </code>
                  。
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">选择运行方式</h3>
                <p className="text-muted-foreground leading-relaxed">
                  推荐使用 Docker 运行，简单快速，环境隔离。也支持 Python 本地直接运行。
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">开始同步</h3>
                <p className="text-muted-foreground leading-relaxed">
                  服务启动后会自动开始同步任务，您可以查看日志确认进度。
                </p>
              </div>
            </div>
          </div>

          {/* Right: Code examples with tabs */}
          <div className="space-y-0">
            {/* Tabs */}
            <div className="flex border-b border-border">
              {deployMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setActiveMethod(method.id)}
                  className={`px-5 py-3 text-sm font-medium transition-colors relative ${
                    activeMethod === method.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {method.label}
                  {activeMethod === method.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
              ))}
            </div>

            {/* Code block */}
            <div className="bg-[#0d1117] rounded-b-xl border border-t-0 border-border/50 overflow-hidden">
              {/* Code header */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-border/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27ca40]"></div>
                  <span className="ml-3 text-xs text-muted-foreground font-mono">Bash</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1.5 hover:bg-white/10 rounded transition-colors text-muted-foreground hover:text-foreground"
                  title="复制代码"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-primary" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Code content */}
              <div className="p-5 font-mono text-sm overflow-x-auto">
                <pre className="text-muted-foreground whitespace-pre-wrap">
                  {currentMethod?.code.split("\n").map((line, i) => (
                    <div key={i} className="flex">
                      <span className="text-zinc-600 select-none mr-4 w-4 text-right">{i > 0 ? "$" : " "}</span>
                      <span
                        className={
                          line.startsWith("#")
                            ? "text-zinc-500"
                            : line.startsWith("$")
                              ? "text-cyan-400"
                              : line.includes("YUQUE_")
                                ? "text-muted-foreground"
                                : "text-muted-foreground"
                        }
                      >
                        {line}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
