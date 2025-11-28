const configurations = [
  {
    name: "YUQUE_TOKEN",
    required: true,
    description: "语雀 Token",
  },
  {
    name: "YUQUE_SESSION",
    required: true,
    description: "语雀 Session",
  },
  {
    name: "YUQUE_BASE_URL",
    required: false,
    default: "https://www.yuque.com",
    description: "语雀网站地址",
  },
  {
    name: "SAVE_PATH",
    required: false,
    default: "/data",
    description: "文档保存路径",
  },
  {
    name: "MONITOR_INTERVAL_MINUTES",
    required: false,
    default: "10",
    description: "同步间隔（分钟）",
  },
  {
    name: "EXPORT_FORMAT",
    required: false,
    default: "pdf",
    description: "导出格式 (pdf/markdown)",
  },
]

export default function Configurations() {
  return (
    <section id="config" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">配置说明</h2>
        <p className="text-lg text-muted-foreground mb-16 text-center">详细的环境变量配置参数</p>

        <div className="overflow-x-auto rounded-xl border border-border/50 bg-card/30">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="text-left py-4 px-6 font-medium text-muted-foreground text-sm">环境变量</th>
                <th className="text-left py-4 px-6 font-medium text-muted-foreground text-sm">必填</th>
                <th className="text-left py-4 px-6 font-medium text-muted-foreground text-sm">默认值</th>
                <th className="text-left py-4 px-6 font-medium text-muted-foreground text-sm">说明</th>
              </tr>
            </thead>
            <tbody>
              {configurations.map((config, index) => (
                <tr
                  key={index}
                  className="border-b border-border/30 last:border-b-0 hover:bg-card/50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <code className="font-mono text-sm text-primary">{config.name}</code>
                  </td>
                  <td className="py-4 px-6">
                    {config.required ? (
                      <span className="inline-flex px-2.5 py-1 rounded-md bg-red-500/10 text-red-400 text-xs font-medium border border-red-500/20">
                        必需
                      </span>
                    ) : (
                      <span className="inline-flex px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium">
                        可选
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 font-mono text-sm text-muted-foreground">
                    {config.default || "-"}
                  </td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{config.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
