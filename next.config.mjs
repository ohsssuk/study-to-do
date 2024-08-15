/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  // basePath 명시
  basePath: isProduction ? "/study-to-do" : "",
  // next 이미지 최적화 옵션 off
  images: {
    unoptimized: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://ohsssuk.github.io/study-to-do"
      : "",
};

export default nextConfig;
