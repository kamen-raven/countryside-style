import React from 'react';
import { BlogPageInterface } from './BlogPage.interface.ts';
import { BlogCardsLayoutBlock } from './blocks/index.ts';


const BlogPage: React.FC<BlogPageInterface> = ({ blogPostsData }) => {

  return (
      <BlogCardsLayoutBlock blogPostsData={blogPostsData}/>
  );
};

export { BlogPage };
