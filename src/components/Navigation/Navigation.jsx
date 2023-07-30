import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', title: 'Home' },
  { path: '/tweets', title: 'Tweets' },
];

export const Navigation = () => {
  return (
    <nav>
      <ul>
        {links.map(({ path, title }) => (
          <li key={title}>
            <NavLink to={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
