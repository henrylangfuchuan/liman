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
    if (window.AMap) return; // 如果已经加载，不再重复加载

    // 配置安全设置
    window._AMapSecurityConfig = {
      securityJsCode: 'b022112eec32f459bd3a1a36044398d2',
    };

    // 动态加载高德地图的 loader.js 脚本
    const script = document.createElement('script');
    script.src = 'https://webapi.amap.com/loader.js';
    script.async = true;
    document.head.appendChild(script);

    let map: any;

    script.onload = () => {
      setTimeout(() => {
        window.AMapLoader.load({
          key: 'b9636ec94b92a59fed5b7903c346d814',
          version: '2.0',
        }).then((AMap: any) => {
          map = new AMap.Map('map-container', {
            zoom: 16,
            center: [117.30301, 31.829231],
            viewMode: '3D',
          });

          const marker = new AMap.Marker({
            position: [121.5, 31.23],
            title: 'FinanceCore总部',
          });
          map.add(marker);
        }).catch((error: any) => {
          console.error('高德地图加载失败', error);
        });
      }, 100); // 延迟加载地图
    };

    return () => {
      if (map) {
        map.destroy(); // 销毁地图实例
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []); // 空依赖数组

  return (
      <div
          id="map-container"
          style={{
            height: '400px',
            width: '100%',
          }}
          className="w-full h-[400px] rounded-lg shadow-lg animate-fade-in mt-8"
      />
  );
};

export default Map;
