/**
 * 网站内容配置文件
 */

export const SITE_CONFIG = {
  title: "阿衡",
  author: "阿衡",
  authorEn: "Niklas Peterson",
  location: "瑞典",
  email: "1920199157@qq.com",
  copyright: "© 2026 阿衡",
  builtWith: "使用 React 和 Motion 构建",
};

export const SOCIAL_LINKS = {
  twitter: "mailto:1920199157@qq.com",
  dribbble: "#",
  instagram: "#",
  github: "#",
  linkedin: "#",
};

export const NAV_ITEMS = [
  { label: "我的作品", href: "work" },
  { label: "关于我", href: "about" },
  { label: "联系我", href: "contact" },
];

export const HERO_CONFIG = {
  title: "用文字和视觉画面赋予\n品牌长久生命力。",
  subtitle: "阿衡——专注文案创作与全域新媒体整合运营<br/>覆盖多平台账号统筹、内容脚本定制、IP 人设精准打造<br/>以专业运营筑牢品牌信任背书，搭建全网品牌视觉与口碑矩阵，深度赋能品牌商业价值",
  sideProjects: [
    { name: "Hydrify", link: "#" },
    { name: "Titls", link: "#" },
  ],
  ctaButton: "打个招呼",
};

export const PROJECTS = [
  {
    id: "project-1",
    title: "Hydrify",
    category: "移动应用",
    description: "一款专注健康的智能饮水追踪应用，具备智能提醒功能。",
    image: "",
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
    link: "#",
    featured: true,
  },
  {
    id: "project-2",
    title: "Titls",
    category: "网页平台",
    description: "为高能创意团队打造的现代化资产管理平台。",
    image: "",
    color: "bg-gradient-to-br from-purple-400 to-purple-600",
    link: "#",
    featured: false,
  },
  {
    id: "project-3",
    title: "LottieFiles",
    category: "产品设计",
    description: "正在塑造网页动态设计的未来。",
    image: "",
    color: "bg-gradient-to-br from-pink-400 to-pink-600",
    link: "#",
    featured: false,
  },
];

export const PROJECT_TABS = [
  { label: "全部", value: "all" },
  { label: "宣传文案", value: "copywriting" },
  { label: "视觉设计", value: "visual" },
  { label: "摄影作品", value: "photography" },
  { label: "摄像剪辑", value: "video" },
  { label: "网页/小程序搭建", value: "web" },
];

export const ABOUT_CONFIG = {
  title: "关于我",
  description: "拥有超过7年的经验，包括新媒体账号0-1搭建与运营，网站及小程序0-1搭建等，能快速理解新行业的品牌调性与用户需求。\n\n具备独立图片文本内容创作能力，熟练使用各类图文排版软件（秀米、135编辑器、Photoshop等），可独立完成新闻稿及图片宣传物料海报等。\n\n熟悉小红书、公众号、抖音、微博等自媒体平台规则，掌握拍摄剪辑技能（剪映、PR等），可独立完成账号规划、脚本创作、人设打造等短视频规划。",
  skills: ["秀米", "135编辑器", "Photoshop", "剪映", "Premiere"],
};

export const EXPERIENCE = [
  {
    company: "上海和宜泽教育科技有限公司",
    role: "新媒体运营",
    period: "2024 — 2026",
    description: "负责公司各类文案的创作，包括夏校/插班介绍文案、活动推广文案、公众号推文等，确保内容符合低龄留学教育陪跑人的人设；\n负责公司品牌视觉设计维护，涵盖业务的宣传海报、项目手册、PPT及名片等对外物料的设计与落地；\n为创始人量身打造「11年专业留学规划师」个人品牌形象。通过策划选题、撰写脚本、指导拍摄并剪辑，发布系列视频50+，提升品牌可信度；\n配合公司跨部门工作，高效对接需求，完成领导交办的其他相关工作。",
  },
  {
    company: "上海公恒房地产经纪有限公司",
    role: "新媒体运营",
    period: "2022 — 2024",
    description: "了解市场动态，实地看房，拍摄一手独家房源照片并进行美化；\n负责公司服务号及官网的原创内容撰写和日常新旧房源更新等运营；\n负责小红书及视频号视频内容的脚本大纲及后续宣发文案；\n负责代言人宣发新闻稿，主流媒体宣传稿等企业品牌宣传文字撰写，企业PPT、名片等物料制作，确保内容符合品牌调性；\n根据品牌需求业务宣传需要，撰写编辑企业内刊杂志并落地印发；\n策划并主导5场推广宣传，网媒+线下大屏等，独立与渠道方沟通落地执行，并跟进推广活动进度及后续数据检测及分析；\n负责对接上海房地产协会，对公司洋房销售人员进行定期培训，考证，缴费，换证等监督；\n负责企业关键词SEO推广投流。",
  },
  {
    company: "江苏苏公子酒业有限公司",
    role: "新媒体运营",
    period: "2018 — 2022",
    description: "公众号、知乎、网站后台等推文主题策划选题、内容编写、排版及发表；\n独立制作宣传图片、展架、海报等物料，产品视频剪辑等；\n从0到1网站UI搭建及小程序UI搭建，电商平台销售数据整合；\n负责私域流量（微信群）的日常维护、需求统计、日活以及售后，定期做活跃粉丝有奖活动推送，落实每期礼品具体发放，提升粉丝粘性。",
  },
];

export const CONTACT_CONFIG = {
  headline: "准备开始了吗？",
  title: "让我们一起共同成长",
  cards: [
    {
      platform: "邮箱",
      label: "发邮件给我",
      description: "1920199157@qq.com",
      link: "mailto:1920199157@qq.com",
      icon: "mail",
    },
    {
      platform: "微信",
      label: "微信",
      description: "Canace_SP",
      link: "#",
      icon: "wechat",
    },
  ],
};
