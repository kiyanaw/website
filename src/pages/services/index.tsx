import { Background } from '@/background/Background';
import { VerticalFeatureRow } from '@/feature/VerticalFeatureRow';
import { Meta } from '@/layout/Meta';
import { Section } from '@/layout/Section';
import { TopNav } from '@/layout/TopNav';
import { Footer } from '@/templates/Footer';
import { SupportUs } from '@/templates/SupportUs';
import { AppConfig } from '@/utils/AppConfig';

const ServicesIndex = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={`Services | ${AppConfig.site_name}`}
        description="Professional digitization and preservation services for Indigenous communities and cultural organizations"
      />

      <Background color="bg-gray-100">
        <TopNav />
      </Background>

      <Section>
        <div className="py-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 md:text-xl">
            Specialized services to help preserve and digitize your cultural
            heritage
          </p>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <p className="mb-12 text-lg text-gray-600">
            We provide professional digitization and preservation services
            designed specifically for Indigenous communities and cultural
            organizations.
          </p>
        </div>

        <VerticalFeatureRow
          title="Media Digitization"
          description="Convert cassette tapes, reel-to-reel, VHS, and DVDs to high-quality digital formats. Don't let time erase your valuable cultural and personal memories - we handle all types of analog media with professional equipment and expertise."
          image="/assets/images/cassette-tapes.jpg"
          imageAlt="Professional cassette tape digitization"
          target="/services/digitization"
          targetText="Learn more →"
        />

        <VerticalFeatureRow
          title="Audio Restoration"
          description="Professional audio restoration services to enhance and clean up old recordings. Remove background noise, crackling, and other audio issues to bring new life to your precious recordings."
          image="/assets/images/audio-restoration.jpg"
          imageAlt="Professional audio restoration services"
          comingSoon
          reverse
        />

        <VerticalFeatureRow
          title="Transcription Services"
          description="Professional transcription services for Indigenous language recordings. Our team works with language keepers and community members to ensure accurate and culturally appropriate transcriptions."
          image="/assets/images/transcription-services.jpg"
          imageAlt="Indigenous language transcription services"
          comingSoon
        />
      </Section>

      <SupportUs />
      <Footer />
    </div>
  );
};

export default ServicesIndex;
