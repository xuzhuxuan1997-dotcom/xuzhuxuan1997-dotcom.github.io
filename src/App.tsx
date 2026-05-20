/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  Mail, 
  Github, 
  Linkedin,
  MessageCircle,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ============================================
// 导入配置文件
// ============================================
import { 
  SITE_CONFIG,
  SOCIAL_LINKS,
  NAV_ITEMS,
  HERO_CONFIG,
  PROJECTS,
  PROJECT_TABS,
  ABOUT_CONFIG,
  EXPERIENCE,
  CONTACT_CONFIG
} from "./config";

// ============================================
// 项目数据 - 你的图片在这里展示
// ============================================
const MY_PROJECTS = [
  {
    id: "my-project-1",
    title: "君子同好 共饮一杯白酒",
    category: "网页搭建",
    description: "传统白酒Banner",
    image: "/images/hero-bg.jpg",
    link: "#",
    featured: true,
    gallery: [
      "/images/hero-bg.jpg",
    ],
  },
  {
    id: "my-project-2",
    title: "洋房秘史",
    category: "TVC脚本",
    description: "代言人罗中旭倾情演绎老洋房系列短剧，扩大品牌影响力。",
    image: "/images/sinianta.jpg",
    link: "#",
    featured: false,
    gallery: [
      "/images/sinianta.jpg",
    ],
  },
  {
    id: "my-project-3",
    title: "整体视觉美学",
    category: "视觉设计",
    description: "统一企业VI视觉，海报｜宣传内刊｜官网搭建｜小程序搭建｜PPT等",
    image: "/images/neiqi.jpg",
    link: "#",
    featured: false,
    gallery: [
      "/images/neiqi.jpg",
    ],
  },
  {
    id: "my-project-4",
    title: "推文展示",
    category: "微信公众号宣传",
    description: "展现品牌动态、扩大内容曝光，打造品牌形象。",
    image: "/images/wechat-tuwen.png",
    link: "#",
    featured: false,
    gallery: [
      "/images/wechat-tuwen.png",
    ],
  },
  {
    id: "my-project-5",
    title: "静态摄影区",
    category: "摄影画面",
    description: "发掘美的角度，统一品牌美学，展现产品优势。",
    image: "/images/jingtaisheying.jpg",
    link: "#",
    featured: false,
    gallery: [
      "/images/jingtaisheying.jpg",
    ],
  },
  {
    id: "my-project-6",
    title: "口播拍剪",
    category: "拍摄剪辑区",
    description: "全渠道社媒平台内容规划，主导拍摄并剪辑成品，口播及公司活动记录等。",
    image: "/images/huodong.jpg",
    link: "#",
    featured: false,
    gallery: [
      "/images/huodong.jpg",
    ],
  },
  {
    id: "my-project-7",
    title: "旅游宣传",
    category: "夏校宣传区",
    description: "带领全世界青少年中国文化爱好者，领略中国历史古迹，五千年文化，北京探索营，西安探索营。",
    image: "/images/xialan.jpg",
    link: "#",
    featured: false,
    gallery: [
      "/images/xialan.jpg",
    ],
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white pb-20">
      {/* 导航栏 */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/80 backdrop-blur-md' : 'py-8 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-semibold tracking-tighter"
          >
            {SITE_CONFIG.title}
          </motion.div>
          
          <div className="hidden md:flex gap-12 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={`#${item.href}`} className="hover:opacity-50 transition-opacity">
                {item.label}
              </a>
            ))}
          </div>

          <motion.a 
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-full text-sm font-medium hover:scale-105 active:scale-95 transition-all shadow-lg overflow-hidden relative group"
          >
            <span className="relative z-10 flex items-center gap-2">
              {HERO_CONFIG.ctaButton} <MessageCircle size={14} />
            </span>
          </motion.a>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* 主视觉区域 */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-80 -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-7xl font-display font-medium leading-normal tracking-tight max-w-4xl mb-12 whitespace-pre-line"
          >
            {HERO_CONFIG.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-2xl space-y-6"
          >
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light whitespace-pre-line">
阿衡——专注文案创作与全域新媒体整合运营<br/>覆盖多平台账号统筹、内容脚本定制、IP 人设精准打造<br/>以专业运营筑牢品牌信任背书，搭建全网品牌视觉与口碑矩阵，深度赋能品牌商业价值
            </p>
          </motion.div>
        </div>
      </section>

      {/* 作品展示 - 你的图片在这里 */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-display font-medium tracking-tight mb-4">精选作品</h2>
          </div>
          <div className="hidden md:flex gap-4">
            {PROJECT_TABS.map(tab => (
              <button key={tab.value} className="text-sm font-medium px-4 py-2 rounded-full border border-gray-100 hover:bg-gray-50 transition-colors">
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MY_PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-50 border border-gray-100 flex flex-col justify-end p-8 cursor-pointer ${index === 0 ? 'md:col-span-2 aspect-video md:aspect-[21/9]' : ''}`}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              {/* 如果有图片则显示图片，否则显示渐变背景 */}
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity bg-gradient-to-br from-blue-400 to-purple-600`} />
              )}
              
              {/* 文字区域渐变背景 */}
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
              
              <div className="relative z-20 flex justify-between items-end">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-white mb-2 block bg-black/60 px-2 py-1 rounded">{project.category}</span>
                  <h3 className="text-3xl font-display font-medium tracking-tight group-hover:translate-x-1 transition-transform text-white drop-shadow-lg">{project.title}</h3>
                  <p className="text-gray-100 mt-2 max-w-xs drop-shadow-md">{project.description}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/90 border border-gray-100 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all transform group-hover:rotate-45">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 关于部分 */}
      <section id="about" className="bg-gray-50 py-32 mt-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-display font-medium tracking-tight mb-8">{ABOUT_CONFIG.title}</h2>
            <div className="text-gray-500 leading-relaxed font-light mb-8 space-y-4">
              {ABOUT_CONFIG.description.split('\n\n').map((para, i) => (
                <p key={i} className="text-base">{para}</p>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              {ABOUT_CONFIG.skills.map(skill => (
                <span key={skill} className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="space-y-12">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">工作经历</h3>
            <div className="space-y-10">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="group flex justify-between gap-4 border-b border-gray-200 pb-8">
                  <div>
                    <h4 className="text-xl font-medium mb-1 group-hover:text-gray-500 transition-colors">{exp.role}</h4>
                    <p className="text-gray-400">{exp.company}</p>
                    <div className="text-sm text-gray-400 mt-2 font-light space-y-1">
                      {exp.description.split('；\n').map((item, j) => (
                        <p key={j}>·{item}</p>
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 tabular-nums whitespace-nowrap">{exp.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 联系部分 */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6 block">{CONTACT_CONFIG.headline}</span>
          <h2 className="text-6xl md:text-8xl font-display font-medium tracking-tight mb-12">{CONTACT_CONFIG.title}</h2>
          
          <div className="flex justify-center gap-8 max-w-2xl mx-auto">
            {CONTACT_CONFIG.cards.map((card) => (
              <a 
                key={card.platform}
                href={card.link} 
                className="group flex-1 max-w-xs p-10 rounded-3xl border border-gray-100 bg-white hover:bg-gray-50 transition-all text-center"
              >
                {card.icon === 'mail' && <Mail className="mx-auto mb-6 text-gray-400 group-hover:text-brand transition-colors w-10 h-10" />}
                {card.icon === 'wechat' && (
                  <svg className="mx-auto mb-6 w-10 h-10 text-gray-400 group-hover:text-brand transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm3.636 4.475c-1.628-.078-3.178.396-4.406 1.414-1.29 1.07-1.966 2.642-1.815 4.27.142 1.537.965 2.906 2.289 3.834a.492.492 0 0 1 .177.554l-.263.998c-.016.058-.04.117-.04.177 0 .136.108.246.242.246a.27.27 0 0 0 .14-.045l1.578-.925a.72.72 0 0 1 .596-.082 8.46 8.46 0 0 0 2.327.334c3.665 0 6.655-2.518 6.655-5.622 0-3.103-2.99-5.62-6.655-5.62-.078 0-.154.003-.23.008l-.295-.241zm-2.236 2.959c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982z"/>
                  </svg>
                )}
                <p className="text-xl font-medium">{card.label}</p>
                <p className="text-sm text-gray-400 mt-1">{card.description}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 页脚 */}
      <footer className="max-w-7xl mx-auto px-6 pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 border-t border-gray-100">
        <p>{SITE_CONFIG.copyright}。{SITE_CONFIG.builtWith}。</p>
        <div className="flex gap-8 mt-6 md:mt-0 uppercase tracking-widest text-[10px] font-semibold">
          <a href={SOCIAL_LINKS.twitter} className="hover:text-brand transition-colors">Email</a>
          <a href={SOCIAL_LINKS.dribbble} className="hover:text-brand transition-colors">Wechat</a>
          <a href={SOCIAL_LINKS.instagram} className="hover:text-brand transition-colors">Website</a>
        </div>
      </footer>
    </div>
  );
}
