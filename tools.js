// tools.js
const tools = [
  {
    name: "NeuroSync AI",
    icon: "🧠",
    link: "#",
    category: "Productivity",
    description: "AI-powered task automation for teams"
  },
  {
    name: "Quantum Analytics",
    icon: "📊",
    link: "#",
    category: "Analytics",
    description: "Real-time data visualization platform"
  },
  {
    name: "VisionX",
    icon: "👁️",
    link: "#",
    category: "Design",
    description: "AR prototyping for UX designers"
  },
  {
    name: "Syntax AI",
    icon: "💻",
    link: "#",
    category: "Development",
    description: "Code generation and optimization"
  },
  {
    name: "Nexus CRM",
    icon: "🤝",
    link: "#",
    category: "Marketing",
    description: "Customer relationship management"
  },
  {
    name: "DeepScan",
    icon: "🔍",
    link: "#",
    category: "Security",
    description: "Vulnerability detection system"
  }
];

function renderTools() {
  const container = document.getElementById('toolsGrid');
  if (!container) return;
  
  container.innerHTML = tools.map(tool => `
    <div class="tool-card">
      <div class="tool-icon">${tool.icon}</div>
      <h3>${tool.name}</h3>
      <span class="category">${tool.category}</span>
      <p>${tool.description}</p>
      <a href="${tool.link}" class="btn glow">Explore</a>
    </div>
  `).join('');
}
