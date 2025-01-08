import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="min-h-16 -mb-16 sticky top-0 bg-opacity-0 text-white mix-blend-difference z-20">
      <div className="mx-auto p-4 flex justify-between items-center">
        <Link href='/' className="text-xs font-thin">
          jiram
        </Link>

        <Link href='/info' className="text-xs font-thin">
          info
        </Link>
      </div>
    </header>
  );
};

export default Header;