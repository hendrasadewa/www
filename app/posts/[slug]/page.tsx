import ReactMarkdown from 'react-markdown';

import { getPostBySlug, getPostsFiles } from '../../../lib/posts';

interface Props {
  params: { slug: string };
}

// Dynamic segments not included in generateStaticParams will return a 404.
export const dynamicParams = false;

// return all paths from assets/posts
export async function generateStaticParams() {
  const posts = getPostsFiles();

  const paths = posts.map((post) => ({
    slug: post.params.slug,
  }));

  return paths;
}

async function PostPage({ params }: Props) {
  const { content } = await getPostBySlug(params.slug);

  return <ReactMarkdown>{content}</ReactMarkdown>;
}

export default PostPage;
