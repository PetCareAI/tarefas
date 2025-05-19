// Definição das equipes e suas tarefas (mesmo do código anterior)
const TEAMS = {
  marina: {
    name: "👩‍⚕️ Dr. Marina Santos - Veterinária Chefe",
    emoji: "👩‍⚕️",
    color: "#10B981",
    areas: {
      nutrition: {
        name: "🍽️ Nutrição & Saúde",
        tasks: [
          { id: 1, title: "🥘 Criar base nutricional 50+ raças caninas", priority: "High", deadline: "2024-06-15", estimate: "40h" },
          { id: 2, title: "🍼 Protocolo alimentação filhotes 0-6m", priority: "High", deadline: "2024-06-20", estimate: "20h" },
          { id: 3, title: "👴 Diretrizes nutricionais pets seniores", priority: "Medium", deadline: "2024-06-25", estimate: "25h" },
          { id: 4, title: "📏 Calculadora de calorias por atividade", priority: "High", deadline: "2024-06-30", estimate: "15h" },
          { id: 5, title: "☠️ Base de alimentos tóxicos para pets", priority: "High", deadline: "2024-07-05", estimate: "12h" },
          { id: 6, title: "🔄 Protocolo de transição alimentar", priority: "Medium", deadline: "2024-07-10", estimate: "18h" },
          { id: 7, title: "💊 Padrões nutricionais pets diabéticos", priority: "Medium", deadline: "2024-07-15", estimate: "30h" },
          { id: 8, title: "🫘 Dieta pets com problemas renais", priority: "Medium", deadline: "2024-07-20", estimate: "25h" },
          { id: 9, title: "💪 Guia suplementação pets ativos", priority: "Low", deadline: "2024-07-25", estimate: "15h" },
          { id: 10, title: "🤧 Protocolo pets com alergias alimentares", priority: "Medium", deadline: "2024-07-30", estimate: "22h" },
          { id: 11, title: "🦴 Diretrizes cálcio e fósforo", priority: "Medium", deadline: "2024-08-05", estimate: "20h" },
          { id: 12, title: "🥩 Protocolo dieta raw food", priority: "Low", deadline: "2024-08-10", estimate: "25h" },
          { id: 13, title: "🌾 Guia alimentação pets com alergias", priority: "Medium", deadline: "2024-08-15", estimate: "30h" },
          { id: 14, title: "🍎 Base de alimentos funcionais", priority: "Low", deadline: "2024-08-20", estimate: "18h" },
          { id: 15, title: "💧 Protocolo hidratação adequada", priority: "Medium", deadline: "2024-08-25", estimate: "15h" },
          { id: 16, title: "🎯 Sistema pontuação nutricional", priority: "High", deadline: "2024-08-30", estimate: "35h" },
          { id: 17, title: "🍃 Guia plantas medicinais seguras", priority: "Low", deadline: "2024-09-05", estimate: "20h" },
          { id: 18, title: "🧪 Protocolo suplementos específicos", priority: "Medium", deadline: "2024-09-10", estimate: "28h" },
          { id: 19, title: "🥗 Cardápios detox para pets", priority: "Low", deadline: "2024-09-15", estimate: "22h" },
          { id: 20, title: "🍽️ Guia porções ideais por peso", priority: "High", deadline: "2024-09-20", estimate: "25h" },
          { id: 21, title: "🦷 Protocolo saúde dental", priority: "Medium", deadline: "2024-09-25", estimate: "30h" },
          { id: 22, title: "🏃 Nutrição para pets atletas", priority: "Low", deadline: "2024-09-30", estimate: "35h" },
          { id: 23, title: "🤱 Protocolo lactação e gestação", priority: "Medium", deadline: "2024-10-05", estimate: "40h" },
          { id: 24, title: "🧠 Nutrição para saúde cognitiva", priority: "Low", deadline: "2024-10-10", estimate: "25h" },
          { id: 25, title: "🔬 Base científica de ingredientes", priority: "High", deadline: "2024-10-15", estimate: "50h" }
        ]
      },
      analysis: {
        name: "📊 Análise de Dados de Saúde",
        tasks: [
          { id: 26, title: "⚖️ Analisar dados peso 10k+ pets", priority: "High", deadline: "2024-10-20", estimate: "35h" },
          { id: 27, title: "🔍 Padrões doenças por raça", priority: "High", deadline: "2024-10-25", estimate: "40h" },
          { id: 28, title: "📈 Relatório tendências nutricionais regionais", priority: "Medium", deadline: "2024-10-30", estimate: "25h" },
          { id: 29, title: "📊 Correlação dieta-longevidade", priority: "Medium", deadline: "2024-11-05", estimate: "45h" },
          { id: 30, title: "🏃 Padrões atividade vs saúde", priority: "Medium", deadline: "2024-11-10", estimate: "30h" },
          { id: 31, title: "🎯 Modelo preditivo problemas saúde", priority: "High", deadline: "2024-11-15", estimate: "50h" },
          { id: 32, title: "✅ Eficácia recomendações nutricionais", priority: "Medium", deadline: "2024-11-20", estimate: "35h" },
          { id: 33, title: "🕐 Impacto idade na alimentação", priority: "Low", deadline: "2024-11-25", estimate: "20h" },
          { id: 34, title: "📊 Benchmarks saúde por categoria", priority: "Low", deadline: "2024-11-30", estimate: "25h" },
          { id: 35, title: "😊 Dados satisfação tutores", priority: "Low", deadline: "2024-12-05", estimate: "15h" },
          { id: 36, title: "🌡️ Análise parâmetros vitais", priority: "Medium", deadline: "2024-12-10", estimate: "30h" },
          { id: 37, title: "🩺 Correlação sintomas-alimentação", priority: "High", deadline: "2024-12-15", estimate: "40h" },
          { id: 38, title: "📋 Dashboard veterinário", priority: "Medium", deadline: "2024-12-20", estimate: "35h" },
          { id: 39, title: "🔬 Análise exames laboratoriais", priority: "Medium", deadline: "2024-12-25", estimate: "45h" },
          { id: 40, title: "📈 Métricas prevenção de doenças", priority: "Low", deadline: "2024-12-30", estimate: "25h" }
        ]
      },
      content: {
        name: "✍️ Conteúdo Educativo",
        tasks: [
          { id: 41, title: "📝 20 artigos nutrição canina", priority: "Medium", deadline: "2025-01-10", estimate: "80h" },
          { id: 42, title: "🐱 15 posts nutrição felina", priority: "Medium", deadline: "2025-01-15", estimate: "60h" },
          { id: 43, title: "🌿 Série cuidados sazonais", priority: "Low", deadline: "2025-01-20", estimate: "40h" },
          { id: 44, title: "❓ Guia 'Mitos vs Verdades' alimentação", priority: "Medium", deadline: "2025-01-25", estimate: "25h" },
          { id: 45, title: "⚖️ Artigos prevenção obesidade", priority: "High", deadline: "2025-01-30", estimate: "30h" },
          { id: 46, title: "🌱 Conteúdo alimentação natural", priority: "Low", deadline: "2025-02-05", estimate: "35h" },
          { id: 47, title: "🚨 Guia primeiros socorros pets", priority: "High", deadline: "2025-02-10", estimate: "40h" },
          { id: 48, title: "⚠️ Sinais deficiências nutricionais", priority: "Medium", deadline: "2025-02-15", estimate: "25h" },
          { id: 49, title: "🏃 Série exercícios para pets", priority: "Low", deadline: "2025-02-20", estimate: "30h" },
          { id: 50, title: "💉 Conteúdo sobre vacinação", priority: "Medium", deadline: "2025-02-25", estimate: "25h" },
          { id: 51, title: "🦷 Guia higiene dental", priority: "Medium", deadline: "2025-03-01", estimate: "20h" },
          { id: 52, title: "🧼 Série higiene e limpeza", priority: "Low", deadline: "2025-03-05", estimate: "30h" },
          { id: 53, title: "🌡️ Artigos sobre emergências", priority: "High", deadline: "2025-03-10", estimate: "35h" },
          { id: 54, title: "🧬 Conteúdo sobre genética", priority: "Low", deadline: "2025-03-15", estimate: "40h" },
          { id: 55, title: "💊 Guia medicamentos seguros", priority: "High", deadline: "2025-03-20", estimate: "45h" },
          { id: 56, title: "🐣 Série cuidados neonatais", priority: "Medium", deadline: "2025-03-25", estimate: "35h" },
          { id: 57, title: "👴 Guia cuidados geriátricos", priority: "Medium", deadline: "2025-03-30", estimate: "40h" },
          { id: 58, title: "🦴 Artigos saúde articular", priority: "Medium", deadline: "2025-04-05", estimate: "30h" },
          { id: 59, title: "🧪 Série sobre análises clínicas", priority: "Low", deadline: "2025-04-10", estimate: "25h" },
          { id: 60, title: "📚 E-book completo nutrição", priority: "High", deadline: "2025-04-15", estimate: "100h" }
        ]
      }
    }
  },
  carlos: {
    name: "👨‍💻 Carlos Silva - CTO & Lead Developer",
    emoji: "👨‍💻",
    color: "#3B82F6",
    areas: {
      architecture: {
        name: "🏗️ Arquitetura & Infrastructure",
        tasks: [
          { id: 61, title: "🔧 Refatorar arquitetura microserviços", priority: "High", deadline: "2024-07-01", estimate: "60h" },
          { id: 62, title: "⚡ Implementar cache distributivo Redis", priority: "High", deadline: "2024-07-05", estimate: "25h" },
          { id: 63, title: "🚀 Otimizar queries banco de dados", priority: "High", deadline: "2024-07-10", estimate: "40h" },
          { id: 64, title: "📊 Monitoring com Prometheus", priority: "Medium", deadline: "2024-07-15", estimate: "30h" },
          { id: 65, title: "⚖️ Load balancing automático", priority: "Medium", deadline: "2024-07-20", estimate: "35h" },
          { id: 66, title: "💾 Backup strategy RTO < 1h", priority: "High", deadline: "2024-07-25", estimate: "20h" },
          { id: 67, title: "🔵 Blue-green deployment", priority: "Medium", deadline: "2024-07-30", estimate: "40h" },
          { id: 68, title: "📈 Auto-scaling horizontal", priority: "Medium", deadline: "2024-08-05", estimate: "45h" },
          { id: 69, title: "🛡️ Disaster recovery plan", priority: "High", deadline: "2024-08-10", estimate: "25h" },
          { id: 70, title: "🔄 API versioning strategy", priority: "Low", deadline: "2024-08-15", estimate: "15h" },
          { id: 71, title: "🐳 Container orchestration", priority: "Medium", deadline: "2024-08-20", estimate: "50h" },
          { id: 72, title: "🔐 Service mesh implementation", priority: "Low", deadline: "2024-08-25", estimate: "60h" }
        ]
      },
      ml: {
        name: "🤖 Machine Learning & AI",
        tasks: [
          { id: 73, title: "🎯 Otimizar modelo recomendação nutricional", priority: "High", deadline: "2024-08-30", estimate: "50h" },
          { id: 74, title: "🧪 A/B testing framework", priority: "High", deadline: "2024-09-05", estimate: "35h" },
          { id: 75, title: "🚨 Sistema anomaly detection", priority: "Medium", deadline: "2024-09-10", estimate: "40h" },
          { id: 76, title: "🛠️ Pipeline MLOps automatizado", priority: "High", deadline: "2024-09-15", estimate: "60h" },
          { id: 77, title: "⚡ Real-time inference engine", priority: "Medium", deadline: "2024-09-20", estimate: "45h" },
          { id: 78, title: "🏪 Feature store centralizado", priority: "Medium", deadline: "2024-09-25", estimate: "30h" },
          { id: 79, title: "👑 Sistema model governance", priority: "Low", deadline: "2024-09-30", estimate: "25h" },
          { id: 80, title: "🔄 Continual learning pipeline", priority: "Medium", deadline: "2024-10-05", estimate: "50h" },
          { id: 81, title: "💡 Explicabilidade de modelos", priority: "Low", deadline: "2024-10-10", estimate: "35h" },
          { id: 82, title: "⚖️ Sistema bias detection", priority: "Medium", deadline: "2024-10-15", estimate: "40h" },
          { id: 83, title: "🎨 AutoML implementation", priority: "Low", deadline: "2024-10-20", estimate: "70h" },
          { id: 84, title: "📊 Model monitoring dashboard", priority: "Medium", deadline: "2024-10-25", estimate: "35h" },
          { id: 85, title: "🔬 Experiment tracking system", priority: "Low", deadline: "2024-10-30", estimate: "40h" },
          { id: 86, title: "🎯 Personalization engine", priority: "High", deadline: "2024-11-05", estimate: "55h" },
          { id: 87, title: "🧠 Neural architecture search", priority: "Low", deadline: "2024-11-10", estimate: "80h" }
        ]
      },
      mobile: {
        name: "📱 Mobile App Development",
        tasks: [
          { id: 88, title: "🔔 Push notifications inteligentes", priority: "High", deadline: "2024-11-15", estimate: "35h" },
          { id: 89, title: "📴 Modo offline com sync", priority: "High", deadline: "2024-11-20", estimate: "50h" },
          { id: 90, title: "🚀 Otimizar performance loading", priority: "Medium", deadline: "2024-11-25", estimate: "30h" },
          { id: 91, title: "🔗 Deep linking strategy", priority: "Medium", deadline: "2024-11-30", estimate: "25h" },
          { id: 92, title: "💥 Crash reporting system", priority: "High", deadline: "2024-12-05", estimate: "20h" },
          { id: 93, title: "🚩 Feature flags system", priority: "Medium", deadline: "2024-12-10", estimate: "30h" },
          { id: 94, title: "👆 Biometric authentication", priority: "Low", deadline: "2024-12-15", estimate: "40h" },
          { id: 95, title: "🚀 Onboarding interativo", priority: "Medium", deadline: "2024-12-20", estimate: "35h" },
          { id: 96, title: "🌙 Dark mode implementation", priority: "Low", deadline: "2024-12-25", estimate: "25h" },
          { id: 97, title: "♿ Accessibility features", priority: "Medium", deadline: "2024-12-30", estimate: "45h" },
          { id: 98, title: "🎮 App widgets development", priority: "Low", deadline: "2025-01-05", estimate: "35h" },
          { id: 99, title: "📲 Cross-platform optimization", priority: "Medium", deadline: "2025-01-10", estimate: "50h" }
        ]
      },
      backend: {
        name: "🌐 Backend Development",
        tasks: [
          { id: 100, title: "📊 API GraphQL para mobile", priority: "High", deadline: "2025-01-15", estimate: "45h" },
          { id: 101, title: "🚦 Rate limiting avançado", priority: "Medium", deadline: "2025-01-20", estimate: "25h" },
          { id: 102, title: "🪝 Webhook system", priority: "Medium", deadline: "2025-01-25", estimate: "35h" },
          { id: 103, title: "📋 Audit trail completo", priority: "High", deadline: "2025-01-30", estimate: "40h" },
          { id: 104, title: "🔐 Data encryption at rest", priority: "High", deadline: "2025-02-05", estimate: "30h" },
          { id: 105, title: "🔍 Search engine otimizado", priority: "Medium", deadline: "2025-02-10", estimate: "50h" },
          { id: 106, title: "🔔 Sistema de notifications", priority: "Medium", deadline: "2025-02-15", estimate: "35h" },
          { id: 107, title: "📁 File upload com CDN", priority: "Medium", deadline: "2025-02-20", estimate: "30h" },
          { id: 108, title: "💰 Payment integration", priority: "High", deadline: "2025-02-25", estimate: "60h" },
          { id: 109, title: "📈 Analytics tracking", priority: "Medium", deadline: "2025-03-01", estimate: "40h" },
          { id: 110, title: "🔄 Event sourcing system", priority: "Low", deadline: "2025-03-05", estimate: "70h" }
        ]
      },
      security: {
        name: "🔐 Security & Compliance",
        tasks: [
          { id: 111, title: "🇪🇺 GDPR compliance implementation", priority: "High", deadline: "2025-03-10", estimate: "60h" },
          { id: 112, title: "🔍 Penetration testing", priority: "High", deadline: "2025-03-15", estimate: "40h" },
          { id: 113, title: "🛡️ Security headers automation", priority: "Medium", deadline: "2025-03-20", estimate: "20h" },
          { id: 114, title: "🔐 OAuth 2.0 + PKCE", priority: "High", deadline: "2025-03-25", estimate: "35h" },
          { id: 115, title: "🔑 Secrets management", priority: "High", deadline: "2025-03-30", estimate: "25h" },
          { id: 116, title: "🚨 Vulnerability scanning", priority: "Medium", deadline: "2025-04-05", estimate: "30h" },
          { id: 117, title: "📋 Incident response plan", priority: "Medium", deadline: "2025-04-10", estimate: "25h" },
          { id: 118, title: "🎫 Access control matrix", priority: "Low", deadline: "2025-04-15", estimate: "20h" },
          { id: 119, title: "🎭 Data anonymization", priority: "Medium", deadline: "2025-04-20", estimate: "40h" },
          { id: 120, title: "🏗️ Privacy by design framework", priority: "Low", deadline: "2025-04-25", estimate: "30h" }
        ]
      }
    }
  },
  ana: {
    name: "👩‍🎨 Ana Costa - Head of Design",
    emoji: "👩‍🎨",
    color: "#8B5CF6",
    areas: {
      ui_ux: {
        name: "🎨 UI/UX Design",
        tasks: [
          { id: 121, title: "🎯 Redesenhar onboarding flow", priority: "High", deadline: "2024-08-01", estimate: "40h" },
          { id: 122, title: "🎨 Design system completo", priority: "High", deadline: "2024-08-05", estimate: "60h" },
          { id: 123, title: "🌙 Protótipo dark mode", priority: "Medium", deadline: "2024-08-10", estimate: "35h" },
          { id: 124, title: "📊 Redesign dashboard analytics", priority: "High", deadline: "2024-08-15", estimate: "45h" },
          { id: 125, title: "📐 Wireframes nova feature", priority: "Medium", deadline: "2024-08-20", estimate: "25h" },
          { id: 126, title: "🎯 Iconografia customizada", priority: "Low", deadline: "2024-08-25", estimate: "30h" },
          { id: 127, title: "♿ Guidelines acessibilidade", priority: "Medium", deadline: "2024-08-30", estimate: "40h" },
          { id: 128, title: "👤 Redesign profile usuário", priority: "Medium", deadline: "2024-09-05", estimate: "30h" },
          { id: 129, title: "✨ Micro-interactions", priority: "Low", deadline: "2024-09-10", estimate: "35h" },
          { id: 130, title: "🔔 Templates notificações", priority: "Low", deadline: "2024-09-15", estimate: "20h" },
          { id: 131, title: "🎮 Gamification interface", priority: "Low", deadline: "2024-09-20", estimate: "45h" },
          { id: 132, title: "📱 Responsive guidelines", priority: "Medium", deadline: "2024-09-25", estimate: "35h" },
          { id: 133, title: "🎭 Emotion-driven design", priority: "Low", deadline: "2024-09-30", estimate: "40h" },
          { id: 134, title: "🔄 Progressive disclosure patterns", priority: "Medium", deadline: "2024-10-05", estimate: "30h" },
          { id: 135, title: "📋 Component documentation", priority: "Low", deadline: "2024-10-10", estimate: "25h" }
        ]
      },
      visual: {
        name: "🖼️ Edição de Imagem & Visual",
        tasks: [
          { id: 136, title: "🐕 50 ilustrações pets para app", priority: "High", deadline: "2024-10-15", estimate: "80h" },
          { id: 137, title: "🎭 Mascote oficial da marca", priority: "High", deadline: "2024-10-20", estimate: "40h" },
          { id: 138, title: "📱 Banners app stores", priority: "Medium", deadline: "2024-10-25", estimate: "25h" },
          { id: 139, title: "📲 Assets redes sociais", priority: "Medium", deadline: "2024-10-30", estimate: "35h" },
          { id: 140, title: "🖥️ Mockups de produto", priority: "Low", deadline: "2024-11-05", estimate: "30h" },
          { id: 141, title: "📊 Infográficos educativos", priority: "Medium", deadline: "2024-11-10", estimate: "50h" },
          { id: 142, title: "📧 Templates email marketing", priority: "Low", deadline: "2024-11-15", estimate: "20h" },
          { id: 143, title: "🎭 Avatares de pets", priority: "Low", deadline: "2024-11-20", estimate: "40h" },
          { id: 144, title: "⏳ Loading animations", priority: "Low", deadline: "2024-11-25", estimate: "25h" },
          { id: 145, title: "📸 Branded photography", priority: "Medium", deadline: "2024-11-30", estimate: "60h" },
          { id: 146, title: "🎨 Ilustrações veterinárias", priority: "Medium", deadline: "2024-12-05", estimate: "45h" },
          { id: 147, title: "🏆 Achievement badges", priority: "Low", deadline: "2024-12-10", estimate: "30h" },
          { id: 148, title: "📊 Data visualization assets", priority: "Medium", deadline: "2024-12-15", estimate: "40h" },
          { id: 149, title: "🎪 Event promotional materials", priority: "Low", deadline: "2024-12-20", estimate: "35h" },
          { id: 150, title: "🖼️ Stock photo library", priority: "Low", deadline: "2024-12-25", estimate: "50h" }
        ]
      },
      website: {
        name: "🌐 Website & Marketing",
        tasks: [
          { id: 151, title: "🏠 Redesign landing page", priority: "High", deadline: "2024-12-30", estimate: "50h" },
          { id: 152, title: "📱 Página download otimizada", priority: "High", deadline: "2025-01-05", estimate: "35h" },
          { id: 153, title: "✍️ Template blog posts", priority: "Medium", deadline: "2025-01-10", estimate: "25h" },
          { id: 154, title: "💰 Página de preços", priority: "Medium", deadline: "2025-01-15", estimate: "30h" },
          { id: 155, title: "🎨 Animações CSS", priority: "Low", deadline: "2025-01-20", estimate: "40h" },
          { id: 156, title: "🎯 CTAs optimizados", priority: "Medium", deadline: "2025-01-25", estimate: "20h" },
          { id: 157, title: "🏆 Página casos de sucesso", priority: "Low", deadline: "2025-01-30", estimate: "35h" },
          { id: 158, title: "📝 Forms contato melhorados", priority: "Low", deadline: "2025-02-05", estimate: "25h" },
          { id: 159, title: "🛠️ Página de recursos", priority: "Low", deadline: "2025-02-10", estimate: "30h" },
          { id: 160, title: "👥 Página about us", priority: "Low", deadline: "2025-02-15", estimate: "35h" }
        ]
      },
      research: {
        name: "🔬 Research & Testing",
        tasks: [
          { id: 161, title: "👥 20 testes usabilidade", priority: "High", deadline: "2025-02-20", estimate: "100h" },
          { id: 162, title: "🔥 Heatmaps comportamento", priority: "Medium", deadline: "2025-02-25", estimate: "40h" },
          { id: 163, title: "👤 Personas de usuário", priority: "High", deadline: "2025-03-01", estimate: "50h" },
          { id: 164, title: "🃏 Card sorting exercises", priority: "Medium", deadline: "2025-03-05", estimate: "30h" },
          { id: 165, title: "🗺️ Journey maps detalhados", priority: "Medium", deadline: "2025-03-10", estimate: "45h" },
          { id: 166, title: "🔍 Competitive analysis", priority: "Low", deadline: "2025-03-15", estimate: "35h" },
          { id: 167, title: "📊 Surveys satisfaction", priority: "Low", deadline: "2025-03-20", estimate: "25h" },
          { id: 168, title: "👁️ Eye-tracking studies", priority: "Low", deadline: "2025-03-25", estimate: "60h" },
          { id: 169, title: "♿ Accessibility audits", priority: "Medium", deadline: "2025-03-30", estimate: "40h" },
          { id: 170, title: "🔬 Prototype testing", priority: "Medium", deadline: "2025-04-05", estimate: "35h" }
        ]
      },
      brand: {
        name: "🎨 Brand & Identity",
        tasks: [
          { id: 171, title: "📋 Atualizar brand guidelines", priority: "High", deadline: "2025-04-10", estimate: "40h" },
          { id: 172, title: "🎨 Variações de logo", priority: "Medium", deadline: "2025-04-15", estimate: "30h" },
          { id: 173, title: "🌈 Paleta cores extendida", priority: "Medium", deadline: "2025-04-20", estimate: "25h" },
          { id: 174, title: "✍️ Typography system", priority: "Medium", deadline: "2025-04-25", estimate: "35h" },
          { id: 175, title: "🎯 Brand voice guidelines", priority: "Low", deadline: "2025-04-30", estimate: "30h" }
        ]
      },
      innovation: {
        name: "🚀 Innovation & Trends",
        tasks: [
          { id: 176, title: "🥽 AR/VR applications research", priority: "Low", deadline: "2025-05-05", estimate: "40h" },
          { id: 177, title: "🗣️ Voice UI concepts", priority: "Low", deadline: "2025-05-10", estimate: "35h" },
          { id: 178, title: "⌚ Wearable device interfaces", priority: "Low", deadline: "2025-05-15", estimate: "45h" },
          { id: 179, title: "🤖 AI-generated content tools", priority: "Low", deadline: "2025-05-20", estimate: "50h" },
          { id: 180, title: "📱 Next-gen mobile experiences", priority: "Low", deadline: "2025-05-25", estimate: "60h" }
        ]
      }
    }
  },
  roberto: {
    name: "🧠 Dr. Roberto Lima - Comportamentalista Animal",
    emoji: "🧠",
    color: "#F59E0B",
    areas: {
      behavioral_analysis: {
        name: "🧠 Análise Comportamental",
        tasks: [
          { id: 181, title: "📚 Taxonomia comportamentos caninos", priority: "High", deadline: "2024-08-15", estimate: "50h" },
          { id: 182, title: "📊 Sistema scoring comportamental", priority: "High", deadline: "2024-08-20", estimate: "40h" },
          { id: 183, title: "😰 Analisar padrões stress 1000+ pets", priority: "High", deadline: "2024-08-25", estimate: "60h" },
          { id: 184, title: "🎯 Modelo preditivo ansiedade", priority: "Medium", deadline: "2024-08-30", estimate: "45h" },
          { id: 185, title: "📈 Correlação atividade-humor", priority: "Medium", deadline: "2024-09-05", estimate: "35h" },
          { id: 186, title: "👥 Protocolo socialização", priority: "Medium", deadline: "2024-09-10", estimate: "30h" },
          { id: 187, title: "🏠 Impacto ambiente no comportamento", priority: "Low", deadline: "2024-09-15", estimate: "40h" },
          { id: 188, title: "⚠️ Early warning problemas", priority: "High", deadline: "2024-09-20", estimate: "50h" },
          { id: 189, title: "🎮 Padrões brincadeira por idade", priority: "Low", deadline: "2024-09-25", estimate: "25h" },
          { id: 190, title: "😊 Métrica bem-estar animal", priority: "Medium", deadline: "2024-09-30", estimate: "35h" },
          { id: 191, title: "🌙 Análise padrões sono", priority: "Medium", deadline: "2024-10-05", estimate: "30h" },
          { id: 192, title: "🍽️ Comportamentos alimentares", priority: "Medium", deadline: "2024-10-10", estimate: "35h" },
          { id: 193, title: "🏃 Padrões exercício e energia", priority: "Low", deadline: "2024-10-15", estimate: "25h" },
          { id: 194, title: "👪 Dinâmica família multi-pet", priority: "Low", deadline: "2024-10-20", estimate: "40h" },
          { id: 195, title: "🎵 Resposta estímulos sonoros", priority: "Low", deadline: "2024-10-25", estimate: "30h" }
        ]
      },
      ml_models: {
        name: "🤖 Machine Learning Models",
        tasks: [
          { id: 196, title: "🚨 Modelo detecção agressividade", priority: "High", deadline: "2024-10-30", estimate: "60h" },
          { id: 197, title: "💕 Algoritmo matching pet-tutor", priority: "Medium", deadline: "2024-11-05", estimate: "50h" },
          { id: 198, title: "🏃 Sistema recomendação exercícios", priority: "High", deadline: "2024-11-10", estimate: "45h" },
          { id: 199, title: "📝 NLP análise feedback", priority: "Medium", deadline: "2024-11-15", estimate: "40h" },
          { id: 200, title: "💔 Modelo previsão abandono", priority: "High", deadline: "2024-11-20", estimate: "55h" },
          { id: 201, title: "🎯 Clustering comportamental", priority: "Medium", deadline: "2024-11-25", estimate: "35h" },
          { id: 202, title: "🚨 Anomaly detection comportamento", priority: "Medium", deadline: "2024-11-30", estimate: "40h" },
          { id: 203, title: "😊 Sentiment analysis pets", priority: "Low", deadline: "2024-12-05", estimate: "35h" },
          { id: 204, title: "⚡ Otimização rotina", priority: "Low", deadline: "2024-12-10", estimate: "45h" },
          { id: 205, title: "🎯 Reinforcement learning treinamento", priority: "Low", deadline: "2024-12-15", estimate: "60h" },
          { id: 206, title: "🔮 Predição mudanças comportamentais", priority: "Medium", deadline: "2024-12-20", estimate: "50h" },
          { id: 207, title: "📊 Modelo classificação temperamento", priority: "Medium", deadline: "2024-12-25", estimate: "45h" },
          { id: 208, title: "🎪 Sistema recomendação atividades", priority: "Low", deadline: "2024-12-30", estimate: "40h" },
          { id: 209, title: "🏆 Gamification behavior engine", priority: "Low", deadline: "2025-01-05", estimate: "50h" },
          { id: 210, title: "🌟 Modelo avaliação progresso", priority: "Medium", deadline: "2025-01-10", estimate: "35h" }
        ]
      },
      app_features: {
        name: "📱 App Features Comportamentais",
        tasks: [
          { id: 211, title: "😊 Diário humor pets", priority: "High", deadline: "2025-01-15", estimate: "35h" },
          { id: 212, title: "📊 Tracking atividades", priority: "High", deadline: "2025-01-20", estimate: "40h" },
          { id: 213, title: "⚠️ Alerts comportamento anômalo", priority: "High", deadline: "2025-01-25", estimate: "30h" },
          { id: 214, title: "📈 Feature training progress", priority: "Medium", deadline: "2025-01-30", estimate: "35h" },
          { id: 215, title: "🎯 Goals comportamentais", priority: "Medium", deadline: "2025-02-05", estimate: "25h" },
          { id: 216, title: "📲 Social sharing conquistas", priority: "Low", deadline: "2025-02-10", estimate: "30h" },
          { id: 217, title: "🎮 Gamification treinamento", priority: "Low", deadline: "2025-02-15", estimate: "45h" },
          { id: 218, title: "🏆 Sistema recompensas virtuais", priority: "Low", deadline: "2025-02-20", estimate: "35h" },
          { id: 219, title: "📊 Peer comparison opcional", priority: "Low", deadline: "2025-02-25", estimate: "40h" },
          { id: 220, title: "🧘 Mindfulness para pets", priority: "Low", deadline: "2025-03-01", estimate: "50h" },
          { id: 221, title: "📹 Video analysis comportamento", priority: "Medium", deadline: "2025-03-05", estimate: "60h" },
          { id: 222, title: "🎵 Music therapy integration", priority: "Low", deadline: "2025-03-10", estimate: "35h" },
          { id: 223, title: "📝 Behavioral journal", priority: "Medium", deadline: "2025-03-15", estimate: "30h" },
          { id: 224, title: "🎪 Interactive training games", priority: "Low", deadline: "2025-03-20", estimate: "45h" },
          { id: 225, title: "👥 Pet social network features", priority: "Low", deadline: "2025-03-25", estimate: "50h" }
        ]
      },
      content: {
        name: "✍️ Conteúdo Educativo",
        tasks: [
          { id: 226, title: "📝 25 artigos comportamento canino", priority: "Medium", deadline: "2025-03-30", estimate: "100h" },
          { id: 227, title: "🐱 20 posts comportamento felino", priority: "Medium", deadline: "2025-04-05", estimate: "80h" },
          { id: 228, title: "🎓 Guia adestramento positivo", priority: "High", deadline: "2025-04-10", estimate: "40h" },
          { id: 229, title: "👀 Série linguagem corporal", priority: "Medium", deadline: "2025-04-15", estimate: "50h" },
          { id: 230, title: "⚠️ Problemas comportamentais comuns", priority: "High", deadline: "2025-04-20", estimate: "45h" },
          { id: 231, title: "🏠 Guia enriquecimento ambiental", priority: "Medium", deadline: "2025-04-25", estimate: "35h" },
          { id: 232, title: "💕 Conteúdo pets rescue", priority: "Low", deadline: "2025-04-30", estimate: "30h" },
          { id: 233, title: "👥 Multiple pets households", priority: "Low", deadline: "2025-05-05", estimate: "35h" },
          { id: 234, title: "🤲 Série pet therapy", priority: "Low", deadline: "2025-05-10", estimate: "40h" },
          { id: 235, title: "👋 Guia introdução novos pets", priority: "Medium", deadline: "2025-05-15", estimate: "30h" },
          { id: 236, title: "🌙 Distúrbios do sono em pets", priority: "Medium", deadline: "2025-05-20", estimate: "35h" },
          { id: 237, title: "🏃 Exercícios mentais para pets", priority: "Low", deadline: "2025-05-25", estimate: "30h" },
          { id: 238, title: "🎵 Musicoterapia para animais", priority: "Low", deadline: "2025-05-30", estimate: "25h" },
          { id: 239, title: "🧠 Envelhecimento cognitivo", priority: "Medium", deadline: "2025-06-05", estimate: "40h" },
          { id: 240, title: "📚 E-book comportamento completo", priority: "High", deadline: "2025-06-10", estimate: "80h" }
        ]
      }
    }
  },
  lucia: {
    name: "📊 Lucia Oliveira - Data Scientist",
    emoji: "📊",
    color: "#EF4444",
    areas: {
      analysis: {
        name: "📊 Data Analysis & Insights",
        tasks: [
          { id: 241, title: "📈 Analisar 100k+ registros atividade", priority: "High", deadline: "2024-09-01", estimate: "50h" },
          { id: 242, title: "📊 Dashboard executivo Tableau", priority: "High", deadline: "2024-09-05", estimate: "40h" },
          { id: 243, title: "📉 Churn analysis modelo", priority: "High", deadline: "2024-09-10", estimate: "45h" },
          { id: 244, title: "📱 User engagement patterns", priority: "Medium", deadline: "2024-09-15", estimate: "35h" },
          { id: 245, title: "💰 Customer lifetime value", priority: "Medium", deadline: "2024-09-20", estimate: "40h" },
          { id: 246, title: "👥 Cohort analysis framework", priority: "Medium", deadline: "2024-09-25", estimate: "35h" },
          { id: 247, title: "📊 Retention analysis dashboard", priority: "Medium", deadline: "2024-09-30", estimate: "30h" },
          { id: 248, title: "🌿 Seasonal trends usage", priority: "Low", deadline: "2024-10-05", estimate: "25h" },
          { id: 249, title: "🎯 Market segmentation analysis", priority: "Low", deadline: "2024-10-10", estimate: "40h" },
          { id: 250, title: "🏆 Competitive analysis framework", priority: "Low", deadline: "2024-10-15", estimate: "35h" },
          { id: 251, title: "📈 Growth metrics dashboard", priority: "Medium", deadline: "2024-10-20", estimate: "30h" },
          { id: 252, title: "💡 Feature usage analytics", priority: "Medium", deadline: "2024-10-25", estimate: "35h" },
          { id: 253, title: "🔍 Funnel analysis optimization", priority: "High", deadline: "2024-10-30", estimate: "40h" },
          { id: 254, title: "📊 Revenue attribution model", priority: "Medium", deadline: "2024-11-05", estimate: "45h" },
          { id: 255, title: "🎯 Conversion rate analysis", priority: "High", deadline: "2024-11-10", estimate: "35h" },
          { id: 256, title: "📱 Mobile vs web analytics", priority: "Low", deadline: "2024-11-15", estimate: "25h" },
          { id: 257, title: "🌍 Geographic usage patterns", priority: "Low", deadline: "2024-11-20", estimate: "30h" },
          { id: 258, title: "⏰ Time-series forecasting", priority: "Medium", deadline: "2024-11-25", estimate: "50h" },
          { id: 259, title: "📊 Custom metrics framework", priority: "Low", deadline: "2024-11-30", estimate: "40h" },
          { id: 260, title: "🎪 Event correlation analysis", priority: "Low", deadline: "2024-12-05", estimate: "35h" }
        ]
      },
      ml_pipeline: {
        name: "🤖 Machine Learning Pipeline",
        tasks: [
          { id: 261, title: "🔄 Otimizar data preprocessing", priority: "High", deadline: "2024-12-10", estimate: "45h" },
          { id: 262, title: "⚙️ Feature engineering automation", priority: "High", deadline: "2024-12-15", estimate: "50h" },
          { id: 263, title: "📊 Model evaluation framework", priority: "High", deadline: "2024-12-20", estimate: "40h" },
          { id: 264, title: "🎯 Automated hyperparameter tuning", priority: "Medium", deadline: "2024-12-25", estimate: "35h" },
          { id: 265, title: "✅ Cross-validation strategy", priority: "Medium", deadline: "2024-12-30", estimate: "30h" },
          { id: 266, title: "🎭 Ensemble methods", priority: "Medium", deadline: "2025-01-05", estimate: "45h" },
          { id: 267, title: "🚨 Model drift detection", priority: "High", deadline: "2025-01-10", estimate: "40h" },
          { id: 268, title: "📚 Online learning sistema", priority: "Low", deadline: "2025-01-15", estimate: "55h" },
          { id: 269, title: "💡 Explainable AI dashboard", priority: "Medium", deadline: "2025-01-20", estimate: "50h" },
          { id: 270, title: "📊 Performance monitoring alerts", priority: "Medium", deadline: "2025-01-25", estimate: "35h" },
          { id: 271, title: "🔄 Auto-retraining pipeline", priority: "Medium", deadline: "2025-01-30", estimate: "60h" },
          { id: 272, title: "🎯 Multi-model orchestration", priority: "Low", deadline: "2025-02-05", estimate: "45h" },
          { id: 273, title: "📈 Model versioning system", priority: "Medium", deadline: "2025-02-10", estimate: "35h" },
          { id: 274, title: "🔍 Data quality monitoring", priority: "High", deadline: "2025-02-15", estimate: "40h" },
          { id: 275, title: "🎪 Experiment tracking advanced", priority: "Low", deadline: "2025-02-20", estimate: "30h" },
          { id: 276, title: "🛠️ MLOps best practices", priority: "Medium", deadline: "2025-02-25", estimate: "50h" }
        ]
      },
      predictive: {
        name: "🔮 Predictive Analytics",
        tasks: [
          { id: 277, title: "🏥 Health risk prediction", priority: "High", deadline: "2025-03-01", estimate: "60h" },
          { id: 278, title: "⚖️ Weight management predictor", priority: "High", deadline: "2025-03-05", estimate: "45h" },
          { id: 279, title: "⏰ Life expectancy estimator", priority: "Medium", deadline: "2025-03-10", estimate: "50h" },
          { id: 280, title: "🔄 Behavioral change predictor", priority: "Medium", deadline: "2025-03-15", estimate: "40h" },
          { id: 281, title: "🥘 Nutrition optimization model", priority: "High", deadline: "2025-03-20", estimate: "55h" },
          { id: 282, title: "🌿 Seasonal activity predictor", priority: "Low", deadline: "2025-03-25", estimate: "35h" },
          { id: 283, title: "🏥 Vet visit recommendation", priority: "Medium", deadline: "2025-03-30", estimate: "40h" },
          { id: 284, title: "💊 Supplement need predictor", priority: "Low", deadline: "2025-04-05", estimate: "35h" },
          { id: 285, title: "🏃 Exercise optimization model", priority: "Low", deadline: "2025-04-10", estimate: "45h" },
          { id: 286, title: "📊 Diet adherence predictor", priority: "Medium", deadline: "2025-04-15", estimate: "40h" },
          { id: 287, title: "🎯 Personalization engine advanced", priority: "High", deadline: "2025-04-20", estimate: "70h" },
          { id: 288, title: "🔮 Long-term health forecasting", priority: "Medium", deadline: "2025-04-25", estimate: "60h" },
          { id: 289, title: "📈 Growth prediction model", priority: "Low", deadline: "2025-04-30", estimate: "35h" },
          { id: 290, title: "🎪 Activity recommendation engine", priority: "Low", deadline: "2025-05-05", estimate: "45h" },
          { id: 291, title: "🏆 Success prediction model", priority: "Medium", deadline: "2025-05-10", estimate: "50h" }
        ]
      },
      engineering: {
        name: "🔧 Data Engineering",
        tasks: [
          { id: 292, title: "🔄 ETL pipelines optimization", priority: "High", deadline: "2025-05-15", estimate: "50h" },
          { id: 293, title: "⚡ Real-time streaming analytics", priority: "High", deadline: "2025-05-20", estimate: "60h" },
          { id: 294, title: "📊 Data quality monitoring", priority: "High", deadline: "2025-05-25", estimate: "40h" },
          { id: 295, title: "🗺️ Data lineage tracking", priority: "Medium", deadline: "2025-05-30", estimate: "35h" },
          { id: 296, title: "🧪 Automated data testing", priority: "Medium", deadline: "2025-06-05", estimate: "45h" },
          { id: 297, title: "🔄 Schema evolution framework", priority: "Low", deadline: "2025-06-10", estimate: "30h" },
          { id: 298, title: "📚 Data catalog system", priority: "Low", deadline: "2025-06-15", estimate: "40h" },
          { id: 299, title: "🔐 Privacy-preserving analytics", priority: "Medium", deadline: "2025-06-20", estimate: "55h" },
          { id: 300, title: "🌐 Data mesh architecture", priority: "Low", deadline: "2025-06-25", estimate: "70h" }
        ]
      }
    }
  },
  pedro: {
    name: "👨‍💼 Pedro Rodrigues - Community Manager",
    emoji: "👨‍💼",
    color: "#06B6D4",
    areas: {
      community: {
        name: "👥 Community Building",
        tasks: [
          { id: 301, title: "🌍 5 grupos regionais Discord", priority: "High", deadline: "2024-09-15", estimate: "40h" },
          { id: 302, title: "🎪 12 meetups virtuais anuais", priority: "High", deadline: "2024-09-20", estimate: "60h" },
          { id: 303, title: "👑 Programa embaixadores", priority: "Medium", deadline: "2024-09-25", estimate: "50h" },
          { id: 304, title: "📲 50 posts engajadores/mês", priority: "High", deadline: "2024-09-30", estimate: "80h" },
          { id: 305, title: "📸 Concurso fotos pets", priority: "Medium", deadline: "2024-10-05", estimate: "35h" },
          { id: 306, title: "🏆 Sistema de badges", priority: "Low", deadline: "2024-10-10", estimate: "30h" },
          { id: 307, title: "🔗 Programa referral", priority: "Medium", deadline: "2024-10-15", estimate: "45h" },
          { id: 308, title: "💬 AMA com veterinários", priority: "Medium", deadline: "2024-10-20", estimate: "40h" },
          { id: 309, title: "🏅 Challenges mensais", priority: "Low", deadline: "2024-10-25", estimate: "35h" },
          { id: 310, title: "🏠 Eventos adoção virtual", priority: "Low", deadline: "2024-10-30", estimate: "50h" },
          { id: 311, title: "🎓 Webinars educativos", priority: "Medium", deadline: "2024-11-05", estimate: "60h" },
          { id: 312, title: "🤝 Partnerships com abrigos", priority: "Medium", deadline: "2024-11-10", estimate: "45h" },
          { id: 313, title: "🎮 Gamification comunidade", priority: "Low", deadline: "2024-11-15", estimate: "40h" },
          { id: 314, title: "📊 Community analytics dashboard", priority: "Low", deadline: "2024-11-20", estimate: "35h" },
          { id: 315, title: "🎪 Eventos presenciais", priority: "Low", deadline: "2024-11-25", estimate: "80h" }
        ]
      },
      content: {
        name: "📱 Content Creation & Management",
        tasks: [
          { id: 316, title: "📷 100 posts Instagram", priority: "High", deadline: "2024-11-30", estimate: "100h" },
          { id: 317, title: "📖 50 stories interativos", priority: "High", deadline: "2024-12-05", estimate: "75h" },
          { id: 318, title: "📧 24 newsletters mensais", priority: "Medium", deadline: "2024-12-10", estimate: "120h" },
          { id: 319, title: "🎥 12 vídeos educativos", priority: "Medium", deadline: "2024-12-15", estimate: "150h" },
          { id: 320, title: "🐦 200 posts Twitter", priority: "Medium", deadline: "2024-12-20", estimate: "60h" },
          { id: 321, title: "💼 30 posts LinkedIn", priority: "Low", deadline: "2024-12-25", estimate: "45h" },
          { id: 322, title: "🎙️ 12 webinars", priority: "Medium", deadline: "2024-12-30", estimate: "100h" },
          { id: 323, title: "💡 52 Tuesday Tips", priority: "Low", deadline: "2025-01-05", estimate: "75h" },
          { id: 324, title: "🎧 6 podcasts episodes", priority: "Low", deadline: "2025-01-10", estimate: "80h" },
          { id: 325, title: "🐾 365 daily pet facts", priority: "Low", deadline: "2025-01-15", estimate: "50h" },
          { id: 326, title: "📹 TikTok content strategy", priority: "Medium", deadline: "2025-01-20", estimate: "60h" },
          { id: 327, title: "📊 Infográficos mensais", priority: "Low", deadline: "2025-01-25", estimate: "40h" },
          { id: 328, title: "🎬 YouTube channel setup", priority: "Medium", deadline: "2025-01-30", estimate: "70h" },
          { id: 329, title: "📱 Reels Instagram strategy", priority: "Medium", deadline: "2025-02-05", estimate: "50h" },
          { id: 330, title: "🎪 User-generated content campaigns", priority: "Low", deadline: "2025-02-10", estimate: "45h" },
          { id: 331, title: "📚 Content calendar automation", priority: "Medium", deadline: "2025-02-15", estimate: "35h" },
          { id: 332, title: "🎨 Brand storytelling strategy", priority: "Low", deadline: "2025-02-20", estimate: "40h" },
          { id: 333, title: "📈 Content performance optimization", priority: "Medium", deadline: "2025-02-25", estimate: "30h" }
        ]
      },
      analytics: {
        name: "📈 Analytics & Growth",
        tasks: [
          { id: 334, title: "📊 Analisar engagement 10k+ posts", priority: "High", deadline: "2025-03-01", estimate: "60h" },
          { id: 335, title: "📱 Dashboard métricas sociais", priority: "High", deadline: "2025-03-05", estimate: "40h" },
          { id: 336, title: "🚀 Growth hacking strategies", priority: "Medium", deadline: "2025-03-10", estimate: "45h" },
          { id: 337, title: "🔍 Competitor social analysis", priority: "Medium", deadline: "2025-03-15", estimate: "35h" },
          { id: 338, title: "👑 Influencer outreach program", priority: "Medium", deadline: "2025-03-20", estimate: "50h" },
          { id: 339, title: "🔥 Viral content strategy", priority: "Low", deadline: "2025-03-25", estimate: "40h" },
          { id: 340, title: "🧪 A/B testing posts", priority: "Low", deadline: "2025-03-30", estimate: "30h" },
          { id: 341, title: "⏰ Optimal posting times", priority: "Low", deadline: "2025-04-05", estimate: "25h" },
          { id: 342, title: "# Hashtag strategy", priority: "Low", deadline: "2025-04-10", estimate: "20h" },
          { id: 343, title: "📊 Cross-platform analysis", priority: "Low", deadline: "2025-04-15", estimate: "35h" },
          { id: 344, title: "🎯 Audience segmentation", priority: "Medium", deadline: "2025-04-20", estimate: "40h" },
          { id: 345, title: "📈 ROI measurement framework", priority: "Medium", deadline: "2025-04-25", estimate: "35h" }
        ]
      },
      support: {
        name: "🙋 User Experience & Support",
        tasks: [
          { id: 346, title: "💬 1000+ comentários mensais", priority: "High", deadline: "2025-04-30", estimate: "80h" },
          { id: 347, title: "❓ FAQ dinâmico", priority: "High", deadline: "2025-05-05", estimate: "30h" },
          { id: 348, title: "🤖 Chatbot para suporte", priority: "Medium", deadline: "2025-05-10", estimate: "50h" },
          { id: 349, title: "🎥 Tutorial videos", priority: "Medium", deadline: "2025-05-15", estimate: "60h" },
          { id: 350, title: "📧 Email onboarding sequence", priority: "Medium", deadline: "2025-05-20", estimate: "40h" },
          { id: 351, title: "📝 User feedback collection", priority: "Medium", deadline: "2025-05-25", estimate: "25h" },
          { id: 352, title: "🛡️ Community guidelines", priority: "High", deadline: "2025-05-30", estimate: "30h" },
          { id: 353, title: "🎪 Crisis management protocol", priority: "Medium", deadline: "2025-06-05", estimate: "35h" },
          { id: 354, title: "📊 Satisfaction surveys", priority: "Low", deadline: "2025-06-10", estimate: "25h" },
          { id: 355, title: "📚 Knowledge base articles", priority: "Low", deadline: "2025-06-15", estimate: "40h" }
        ]
      },
      partnerships: {
        name: "🤝 Partnerships & Collaborations",
        tasks: [
          { id: 356, title: "🤝 20 partnerships influencers", priority: "High", deadline: "2025-06-20", estimate: "80h" },
          { id: 357, title: "📢 Co-marketing campaigns", priority: "Medium", deadline: "2025-06-25", estimate: "50h" },
          { id: 358, title: "💰 Affiliate program", priority: "Medium", deadline: "2025-06-30", estimate: "40h" },
          { id: 359, title: "🏪 Partnerships pet stores", priority: "Medium", deadline: "2025-07-05", estimate: "60h" },
          { id: 360, title: "📊 Partnership tracking system", priority: "Low", deadline: "2025-07-10", estimate: "25h" }
        ]
      }
    }
  }
};