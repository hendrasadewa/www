import clsx from 'clsx';

function Home() {
  const containerClass = clsx([
    'w-full min-h-screen flex flex-col items-center justify-center',
    'font-mono',
  ]);

  return (
    <div className={containerClass}>
      <header>
        <h1 className="text-2xl text-center">[underconstruction]</h1>
      </header>
      <p>need me?</p>
      <p>
        please contact me at twitter{' '}
        <a href="https://twitter.com/@sadevva_">@sadevva_</a>
      </p>
    </div>
  );
}

export default Home;
