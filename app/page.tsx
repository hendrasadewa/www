import clsx from 'clsx';

function Home() {
  const containerClass = clsx([
    'w-full min-h-screen flex flex-col items-start justify-end',
    'font-mono',
    'bg-gradient-to-r from-slate-50 to-slate-500',
    'p-4'
  ]);

  return (
    <div className={containerClass}>
      <header>
        <h1 className="text-4xl text-start">underconstruction</h1>
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
