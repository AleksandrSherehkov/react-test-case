import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', title: 'Home' },
  { path: '/tweets', title: 'Tweets' },
];

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex justify-start gap-5">
        {links.map(({ path, title }) => (
          <li
            key={title}
            className="text-2xl font-semibold text-indigo-500 inline-blockbg-violet-500 hover:bg-violet-600 visited:text-purple-600 focus:outline-none focus:ring focus:ring-violet-300"
          >
            <NavLink to={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
