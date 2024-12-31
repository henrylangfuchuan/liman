import { TrendingUp, Shield, Users } from 'lucide-react';
import HomeBanner from '../images/home_banner.avif'

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HomeBanner}
          alt="Financial District"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              专业信息咨询服务
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              通过科技赋能财经资讯，提供前沿深度分析与智能化服务
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 hover-scale"
                >
                  立即咨询
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="relative bg-white/90 backdrop-blur-sm mt-12">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { Icon: TrendingUp, text: "财经资讯服务" },
                { Icon: Shield, text: "实现服务数字化" },
                { Icon: Users, text: "实现服务智能化" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <item.Icon className="h-12 w-12 text-blue-600 hover-scale" />
                  <h3 className="mt-4 text-lg font-medium">{item.text}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
