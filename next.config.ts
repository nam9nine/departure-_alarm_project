import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  dest: 'public', // service-worker 파일이 저장될 위치
  register: true, // 브라우저에 service worker를 자동 등록합니다.
  skipWaiting: true, // 새 업데이트가 있을 때 즉시 활성화합니다.
};

export default nextConfig;
