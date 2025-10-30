import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';

import { Footer } from './Footer';

interface ServicesBaseProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ServicesBase = ({ title, description, children }: ServicesBaseProps) => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={`${title} | ${AppConfig.site_name}`}
        description={description}
      />
      {children}
      <Footer />
    </div>
  );
};

export { ServicesBase };
