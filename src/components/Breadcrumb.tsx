// src/components/Breadcrumb.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav style={{ marginBottom: '20px' }}>
      <ol style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: '#d0cac8', fontWeight: 'italic' }}>Trang chủ</Link>
        </li>
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <li key={routeTo} style={{ margin: '0 5px' }}>
              <span style={{ margin: '0 5px', color: '#d0cac8' }}> &gt; </span>
              <Link to={routeTo} style={{ textDecoration: 'none', color: '#d0cac8', fontWeight: 'italic' }}>
                {decodeURIComponent(pathname)} {/* Decode the pathname here */}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;