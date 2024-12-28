export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  image: string;
  content: string;
}

export const newsItems: NewsItem[] = [
  {
    id: '1',
    date: '2024-03-15',
    title: '2024年金融市场展望分析',
    summary: '深入解析全球经济趋势，为投资者提供市场洞察',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: `在全球经济持续复苏的背景下，2024年金融市场展现出新的机遇与挑战。本文将从多个维度深入分析当前市场形势，为投资者提供专业的市场洞察。

主要观点：
1. 全球经济复苏态势
2. 新兴市场投资机会
3. 科技创新带来的投资机遇
4. 可持续发展投资趋势
5. 风险防范策略建议

我们的分析团队将持续关注市场动态，为投资者提供及时、专业的投资建议。`
  },
  {
    id: '2',
    date: '2024-03-10',
    title: '数字金融创新服务升级',
    summary: '推出全新智能投顾系统，提供个性化投资建议',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: `FinanceCore正式推出新一代智能投顾系统，运用人工智能技术，为客户提供更精准的投资建议。

系统特点：
1. AI驱动的市场分析
2. 个性化投资组合推荐
3. 实时风险监控
4. 智能资产配置建议
5. 全天候投资顾问服务

新系统的推出标志着我们在数字金融服务领域迈出重要一步，将为客户带来更优质的投资体验。`
  },
  {
    id: '3',
    date: '2024-03-05',
    title: '企业金融解决方案发布',
    summary: '为中小企业提供全方位的金融支持服务',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: `为支持中小企业发展，FinanceCore推出全新的企业金融服务方案，提供一站式金融解决方案。

服务内容：
1. 企业融资支持
2. 供应链金融服务
3. 风险管理咨询
4. 数字化转型支持
5. 专业财务顾问

我们致力于成为企业值得信赖的金融合作伙伴，助力企业实现可持续发展。`
  }
];