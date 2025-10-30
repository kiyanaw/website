import { Button } from '@mui/material';

interface ContactCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

const ContactCTA = ({
  title = 'Ready to Get Started?',
  description = 'Contact us today to discuss your project and get a free consultation.',
  buttonText = 'Contact Us',
  className = '',
}: ContactCTAProps) => {
  const handleContact = () => {
    // You can customize this - could be email, phone, or contact form
    window.location.href =
      'mailto:contact@kiyanaw.net?subject=Services Inquiry';
  };

  return (
    <div
      className={`bg-gradient-to-r from-blue-600 to-purple-700 py-16 ${className}`}
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          {title}
        </h2>
        <p className="mb-8 text-lg text-blue-100 md:text-xl">{description}</p>
        <Button
          variant="contained"
          size="large"
          onClick={handleContact}
          className="bg-white text-blue-700 hover:bg-gray-100"
          sx={{
            backgroundColor: 'white',
            color: '#1d4ed8',
            '&:hover': {
              backgroundColor: '#f3f4f6',
            },
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
          }}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export { ContactCTA };
