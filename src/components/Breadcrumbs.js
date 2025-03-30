import React from 'react';
import Link from 'next/link';

function Breadcrumbs({ items }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className={index === 0 ? "inline-flex items-center" : undefined} aria-current={index === items.length - 1 ? "page" : undefined}>
            <div className={index === 0 ? "" : "flex items-center"}>
              {index > 0 && (
                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
              )}
              {item.href ? (
                <Link href={item.href} className={`${index === 0 ? "" : "ml-1"} text-sm font-medium text-gray-700 hover:text-blue-600 ${index === 0 ? "" : "md:ml-2"}`}>
                  {item.label}
                </Link>
              ) : (
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{item.label}</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs; 