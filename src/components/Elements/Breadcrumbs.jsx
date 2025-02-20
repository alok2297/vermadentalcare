import React from 'react'
import { Link } from 'react-router-dom';

export const Breadcrumbs = ({ links }) => {
    return (
      <nav className="text-gray-600 text-sm mb-4">
        <ol className="flex items-center space-x-2">
          {links.map((link, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-1">/</span>}
              {link.path ? (
                <Link to={link.path} className="text-blue-500 hover:underline">
                  {link.name}
                </Link>
              ) : (
                <span className="text-gray-500">{link.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  };
