import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '../../../lib/posts';
import { MARKDOWN_TYPES_ENUM } from '../../../lib/posts/types';

interface Props {
  children: ReactNode;
  params: { slug: string };
}

async function Layout({ children, params }: Props) {
  const { metadata } = await getPostBySlug(
    MARKDOWN_TYPES_ENUM.POST,
    params.slug
  );

  if (!metadata) {
    return notFound();
  }

  const { title, description } = metadata;

  return (
    <section className="prose">
      <header>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <article>{children}</article>
    </section>
  );
}

export default Layout;
