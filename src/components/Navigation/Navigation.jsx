import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', title: 'Home' },
  { path: '/tweets', title: 'Tweets' },
];

export const Navigation = () => {
  const activeLink = 'bg-blue-500 text-white hover:text-white font-bold py-2 px-4 rounded';
  return (
    <nav className=" flex flex-wrap gap-8 items-center text-base justify-center">
      {links.map(({ path, title }) => (
        <NavLink
          active
          to={path}
          key={title}
          className={({ isActive }) => (isActive ? activeLink : 'hover:text-white')}
        >
          {title}
        </NavLink>
      ))}
    </nav>
  );
};
