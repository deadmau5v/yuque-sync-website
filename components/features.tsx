import { FileText, RotateCw, Package, Search, BookOpen, Copy } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "智能同步引擎",
    description: "实时监控语雀文档变更，自动更新本地备份",
  },
  {
    icon: Copy,
    title: "多格式导出",
    description: "支持 PDF 和 Markdown 两种导出格式",
  },
  {
    icon: Package,
    title: "知识库整体同步",
    description: "一次性同步整个知识库，无需逐个操作",
  },
  {
    icon: Search,
    title: "智能变更检测",
    description: "精准识别文档更新，避免重复下载",
  },
  {
    icon: BookOpen,
    title: "保留原文档格式",
    description: "完整保留原始文档样式和结构",
  },
  {
    icon: RotateCw,
    title: "Docker 部署",
    description: "开箱即用，支持容器化部署",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">🌟 主要特性</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">全面的文档同步解决方案，满足不同场景的需求</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-lg border border-border hover:border-primary/50 bg-card/50 hover:bg-card transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
