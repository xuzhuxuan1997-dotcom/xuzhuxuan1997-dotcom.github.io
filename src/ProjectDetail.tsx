import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

// 项目数据（与 App.tsx 保持同步）
const MY_PROJECTS = [
  {
    id: "my-project-1",
    title: "君子同好 共饮一杯白酒",
    category: "网页搭建",
    description: "传统白酒Banner",
    image: "/images/hero-bg.jpg",
    gallery: ["/images/hero-bg.jpg"],
  },
  {
    id: "my-project-2",
    title: "洋房秘史",
    category: "TVC脚本",
    description: "代言人罗中旭倾情演绎老洋房系列短剧，扩大品牌影响力。",
    image: "/images/sinianta.jpg",
    gallery: ["/images/sinianta.jpg"],
  },
  {
    id: "my-project-3",
    title: "整体视觉美学",
    category: "视觉设计",
    description: "统一企业VI视觉，海报｜宣传内刊｜官网搭建｜小程序搭建｜PPT等",
    image: "/images/neiqi.jpg",
    gallery: ["/images/neiqi.jpg"],
  },
  {
    id: "my-project-4",
    title: "推文展示",
    category: "微信公众号宣传",
    description: "展现品牌动态、扩大内容曝光，打造品牌形象。",
    image: "/images/wechat-tuwen.png",
    gallery: ["/images/wechat-tuwen.png"],
  },
  {
    id: "my-project-5",
    title: "静态摄影区",
    category: "摄影画面",
    description: "发掘美的角度，统一品牌美学，展现产品优势。",
    image: "/images/jingtaisheying.jpg",
    gallery: ["/images/jingtaisheying.jpg"],
  },
  {
    id: "my-project-6",
    title: "口播拍剪",
    category: "拍摄剪辑区",
    description: "全渠道社媒平台内容规划，主导拍摄并剪辑成品，口播及公司活动记录等。",
    image: "/images/huodong.jpg",
    gallery: ["/images/huodong.jpg"],
  },
  {
    id: "my-project-7",
    title: "旅游宣传",
    category: "夏校宣传区",
    description: "带领全世界青少年中国文化爱好者，领略中国历史古迹，五千年文化，北京探索营，西安探索营。",
    image: "/images/xialan.jpg",
    gallery: ["/images/xialan.jpg"],
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const project = MY_PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-medium mb-4">项目未找到</h1>
          <button
            onClick={() => navigate("/")}
            className="text-brand hover:underline"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  const gallery = project.gallery || [project.image];
  const hasMultiple = gallery.length > 1;

  return (
    <div className="min-h-screen bg-white">
      {/* 顶部导航 */}
      <nav className="fixed top-0 w-full z-50 py-6 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button
            onClick={() => navigate("/")}
            className="text-2xl font-display font-semibold tracking-tighter hover:opacity-50 transition-opacity"
          >
            阿衡
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} />
            返回首页
          </button>
        </div>
      </nav>

      {/* 项目详情 */}
      <div className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* 标题区域 */}
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 block">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-medium tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* 图片展示区 */}
          <div className="space-y-8">
            {/* 主图 */}
            <div className="relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">
              <img
                src={gallery[currentImage]}
                alt={project.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              {/* 左右切换按钮 */}
              {hasMultiple && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImage(
                        currentImage === 0 ? gallery.length - 1 : currentImage - 1
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-all"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImage(
                        currentImage === gallery.length - 1 ? 0 : currentImage + 1
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-all"
                  >
                    <ArrowRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* 缩略图列表 */}
            {hasMultiple && (
              <div className="flex gap-4 overflow-x-auto pb-4">
                {gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                      index === currentImage
                        ? "border-brand shadow-lg"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* 图片计数 */}
            {hasMultiple && (
              <p className="text-center text-sm text-gray-400">
                {currentImage + 1} / {gallery.length}
              </p>
            )}
          </div>

          {/* 返回按钮 */}
          <div className="mt-16 text-center">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft size={16} />
              查看更多作品
            </button>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="max-w-7xl mx-auto px-6 pt-12 pb-8 text-center text-sm text-gray-400 border-t border-gray-100">
        <p>© 2026 阿衡。使用 React 和 Motion 构建。</p>
      </footer>
    </div>
  );
}
