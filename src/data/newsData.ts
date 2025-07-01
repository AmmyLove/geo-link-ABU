
export const newsItems = [
  // News Articles
  {
    id: 1,
    type: 'news' as const,
    title: 'Department Receives N5 Million Research Grant for Climate Studies',
    excerpt: 'The department has been awarded a significant research grant to study climate change impacts in the Sahel region, marking a major milestone in our research capabilities.',
    content: 'The Department of Geography and Environmental Management has received a prestigious N5 million research grant from the Nigerian Research Foundation to conduct comprehensive climate change impact studies in the Sahel region. This groundbreaking research will focus on understanding the effects of climate variability on agricultural productivity and water resources in Northern Nigeria.',
    category: 'Research',
    author: 'Prof. Aminu Hassan',
    date: '2024-11-15',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop',
    tags: ['Climate Change', 'Research Grant', 'Sahel Region'],
    readTime: '5 min read',
    urgent: false,
    pinned: true,
    attachment: undefined
  },
  {
    id: 2,
    type: 'news' as const,
    title: 'International Conference on African Geography Hosted at ABU',
    excerpt: 'The department successfully hosted the 5th International Conference on African Geography, bringing together researchers from across the continent.',
    content: 'Over 200 researchers, academics, and policymakers from 15 African countries gathered at Ahmadu Bello University for the 5th International Conference on African Geography. The three-day conference featured presentations on sustainable development, environmental management, and geographical information systems.',
    category: 'Events',
    author: 'Dr. Fatima Abubakar',
    date: '2024-11-10',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    tags: ['Conference', 'International', 'Research'],
    readTime: '3 min read',
    urgent: false,
    pinned: false,
    attachment: undefined
  },
  // Notices
  {
    id: 3,
    type: 'notice' as const,
    title: 'Final Year Project Submission Deadline',
    excerpt: 'All final year students must submit their project reports and presentations by December 15, 2024.',
    content: 'All final year students must submit their project reports and presentations by December 15, 2024. Late submissions will not be accepted without prior approval.',
    category: 'Academic',
    date: '2024-12-15',
    urgent: true,
    pinned: true,
    attachment: 'project-guidelines.pdf',
    author: 'Dr. Fatima Abubakar',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
    tags: ['Submission', 'Final Year', 'Deadline'],
    readTime: '2 min read'
  },
  {
    id: 4,
    type: 'notice' as const,
    title: 'Research Methodology Workshop',
    excerpt: 'Join us for a comprehensive workshop on research methodology for graduate students.',
    content: 'Join us for a comprehensive workshop on research methodology for graduate students. Topics include data collection, analysis techniques, and thesis writing.',
    category: 'Events',
    date: '2024-11-30',
    urgent: false,
    pinned: true,
    attachment: undefined,
    author: 'Prof. Aminu Hassan',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
    tags: ['Workshop', 'Research', 'Graduate'],
    readTime: '3 min read'
  }
];
