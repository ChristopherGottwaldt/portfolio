// @filename: RenderBlogPage.tsx
'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the Test.mdx component to render it only on the client side
const Test = dynamic(() => import('@/components/blogs/test.mdx'), {
  ssr: false, // Disable SSR for this component, meaning it will only render on the client side
});

const RenderBlogPage: React.FC = () => {
  return <Test />;
};

export default RenderBlogPage;
