// components/layout/Footer.tsx
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        &copy; {new Date().getFullYear()} Accommodation Finder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;