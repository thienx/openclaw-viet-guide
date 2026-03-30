import { useState } from "react";

const phases = [
  {
    id: "api",
    emoji: "🔑",
    title: "Mua API Key",
    subtitle: "Claude Sonnet làm Brain",
    time: "10 phút",
    color: "#FF6B35",
    accent: "#FF9A6C",
    steps: [
      {
        title: "Tạo tài khoản Anthropic",
        time: "3 phút",
        detail: "Vào console.anthropic.com → Sign up bằng Gmail → Xác nhận email",
        code: null,
        tip: "Dùng Gmail để đăng ký dễ nhất — không cần thẻ ngay"
      },
      {
        title: "Nạp credit $10",
        time: "3 phút",
        detail: "Console → Billing → Add credits → Nhập thẻ Visa/Mastercard → Nạp $10",
        code: null,
        tip: "$10 đủ dùng 1-2 tháng cho bot cá nhân"
      },
      {
        title: "Tạo API Key",
        time: "2 phút",
        detail: "Console → API keys → Create Key → Đặt tên 'MyBot' → Copy key",
        code: "sk-ant-api03-xxxxxxxxxx...\n⚠️ Lưu vào Notepad ngay — chỉ hiện 1 lần!",
        tip: "Key bị lộ → vào Console reset ngay"
      },
      {
        title: "Bật Auto Reload",
        time: "2 phút",
        detail: "Billing → Edit → Bật Auto reload → Threshold $5 → Reload amount $15",
        code: null,
        tip: "Tránh bot tắt đột ngột khi hết tiền"
      }
    ]
  },
  {
    id: "install",
    emoji: "⚙️",
    title: "Cài OpenClaw",
    subtitle: "Phần mềm chạy bot",
    time: "15 phút",
    color: "#7C3AED",
    accent: "#A78BFA",
    steps: [
      {
        title: "Cài Node.js",
        time: "5 phút",
        detail: "Vào nodejs.org → Download LTS → Cài đặt mặc định → Next Next Finish",
        code: null,
        tip: "Node.js bắt buộc phải có trước khi cài OpenClaw"
      },
      {
        title: "Cài OpenClaw",
        time: "3 phút",
        detail: "Mở PowerShell (Win+X → Windows PowerShell) → chạy lệnh:",
        code: "npm install -g openclaw@latest",
        tip: "Chờ cài xong ~2-3 phút, thấy 'added X packages' là OK"
      },
      {
        title: "Kiểm tra cài thành công",
        time: "1 phút",
        detail: "Chạy lệnh kiểm tra version:",
        code: "openclaw --version\n# Kết quả: OpenClaw 2026.x.x ✅",
        tip: "Thấy số version là cài thành công rồi!"
      },
      {
        title: "Chạy Setup Wizard",
        time: "6 phút",
        detail: "Chạy wizard setup → nhập API key Anthropic khi được hỏi:",
        code: "openclaw onboard",
        tip: "Làm theo hướng dẫn từng bước — nhập API key đã copy ở bước trước"
      }
    ]
  },
  {
    id: "telegram",
    emoji: "📱",
    title: "Tạo Telegram Bot",
    subtitle: "Kênh chat với AI",
    time: "10 phút",
    color: "#0088CC",
    accent: "#29B6F6",
    steps: [
      {
        title: "Mở BotFather trên Telegram",
        time: "1 phút",
        detail: "Mở Telegram → Tìm @BotFather → Bấm Start",
        code: null,
        tip: "BotFather là bot chính thức của Telegram để tạo và quản lý bot"
      },
      {
        title: "Tạo bot mới",
        time: "3 phút",
        detail: "Nhắn cho BotFather các lệnh sau:",
        code: "/newbot\n→ Nhập tên bot: My AI Assistant\n→ Nhập username: myai2026_bot\n   (phải kết thúc bằng _bot)",
        tip: "Username phải unique — nếu bị trùng thì thêm số vào"
      },
      {
        title: "Lưu Bot Token",
        time: "1 phút",
        detail: "BotFather sẽ gửi token — copy và lưu ngay:",
        code: "8604585567:AAHxMty2Y1Gkac90...\n⚠️ Không chia sẻ token này cho ai!",
        tip: "Token bị lộ → vào BotFather → /revoke để reset"
      },
      {
        title: "Lấy Telegram ID của bạn",
        time: "2 phút",
        detail: "Mở Telegram → Tìm @userinfobot → Nhắn bất kỳ chữ gì:",
        code: "Your ID: 350665359\n(Copy số ID này lại)",
        tip: "ID này dùng để chỉ cho phép bạn chat với bot — bảo mật quan trọng!"
      },
      {
        title: "Kết nối Telegram vào OpenClaw",
        time: "3 phút",
        detail: "Mở file config và thêm phần channels:",
        code: `notepad C:\\Users\\ADMIN\\.openclaw\\openclaw.json\n\n# Thêm vào trong "channels":\n"telegram": {\n  "enabled": true,\n  "botToken": "TOKEN_CUA_BAN",\n  "allowFrom": [ID_CUA_BAN],\n  "dmPolicy": "pairing",\n  "streaming": "partial"\n}`,
        tip: "Thay TOKEN_CUA_BAN và ID_CUA_BAN bằng giá trị thật của bạn"
      }
    ]
  },
  {
    id: "config",
    emoji: "🧠",
    title: "Cấu hình Model",
    subtitle: "Sonnet setup · Haiku chat",
    time: "10 phút",
    color: "#059669",
    accent: "#34D399",
    steps: [
      {
        title: "Hiểu sự khác biệt model",
        time: "2 phút",
        detail: "Có 2 model chính cần biết:\n• Claude Sonnet: Thông minh, dùng cho setup & tác vụ phức tạp\n• Claude Haiku: Nhanh + rẻ hơn 15x, dùng cho chat hàng ngày",
        code: null,
        tip: "Dùng đúng model = tiết kiệm chi phí đáng kể"
      },
      {
        title: "Set model trong config",
        time: "3 phút",
        detail: "Mở openclaw.json → tìm phần agents → defaults:",
        code: `"defaults": {\n  "model": {\n    "primary": "anthropic/claude-sonnet-4-20250514"\n  },\n  "models": {\n    "anthropic/claude-haiku-4-5-20251001": {\n      "alias": "HAIKU"\n    },\n    "openai/gpt-4o-mini": {\n      "alias": "GPT"\n    }\n  }\n}`,
        tip: "Thêm GPT-4o-mini làm fallback dự phòng khi Claude bị rate limit"
      },
      {
        title: "Tạo agent đầu tiên",
        time: "3 phút",
        detail: "Chạy lệnh tạo agent mới:",
        code: "openclaw agents add\n→ Agent name: mybot\n→ Workspace: (Enter để dùng mặc định)\n→ Copy auth from main: Yes",
        tip: "Mỗi agent = 1 nhân cách bot riêng biệt"
      },
      {
        title: "Thêm fallback model cho agent",
        time: "2 phút",
        detail: "Trong openclaw.json → phần agents → list → tìm agent vừa tạo:",
        code: `{\n  "id": "mybot",\n  "model": "anthropic/claude-sonnet-4-20250514",\n  "fallbackModel": "openai/gpt-4o-mini"\n}`,
        tip: "fallbackModel tự động dùng GPT khi Claude bị rate limit"
      }
    ]
  },
  {
    id: "prompt",
    emoji: "✍️",
    title: "Viết System Prompt",
    subtitle: "Dạy bot tính cách",
    time: "15 phút",
    color: "#DC2626",
    accent: "#F87171",
    steps: [
      {
        title: "Mở workspace của agent",
        time: "1 phút",
        detail: "Vào folder workspace của agent vừa tạo:",
        code: "# Mở File Explorer → điều hướng đến:\nC:\\Users\\ADMIN\\.openclaw\\workspace-mybot\\",
        tip: "Folder .openclaw bị ẩn — gõ thẳng đường dẫn vào address bar"
      },
      {
        title: "Tạo SYSTEM_PROMPT.md",
        time: "10 phút",
        detail: "Tạo file và paste template sau vào — chỉnh theo nhu cầu:",
        code: `# [Tên Bot] — AI Assistant\n\n## THÔNG TIN\nBạn là [mô tả bot của bạn].\nNgười dùng: [Tên bạn]\n\n## NHIỆM VỤ CHÍNH\n- [Việc 1 bot cần làm]\n- [Việc 2 bot cần làm]\n- [Việc 3 bot cần làm]\n\n## PHONG CÁCH\n- Ngắn gọn, rõ ràng\n- Tiếng Việt 🇻🇳\n- Emoji phù hợp\n- Kết thúc: "Có gì hỏi mình nhé! 😊"\n\n## GIỚI HẠN\n- Không tiết lộ thông tin cá nhân\n- Không thực hiện giao dịch tài chính`,
        tip: "Prompt ngắn gọn = tốn ít token = chi phí thấp hơn! Dưới 1000 tokens là lý tưởng"
      },
      {
        title: "Tạo SOUL.md",
        time: "4 phút",
        detail: "File định nghĩa giá trị cốt lõi của bot:",
        code: `# SOUL.md\n\nMục đích: [Lý do bot tồn tại]\nGiá trị: Trung thực, hữu ích, thân thiện\nGiới hạn nghiêm ngặt:\n- Không lộ dữ liệu nội bộ\n- Không tự ý thực hiện hành động quan trọng\n- Hỏi xác nhận trước khi làm việc nhạy cảm`,
        tip: "SOUL.md giúp bot nhất quán và an toàn hơn"
      }
    ]
  },
  {
    id: "test",
    emoji: "🚀",
    title: "Khởi động & Test",
    subtitle: "Bot chạy lần đầu",
    time: "10 phút",
    color: "#0891B2",
    accent: "#22D3EE",
    steps: [
      {
        title: "Khởi động Gateway",
        time: "1 phút",
        detail: "Chạy lệnh để bot bắt đầu hoạt động:",
        code: "openclaw gateway --force\n\n# Thấy dòng này là thành công:\n# [gateway] listening on ws://127.0.0.1:18789\n# [telegram] starting provider (@yourbot)",
        tip: "Cửa sổ PowerShell này phải luôn mở để bot chạy"
      },
      {
        title: "Test bot trên Telegram",
        time: "3 phút",
        detail: "Mở Telegram → tìm bot vừa tạo → nhắn thử:",
        code: "Xin chào!\nBạn là ai?\nBạn đang dùng model gì?",
        tip: "Bot phải trả lời trong vài giây — nếu không check lại token"
      },
      {
        title: "Cài PM2 để chạy 24/7",
        time: "4 phút",
        detail: "Cài PM2 để bot tự restart khi crash:",
        code: `npm install -g pm2\npm2 start "openclaw gateway" --name openclaw\npm2 save\npm2 startup\n\n# Kiểm tra bot đang chạy:\npm2 status`,
        tip: "Sau khi cài PM2, bot chạy 24/7 kể cả khi restart máy"
      },
      {
        title: "Kiểm tra chi phí & rate limit",
        time: "2 phút",
        detail: "Theo dõi usage tại console.anthropic.com → Usage\nKiểm tra rate limit:",
        code: "openclaw status\n# Thấy: Telegram: ON · OK ✅",
        tip: "Nếu bị rate limit → chờ vài phút hoặc dùng fallback GPT-4o-mini"
      }
    ]
  },
  {
    id: "bonus",
    emoji: "⭐",
    title: "Tính năng Nâng cao",
    subtitle: "Cron · Cowork · Multi-agent",
    time: "20 phút",
    color: "#B45309",
    accent: "#FCD34D",
    steps: [
      {
        title: "Tạo Cron Job nhắc nhở tự động",
        time: "5 phút",
        detail: "Bot tự nhắn tin theo lịch định sẵn:",
        code: `# Nhắc mỗi sáng 7h\nopenclaw cron add \\\n  --name "morning" \\\n  --agent mybot \\\n  --cron "0 7 * * *" \\\n  --tz "Asia/Ho_Chi_Minh" \\\n  --message "Chào buổi sáng! Hôm nay bạn có kế hoạch gì?" \\\n  --channel telegram \\\n  --to ID_CUA_BAN \\\n  --announce`,
        tip: "Cron expression: phút giờ ngày tháng thứ — '0 7 * * *' = 7h sáng mỗi ngày"
      },
      {
        title: "Tạo nhiều Agent (Multi-bot)",
        time: "5 phút",
        detail: "Mỗi agent = 1 bot với tính cách riêng trên cùng 1 Telegram:",
        code: `# Tạo agent thứ 2\nopenclaw agents add --name "agent2"\n\n# Switch giữa agents:\n/use agent2   → chuyển sang agent2\n/use main     → về agent chính\n/use mybot    → về mybot`,
        tip: "Dùng /use tên_agent để chuyển bot không cần tạo thêm tài khoản Telegram"
      },
      {
        title: "Setup Cowork để điều khiển từ xa",
        time: "5 phút",
        detail: "Cài Claude Desktop → bật Cowork → điều khiển PC từ điện thoại:",
        code: `1. Tải Claude Desktop: claude.com/download\n2. Đăng nhập account Claude Pro\n3. Tab Cowork → New Project\n   → Use existing folder\n   → Chọn C:\\Users\\ADMIN\\.openclaw\n4. Tab Dispatch → Keep awake: ON\n5. Từ điện thoại nhắn:\n   "Restart openclaw gateway giúp mình"`,
        tip: "Cần Claude Pro $20/tháng để dùng Cowork + Dispatch"
      },
      {
        title: "Phân tích ảnh với Claude Vision",
        time: "5 phút",
        detail: "Bot tự động phân tích ảnh gửi lên Telegram. Thêm vào SYSTEM_PROMPT:",
        code: `## XỬ LÝ ẢNH\nKhi nhận ảnh:\n1. Mô tả nội dung ảnh\n2. Phân tích theo yêu cầu\n3. Đưa ra nhận xét/gợi ý\n\nVí dụ: Gửi ảnh đồ ăn → tính calo + macro\nGửi ảnh tài liệu → tóm tắt nội dung`,
        tip: "Claude Sonnet/Haiku đều hỗ trợ vision — gửi ảnh trực tiếp vào Telegram là dùng được"
      }
    ]
  }
];

const modelComparison = [
  { name: "Claude Haiku", use: "Chat hàng ngày", inputPrice: "$0.80", outputPrice: "$4", speed: "⚡ Nhanh nhất", emoji: "⚡", color: "#059669", recommend: true, note: "Khuyên dùng cho chat" },
  { name: "Claude Sonnet", use: "Setup & phức tạp", inputPrice: "$3", outputPrice: "$15", speed: "🧠 Thông minh", emoji: "🧠", color: "#7C3AED", recommend: false, note: "Dùng khi cần chất lượng cao" },
  { name: "GPT-4o mini", use: "Fallback dự phòng", inputPrice: "$0.15", outputPrice: "$0.60", speed: "🔄 Rẻ nhất", emoji: "🔄", color: "#0088CC", recommend: false, note: "Set làm fallbackModel" },
];

const costTable = [
  { usecase: "Bot chat gym hàng ngày", model: "Haiku", daily: "~$0.05", monthly: "~$1.50" },
  { usecase: "Bot quản lý quán ăn", model: "Haiku", daily: "~$0.08", monthly: "~$2.40" },
  { usecase: "Setup & cấu hình bot", model: "Sonnet", daily: "~$0.50", monthly: "~$3 (1 lần)" },
  { usecase: "Phân tích ảnh đồ ăn", model: "Sonnet", daily: "~$0.15", monthly: "~$4.50" },
];

export default function OpenClawGuide() {
  const [done, setDone] = useState({});
  const [openPhase, setOpenPhase] = useState("api");
  const [openStep, setOpenStep] = useState(null);
  const [activeTab, setActiveTab] = useState("guide");

  const totalSteps = phases.reduce((a, p) => a + p.steps.length, 0);
  const doneCount = Object.values(done).filter(Boolean).length;
  const progress = Math.round(doneCount / totalSteps * 100);
  const activePhase = phases.find(p => p.id === openPhase);

  function toggleDone(key) {
    setDone(d => ({ ...d, [key]: !d[key] }));
  }

  return (
    <div style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace", background: "#0D0D1A", minHeight: "100vh", color: "#E2E8F0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #7C3AED; border-radius: 2px; }
        @keyframes slideIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{background-position:-200%} 100%{background-position:200%} }
        .hover-lift:hover { transform: translateY(-2px); transition: all 0.2s; }
        .step-body { animation: slideIn 0.25s ease; }
      `}</style>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0D0D1A, #1A1035, #0D0D1A)", borderBottom: "1px solid #1E1E3F", padding: "28px 24px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 6 }}>
            <div style={{ fontSize: 42 }}>🦞</div>
            <div>
              <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, background: "linear-gradient(135deg, #A78BFA 0%, #60A5FA 50%, #34D399 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                OpenClaw Việt Guide
              </h1>
              <p style={{ margin: "4px 0 0", color: "#475569", fontSize: 12 }}>
                Hướng dẫn cài đặt Claude AI Bot cho người Việt • Từ $0 → Bot Telegram hoạt động
              </p>
            </div>
            <div style={{ marginLeft: "auto", background: "#14532D20", border: "1px solid #22C55E40", borderRadius: 8, padding: "6px 14px", textAlign: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#4ADE80" }}>~70'</div>
              <div style={{ fontSize: 10, color: "#64748B" }}>hoàn thành</div>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ background: "#1A1A2E", borderRadius: 10, padding: "12px 16px", border: "1px solid #1E1E3F", marginTop: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 12, color: "#64748B" }}>Tiến độ của bạn</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: progress === 100 ? "#4ADE80" : "#A78BFA" }}>
                {doneCount}/{totalSteps} bước {progress === 100 ? "✅ Hoàn thành!" : `(${progress}%)`}
              </span>
            </div>
            <div style={{ background: "#0D0D1A", borderRadius: 4, height: 6 }}>
              <div style={{ background: "linear-gradient(90deg, #7C3AED, #60A5FA, #34D399)", height: "100%", width: progress + "%", borderRadius: 4, transition: "width 0.5s ease" }} />
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 4, marginTop: 16 }}>
            {[["guide", "📋 Hướng dẫn"], ["cost", "💰 Chi phí"], ["tips", "💡 Mẹo hay"]].map(([id, label]) => (
              <button key={id} onClick={() => setActiveTab(id)}
                style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid " + (activeTab === id ? "#7C3AED" : "#1E1E3F"), background: activeTab === id ? "#7C3AED20" : "transparent", color: activeTab === id ? "#A78BFA" : "#64748B", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "inherit" }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 24px 60px" }}>

        {/* GUIDE TAB */}
        {activeTab === "guide" && (
          <>
            {/* Phase pills */}
            <div style={{ display: "flex", gap: 6, marginBottom: 20, overflowX: "auto", paddingBottom: 6 }}>
              {phases.map((p, i) => {
                const pDone = p.steps.filter((_, j) => done[p.id + j]).length;
                const isActive = openPhase === p.id;
                const allDone = pDone === p.steps.length;
                return (
                  <button key={p.id} className="hover-lift" onClick={() => { setOpenPhase(p.id); setOpenStep(null); }}
                    style={{ flexShrink: 0, padding: "8px 12px", borderRadius: 10, border: "1.5px solid " + (isActive ? p.color : allDone ? "#22C55E40" : "#1E1E3F"), background: isActive ? p.color + "18" : allDone ? "#14532D20" : "#1A1A2E", cursor: "pointer", textAlign: "center", minWidth: 80 }}>
                    <div style={{ fontSize: 18 }}>{allDone ? "✅" : p.emoji}</div>
                    <div style={{ fontSize: 9, fontWeight: 700, color: isActive ? p.accent : allDone ? "#4ADE80" : "#475569", marginTop: 2 }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div style={{ fontSize: 9, color: isActive ? p.accent : "#475569", marginTop: 1, whiteSpace: "nowrap" }}>
                      {p.time}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active phase detail */}
            {activePhase && (
              <div style={{ background: "#1A1A2E", border: "1.5px solid " + activePhase.color + "35", borderRadius: 16, padding: 20, marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18, flexWrap: "wrap", gap: 10 }}>
                  <div style={{ width: 50, height: 50, borderRadius: 13, background: activePhase.color + "18", border: "2px solid " + activePhase.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
                    {activePhase.emoji}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: "#E2E8F0" }}>{activePhase.title}</h2>
                    <p style={{ margin: "3px 0 0", fontSize: 11, color: activePhase.accent }}>{activePhase.subtitle} · ⏱ {activePhase.time}</p>
                  </div>
                  <div style={{ fontSize: 11, color: "#475569" }}>
                    {activePhase.steps.filter((_, j) => done[activePhase.id + j]).length}/{activePhase.steps.length} xong
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {activePhase.steps.map((step, i) => {
                    const key = activePhase.id + i;
                    const isDone = done[key];
                    const isOpen = openStep === key;
                    return (
                      <div key={i} style={{ background: isDone ? "#14532D12" : "#0D0D1A", border: "1px solid " + (isDone ? "#22C55E35" : "#1E1E3F"), borderRadius: 11, overflow: "hidden" }}>
                        <div onClick={() => setOpenStep(isOpen ? null : key)}
                          style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 15px", cursor: "pointer" }}>
                          <div style={{ width: 26, height: 26, borderRadius: "50%", background: isDone ? "#22C55E" : activePhase.color + "20", border: "1.5px solid " + (isDone ? "#22C55E" : activePhase.color), display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: isDone ? "#000" : activePhase.accent, flexShrink: 0 }}>
                            {isDone ? "✓" : i + 1}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 700, fontSize: 13, color: isDone ? "#475569" : "#E2E8F0" }}>{step.title}</div>
                            <div style={{ fontSize: 10, color: "#2D3748", marginTop: 1 }}>⏱ {step.time}</div>
                          </div>
                          <div style={{ color: "#475569", fontSize: 11 }}>{isOpen ? "▲" : "▼"}</div>
                        </div>

                        {isOpen && (
                          <div className="step-body" style={{ padding: "0 15px 14px", borderTop: "1px solid #1E1E3F" }}>
                            <p style={{ fontSize: 13, color: "#CBD5E1", lineHeight: 1.75, margin: "12px 0 8px", whiteSpace: "pre-line" }}>{step.detail}</p>
                            {step.code && (
                              <div style={{ background: "#060610", border: "1px solid #1E1E3F", borderRadius: 9, padding: "11px 14px", margin: "8px 0", position: "relative" }}>
                                <div style={{ position: "absolute", top: 7, right: 10, fontSize: 9, color: "#2D3748", fontFamily: "monospace" }}>COPY & PASTE</div>
                                <pre style={{ margin: 0, fontSize: 11, color: "#A78BFA", whiteSpace: "pre-wrap", fontFamily: "inherit", lineHeight: 1.7 }}>{step.code}</pre>
                              </div>
                            )}
                            {step.tip && (
                              <div style={{ background: activePhase.color + "10", border: "1px solid " + activePhase.color + "25", borderRadius: 8, padding: "8px 12px", fontSize: 11, color: activePhase.accent, lineHeight: 1.6 }}>
                                💡 {step.tip}
                              </div>
                            )}
                            <button onClick={() => toggleDone(key)}
                              style={{ marginTop: 10, padding: "7px 18px", borderRadius: 7, border: "1px solid " + (isDone ? "#22C55E" : "#2D3748"), background: isDone ? "#14532D" : "#1A1A2E", color: isDone ? "#4ADE80" : "#64748B", cursor: "pointer", fontWeight: 700, fontSize: 11, fontFamily: "inherit" }}>
                              {isDone ? "✅ Đã xong!" : "☑️ Đánh dấu hoàn thành"}
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div style={{ display: "flex", gap: 10, justifyContent: "space-between" }}>
              {phases.findIndex(p => p.id === openPhase) > 0 && (
                <button className="hover-lift" onClick={() => { const i = phases.findIndex(p => p.id === openPhase); setOpenPhase(phases[i-1].id); setOpenStep(null); }}
                  style={{ padding: "10px 20px", borderRadius: 10, border: "1px solid #1E1E3F", background: "#1A1A2E", color: "#94A3B8", cursor: "pointer", fontSize: 12, fontFamily: "inherit" }}>
                  ← Phase trước
                </button>
              )}
              {phases.findIndex(p => p.id === openPhase) < phases.length - 1 && (
                <button className="hover-lift" onClick={() => { const i = phases.findIndex(p => p.id === openPhase); setOpenPhase(phases[i+1].id); setOpenStep(null); }}
                  style={{ marginLeft: "auto", padding: "10px 20px", borderRadius: 10, border: "1px solid #7C3AED", background: "#7C3AED20", color: "#A78BFA", cursor: "pointer", fontSize: 12, fontWeight: 700, fontFamily: "inherit" }}>
                  Phase tiếp → 
                </button>
              )}
            </div>
          </>
        )}

        {/* COST TAB */}
        {activeTab === "cost" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#1A1A2E", border: "1px solid #1E1E3F", borderRadius: 16, padding: 20 }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 14, color: "#94A3B8" }}>📊 So sánh Model</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                {modelComparison.map((m, i) => (
                  <div key={i} style={{ background: "#0D0D1A", border: "1.5px solid " + (m.recommend ? m.color : m.color + "40"), borderRadius: 12, padding: 14, textAlign: "center", position: "relative" }}>
                    {m.recommend && <div style={{ position: "absolute", top: -8, left: "50%", transform: "translateX(-50%)", background: m.color, borderRadius: 6, padding: "2px 10px", fontSize: 9, fontWeight: 800, color: "#fff", whiteSpace: "nowrap" }}>KHUYÊN DÙNG</div>}
                    <div style={{ fontSize: 22, marginBottom: 6 }}>{m.emoji}</div>
                    <div style={{ fontWeight: 800, fontSize: 12, color: m.color }}>{m.name}</div>
                    <div style={{ fontSize: 10, color: "#475569", margin: "4px 0", lineHeight: 1.5 }}>{m.use}</div>
                    <div style={{ fontSize: 11, color: "#94A3B8" }}>Input: {m.inputPrice}</div>
                    <div style={{ fontSize: 11, color: "#94A3B8" }}>Output: {m.outputPrice}</div>
                    <div style={{ fontSize: 9, color: "#475569", marginTop: 2 }}>per 1M tokens</div>
                    <div style={{ marginTop: 8, fontSize: 10, color: m.color, background: m.color + "10", borderRadius: 6, padding: "4px 8px" }}>{m.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "#1A1A2E", border: "1px solid #1E1E3F", borderRadius: 16, padding: 20 }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 14, color: "#94A3B8" }}>💵 Ước tính chi phí thực tế</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 8, padding: "8px 12px", background: "#0D0D1A", borderRadius: 8, fontSize: 10, fontWeight: 700, color: "#475569" }}>
                  <span>Use case</span><span>Model</span><span>Mỗi ngày</span><span>Mỗi tháng</span>
                </div>
                {costTable.map((row, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 8, padding: "10px 12px", background: "#0D0D1A", borderRadius: 8, fontSize: 12, color: "#CBD5E1", alignItems: "center" }}>
                    <span>{row.usecase}</span>
                    <span style={{ color: "#7C3AED", fontSize: 10 }}>{row.model}</span>
                    <span style={{ color: "#4ADE80" }}>{row.daily}</span>
                    <span style={{ color: "#60A5FA" }}>{row.monthly}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 12, padding: "10px 14px", background: "#14532D20", border: "1px solid #22C55E30", borderRadius: 10, fontSize: 12, color: "#4ADE80" }}>
                💡 $10 credit ban đầu đủ dùng 2-3 tháng cho bot cá nhân với Haiku model!
              </div>
            </div>
          </div>
        )}

        {/* TIPS TAB */}
        {activeTab === "tips" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { emoji: "💰", title: "Tiết kiệm token", color: "#059669", tips: ["Dùng Haiku cho chat daily — rẻ hơn Sonnet 15 lần", "SYSTEM_PROMPT ngắn gọn dưới 1000 tokens", "Tắt memory auto-write trong AGENTS.md", "Xóa session cũ định kỳ bằng 'openclaw sessions'"] },
              { emoji: "🔒", title: "Bảo mật", color: "#DC2626", tips: ["Luôn set allowFrom với Telegram ID của bạn", "Không chia sẻ API key hay Bot Token", "Dùng file .env để lưu secrets thay vì hardcode", "Bật 2FA cho tài khoản Anthropic và Telegram"] },
              { emoji: "⚡", title: "Tối ưu hiệu năng", color: "#7C3AED", tips: ["Cài PM2 để bot tự restart 24/7", "Bật Cowork + Dispatch để điều khiển từ xa", "Set fallbackModel để dự phòng khi rate limit", "Dùng cron jobs thay vì nhắc thủ công"] },
              { emoji: "🐛", title: "Xử lý lỗi thường gặp", color: "#0088CC", tips: ["Bot không reply → kiểm tra 'openclaw status'", "Hết token → vào console.anthropic.com nạp thêm", "Config lỗi → chạy 'openclaw config validate'", "Mọi lỗi → thử 'openclaw gateway --force' trước"] },
            ].map((section, i) => (
              <div key={i} style={{ background: "#1A1A2E", border: "1px solid " + section.color + "30", borderRadius: 14, padding: 18 }}>
                <h3 style={{ margin: "0 0 12px", fontSize: 14, color: section.color, display: "flex", alignItems: "center", gap: 8 }}>
                  <span>{section.emoji}</span> {section.title}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {section.tips.map((tip, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "7px 10px", background: "#0D0D1A", borderRadius: 8 }}>
                      <span style={{ color: section.color, flexShrink: 0 }}>→</span>
                      <span style={{ fontSize: 12, color: "#CBD5E1", lineHeight: 1.6 }}>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Community */}
            <div style={{ background: "linear-gradient(135deg, #1A1035, #0D1A2E)", border: "1px solid #7C3AED40", borderRadius: 14, padding: 18, textAlign: "center" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>🦞</div>
              <h3 style={{ margin: "0 0 6px", color: "#A78BFA" }}>OpenClaw Việt Community</h3>
              <p style={{ margin: "0 0 12px", fontSize: 12, color: "#64748B" }}>Chia sẻ kinh nghiệm và hỗ trợ nhau cài đặt</p>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
                {[["📖", "Docs chính thức", "docs.openclaw.ai"], ["💬", "Telegram Group", "t.me/openclawviet"], ["⭐", "GitHub", "github.com/openclaw-viet"]].map(([emoji, label, url], i) => (
                  <a key={i} href={"https://" + url} target="_blank" rel="noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "#1A1A2E", border: "1px solid #2D2D4E", borderRadius: 8, fontSize: 12, color: "#94A3B8", textDecoration: "none" }}>
                    <span>{emoji}</span> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
