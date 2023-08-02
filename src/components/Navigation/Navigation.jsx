import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', title: 'Home' },
  { path: '/tweets', title: 'Tweets' },
];

export const Navigation = () => {
  const activeLink =
    ' text-white  shadow-link px-2 transition-all duration-500 ease-in-out hover:text-white font-bold  rounded';
  return (
    <nav className=" flex flex-wrap gap-8  items-center text-yellow-500 font-semibold justify-center ">
      {links.map(({ path, title }) => (
        <NavLink
          to={path}
          key={title}
          className={({ isActive }) =>
            isActive ? activeLink : 'hover:text-white  transition-all  duration-300 ease-in-out'
          }
        >
          {title}
        </NavLink>
      ))}
    </nav>
  );
};
