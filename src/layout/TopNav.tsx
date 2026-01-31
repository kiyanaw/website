import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';

import { Logo } from '@/templates/Logo';

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-screen-lg px-3">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
              <Link href="/" className="flex items-center gap-2">
                <Logo />
              </Link>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              href="/#projects"
              className="text-base font-medium text-primary-600 hover:text-primary-900"
            >
              Projects
            </Link>
            {/* <Link
              href="/services"
              className="text-base font-medium text-primary-600 hover:text-primary-900"
            >
              Services
            </Link> */}
            <Link
              href="/library"
              className="text-base font-medium text-primary-600 hover:text-primary-900"
            >
              Learner Library
            </Link>
            <Link
              href="/blog"
              className="text-base font-medium text-primary-600 hover:text-primary-900"
            >
              Blog
            </Link>
            <Link
              href="https://docs.kiyanaw.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-primary-600 hover:text-primary-900"
            >
              Docs
            </Link>
            <Button
              as={Link}
              href="mailto:contact@kiyanaw.net?subject=Contact Inquiry"
              color="primary"
              variant="solid"
              size="sm"
            >
              Contact
            </Button>
            <Link
              href="https://github.com/kiyanaw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-900"
              aria-label="GitHub"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <Button
              isIconOnly
              variant="light"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-primary-600 hover:bg-gray-100 hover:text-primary-900"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/#projects"
            className="block rounded-md px-3 py-2 text-base font-medium text-primary-600 hover:bg-gray-50 hover:text-primary-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          {/* <Link
            href="/services"
            className="block rounded-md px-3 py-2 text-base font-medium text-primary-600 hover:bg-gray-50 hover:text-primary-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link> */}
          <Link
            href="/library"
            className="block rounded-md px-3 py-2 text-base font-medium text-primary-600 hover:bg-gray-50 hover:text-primary-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Learner Library
          </Link>
          <Link
            href="/blog"
            className="block rounded-md px-3 py-2 text-base font-medium text-primary-600 hover:bg-gray-50 hover:text-primary-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="https://docs.kiyanaw.net"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-md px-3 py-2 text-base font-medium text-primary-600 hover:bg-gray-50 hover:text-primary-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Docs
          </Link>
          <Link
            href="mailto:contact@kiyanaw.net?subject=Contact Inquiry"
            className="block rounded-md bg-primary-600 px-3 py-2 text-base font-medium text-white hover:bg-primary-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="https://github.com/kiyanaw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-primary-600 hover:bg-gray-50 hover:text-primary-900"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { TopNav };
