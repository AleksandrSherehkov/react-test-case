import { Navigation } from '@/components/Navigation/Navigation';

export const Header = () => {
  return (
    <header className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <div className="flex w-full gap-14">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">TWEETS</span>
        </a>

        <Navigation />
      </div>
    </header>
  );
};
