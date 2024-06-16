import Link from "next/link";
import { BsCupHot } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="mt-8 bg-gray-100 py-8 dark:bg-gray-800 md:py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start">
          <Link
            href="#"
            className="mb-4 flex items-center justify-center space-x-2"
            prefetch={false}
          >
            <BsCupHot className="text-primary-500 h-8 w-8" />
            <span className="text-2xl font-bold">Advika Trading Co.</span>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Experience the serenity of a perfect cup, crafted with care and
            passion.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-4 xl:gap-x-16">
          <div className="mr-auto ">
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col items-center gap-y-2 text-left xl:flex-row xl:gap-x-4 ">
              <Link
                href="#"
                className="hover:text-primary-500 dark:hover:text-primary-400 text-left hover:underline hover:underline-offset-2"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#"
                className="hover:text-primary-500 dark:hover:text-primary-400 text-left hover:underline hover:underline-offset-2"
                prefetch={false}
              >
                Blogs
              </Link>
              <Link
                href="#"
                className="hover:text-primary-500 dark:hover:text-primary-400 text-left hover:underline hover:underline-offset-2"
                prefetch={false}
              >
                Contact
              </Link>
              <Link
                href="#"
                className="hover:text-primary-500 dark:hover:text-primary-400 text-left hover:underline hover:underline-offset-2"
                prefetch={false}
              >
                FAQ
              </Link>
            </nav>
          </div>
          <div className="mr-auto xl:ml-4 xl:w-[20rem]">
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <nav className="flex flex-col items-center gap-y-2 xl:flex-row xl:gap-x-4">
              <Link
                href="#"
                className="hover:text-primary-500 dark:hover:text-primary-400 text-left hover:underline hover:underline-offset-2"
                prefetch={false}
              >
                Blog
              </Link>
              <Link
                href="#"
                className="hover:text-primary-500 dark:hover:text-primary-400 text-left hover:underline hover:underline-offset-2"
                prefetch={false}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-primary-500 dark:hover:text-primary-400 text-left hover:underline hover:underline-offset-2"
                prefetch={false}
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end">
          <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
          <div className="flex  flex-row gap-x-4">
            <Link
              href="#"
              className="hover:text-primary-500 dark:hover:text-primary-400"
              prefetch={false}
            >
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="hover:text-primary-500 dark:hover:text-primary-400"
              prefetch={false}
            >
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="hover:text-primary-500 dark:hover:text-primary-400"
              prefetch={false}
            >
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="hover:text-primary-500 dark:hover:text-primary-400"
              prefetch={false}
            >
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            &copy; 2024 Cookie Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

type IconProps = React.SVGProps<SVGSVGElement>;

function FacebookIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TruckIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

function TwitterIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
