/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Cpu, 
  Zap, 
  Shield, 
  Settings2, 
  Key,
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} relative flex items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100 shadow-sm border border-blue-200/50`}>
    <div className="absolute inset-0 bg-blue-400/5 blur-md rounded-full" />
    <Key className="w-1/2 h-1/2 text-blue-500 relative z-10 -rotate-45" strokeWidth={2.5} />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '#home' },
    { name: '服务', href: '#services' },
    { name: '关于我们', href: '#about' },
    { name: '联系我们', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Logo />
          <span className={`text-2xl font-display font-bold ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            LEFO <span className="text-blue-600">TECH</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
            开始合作
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-600 hover:text-blue-600"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium">
                开始合作
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              引领数字化未来
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
              乐孚科技 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                定义智能硬件
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              我们专注于研发下一代智能硬件产品，通过软硬件一体化方案，为全球用户创造更智慧的生活与工作体验。
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:bg-slate-800 transition-all group">
                了解方案 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition-all">
                联系我们
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-500">服务客户</div>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div>
                <div className="text-2xl font-bold text-slate-900">10+</div>
                <div className="text-sm text-slate-500">专利</div>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div>
                <div className="text-2xl font-bold text-slate-900">15+</div>
                <div className="text-sm text-slate-500">行业奖项</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/multimeter/800/600" 
                alt="Digital Multimeter Technology" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10" />
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">AI 处理能力</div>
                  <div className="text-sm font-bold text-slate-900">+124% 提升</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: '仪器仪表方案',
      desc: '深耕行业数十年，提供高精度、高可靠性的仪器仪表软硬件一体化开发方案。',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: '工业设计',
      desc: '屡获殊荣的设计团队，将美学与功能完美融合，打造具有辨识度的硬件产品。',
      icon: <Layers className="w-8 h-8" />,
      color: 'bg-sky-50 text-sky-600'
    },
    {
      title: '嵌入式系统',
      desc: '深厚的底层开发能力，优化硬件性能与功耗，确保产品运行的高效与稳定。',
      icon: <Cpu className="w-8 h-8" />,
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: '精密制造',
      desc: '先进的供应链管理与生产工艺，确保从原型设计到大规模量产的高品质交付。',
      icon: <Settings2 className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">核心能力</h2>
          <p className="text-4xl font-display font-bold text-slate-900 mb-6">全栈式硬件研发服务</p>
          <p className="text-lg text-slate-600">乐孚科技提供从概念构思、工业设计、工程研发到批量生产的一站式硬件解决方案。</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                了解更多 <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/seed/voltmeter/400/500" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/oscilloscope/400/300" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/electrical-test/400/300" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/multimeter-pro/400/500" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl opacity-50" />
          </div>

          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">关于乐孚</h2>
            <p className="text-4xl font-display font-bold text-slate-900 mb-6">匠心打造每一件智能艺术品</p>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                乐孚科技成立于 2012 年，是一家以技术创新为核心的智能硬件公司。我们在仪器仪表行业方案开发方面拥有数十年的深厚经验，致力于为全球客户提供高精度的技术解决方案。
              </p>
              <p>
                从精密传感器的信号处理到复杂嵌入式系统的架构设计，我们始终坚持严苛的质量标准。我们的团队汇聚了顶尖的电子工程师和行业专家，共同探索智能硬件的无限可能。
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
                <div className="text-sm text-slate-500 font-medium">专利</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">100+</div>
                <div className="text-sm text-slate-500 font-medium">核心研发人员</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">联系我们</h2>
            <p className="text-4xl font-display font-bold mb-8">准备好打造您的 <br />智能硬件产品了吗？</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">邮箱地址</div>
                  <div className="text-lg font-medium">yc@lefo.tech</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">联系电话 / 传真</div>
                  <div className="text-lg font-medium">
                    电话: 0755-85200952<br />
                    传真: 0755-85200951
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">公司地址</div>
                  <div className="text-lg font-medium leading-relaxed">深圳市龙岗区宝龙工业区宝清路8号双环新一代信息技术产业园内B栋6楼604室</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 text-sm font-semibold mb-2">姓名</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="您的姓名" />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-semibold mb-2">邮箱</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 text-sm font-semibold mb-2">咨询内容</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                  <option>仪器仪表方案</option>
                  <option>工业设计研发</option>
                  <option>嵌入式开发</option>
                  <option>批量生产制造</option>
                  <option>其他</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-700 text-sm font-semibold mb-2">留言信息</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="请描述您的需求..."></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                提交咨询
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-display font-bold text-slate-900">
                LEFO <span className="text-blue-600">TECH</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-6">
              乐孚科技，用领先的技术力量，为全球企业创造无限可能。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">快速链接</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#home" className="hover:text-blue-600 transition-colors">首页</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">服务项目</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition-colors">关于我们</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">联系我们</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">核心业务</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">智能家居终端</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">工业物联网网关</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">可穿戴设备研发</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">ODM/OEM 服务</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">订阅动态</h4>
            <p className="text-sm text-slate-500 mb-4">获取最新的技术趋势与行业洞察。</p>
            <div className="flex gap-2">
              <input type="email" placeholder="您的邮箱" className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all">
                订阅
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2026 乐孚科技 (Lefo Technology). 保留所有权利。</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-600">隐私政策</a>
            <a href="#" className="hover:text-blue-600">服务条款</a>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">粤ICP备15090641号-1</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
