import { ReactNode } from 'react';
import { getPostBySlug } from '../../../lib/posts';

interface Props {
  children: ReactNode;
  params: { slug: string };
}

async function Layout({ children, params }: Props) {
  const { metadata } = await getPostBySlug(params.slug);

  return (
    <section className="prose">
      <header>
        <h1>{metadata?.title}</h1>
      </header>
      <article>{children}</article>
    </section>
  );
}

export default Layout;
