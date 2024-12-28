import React, { useEffect } from 'react';

declare global {
  interface Window {
    _AMapSecurityConfig: {
      securityJsCode: string;
    };
    AMapLoader: any;
    AMap: any;
  }
}

const Map: React.FC = () => {
  useEffect(() => {
    // 如果 AMap 已经加载过，就不再加载
    if (window.AMap) return;

    // 配置安全设置
    window._AMapSecurityConfig = {
      securityJsCode: 'b022112eec32f459bd3a1a36044398d2'
    };

    // 动态加载高德地图的 loader.js 脚本
    const script = document.createElement('script');
    script.src = 'https://webapi.amap.com/loader.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // 加载 AMap 库
      window.AMapLoader.load({
        key: 'b9636ec94b92a59fed5b7903c346d814',  // 替换成你自己的高德 API Key
        version: '2.0'
      }).then((AMap: any) => {
        // 初始化地图
        const map = new AMap.Map('map-container', {
          zoom: 16,  // 设置默认缩放级别
          center: [121.5, 31.23],  // 上海陆家嘴的坐标
          viewMode: '3D',  // 3D视图
        });

        // 添加一个标记
        const marker = new AMap.Marker({
          position: [121.5, 31.23],  // 标记的位置
          title: 'FinanceCore总部',  // 标记的标题
        });
        map.add(marker);

        // 启用地图插件（例如工具条和比例尺）
        map.plugin(['AMap.ToolBar', 'AMap.Scale'], () => {
          map.addControl(new AMap.ToolBar());
          map.addControl(new AMap.Scale());
        });
      }).catch((error: any) => {
        console.error('高德地图加载失败', error);
      });
    };

    // 清理操作
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);  // 空依赖数组，确保只加载一次

  return (
      <div
          id="map-container"  // 地图容器的id
          className="w-full h-[400px] rounded-lg shadow-lg animate-fade-in mt-8"  // 自定义样式
          style={{ animationDelay: '0.4s',height: '400px', width: '100%' }}  // 动画延时
      />
  );
};

export default Map;
