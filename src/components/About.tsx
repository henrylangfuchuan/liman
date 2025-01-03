import React from 'react';
import about from '../images/about.avif'

export default function About() {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="animate-slide-in">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              关于我们
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {/*成立于2010年，*/}
              安徽利曼网络科技是一家专注于提供专业信息咨询服务的公司。自成立以来，公司专注于通过科技赋能财经资讯服务，提供深度分析和投资辅助价值，打造智能高效的互联网信息平台。如今，已形成完善的专业信息服务体系，市场地位和品牌影响力持续提升，正成长为具有核心竞争力的金融信息咨询服务商。
            </p>
            {/*<div className="mt-8">*/}
            {/*  <div className="flex items-center hover-scale">*/}
            {/*    <div className="flex-shrink-0">*/}
            {/*      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">*/}
            {/*        <span className="text-2xl font-bold">10+</span>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="ml-4">*/}
            {/*      <h3 className="text-lg font-medium text-gray-900">年行业经验</h3>*/}
            {/*      <p className="mt-2 text-gray-600">持续为客户创造价值</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          <div className="mt-10 lg:mt-0 animate-fade-in">
            <img
              className="rounded-lg shadow-xl hover-lift"
              src={about}
              alt="团队办公"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
