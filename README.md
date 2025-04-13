# 1212天使数字网站

一个全面的Next.js网站，致力于探索天使数字1212在生活各个方面的含义和意义。

## 项目概述

本网站为寻求天使数字1212的信息、解释和实用指导的人们提供权威资源。使用现代Web技术构建，网站提供引人入胜、无障碍且经过SEO优化的用户体验。

## 项目文档

有关本项目的详细信息，请参阅以下文档：

- [项目文档](./项目文档.md) - 网站结构、功能和开发计划的全面概述
- [项目结构](./项目结构.md) - 代码库的详细文件和文件夹组织
- [SEO策略](./SEO策略.md) - 网站的完整SEO优化策略

## 核心功能

- 关于天使数字1212的全面信息
- 响应式、移动友好的设计
- 快速性能和优化的用户体验
- 涵盖精神、关系、事业和个人成长方面的丰富内容
- 个性化解读工具和资源
- 定期更新内容的博客部分

## 技术栈

- **前端框架**: Next.js (App Router)
- **编程语言**: TypeScript
- **样式**: TailwindCSS
- **部署**: Vercel (推荐)
- **分析**: Google Analytics

## 本地开发

1. 克隆仓库:
```bash
git clone https://github.com/yourusername/angelnumber1212.git
cd angelnumber1212
```

2. 安装依赖:
```bash
npm install
```

3. 启动开发服务器:
```bash
npm run dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 构建生产版本

```bash
npm run build
```

## 设计原则

- 清晰、直观的用户界面
- 精神和平静的视觉美学
- 对所有用户的无障碍化
- 所有设备上的快速加载
- 内容优先的方法

## 贡献

请参阅项目文档了解有关为本项目做贡献的指南。

## 许可证

[MIT](LICENSE)

## Personalized Angel Number 1212 Reading Feature

The website includes a personalized reading feature that uses Google's Gemini AI to generate custom interpretations of the angel number 1212 based on user inputs. To enable this feature:

1. Create a `.env.local` file in the root directory
2. Copy the contents of `.env.example` to `.env.local`
3. Replace `your_api_key_here` with your actual Google Gemini API key from [Google AI Studio](https://ai.google.dev/)
4. Uncomment the Gemini API code in `src/app/api/generate-reading/route.ts`

This feature allows users to get personalized spiritual guidance based on their age, gender, and specific life areas they'd like guidance on.
