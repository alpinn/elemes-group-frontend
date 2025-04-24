import Link from 'next/link';

const NavLink = ({ href, label, className = '', onClick, badge, isSidebar }) => {
  return (
    <Link
      href={href}
      className={`text-gray-500 transition-all duration-300 ease-in-out hover:-translate-y-0.5 relative inline-flex items-center ${className}`}
      onClick={onClick}
    >
      {label}
      {badge && (
        <span 
          className={`text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap ${
            isSidebar ? 'ml-2' : 'absolute -top-3.5 -right-2'
          }`}
          style={{ backgroundColor: badge.color, color: 'white' }}
        >
          {badge.text}
        </span>
      )}
    </Link>
  );
};

export default NavLink; 