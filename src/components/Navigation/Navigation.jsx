import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', title: 'Home' },
  { path: '/tweets', title: 'Tweets' },
];

export const Navigation = () => {
  const activeLink =
    'bg-blue-500 text-white transition-all duration-500 ease-in-out hover:text-white font-bold  rounded';
  return (
    <nav className=" flex flex-wrap gap-8  items-center text-base justify-center">
      {links.map(({ path, title }) => (
        <NavLink
          active
          to={path}
          key={title}
          className={({ isActive }) =>
            isActive ? activeLink : 'hover:text-white transition-all duration-1000 ease-in-out'
          }
        >
          {title}
        </NavLink>
      ))}
    </nav>
  );
};
