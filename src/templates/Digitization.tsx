import { Background } from '@/background/Background';
import { AudioRestoration } from '@/components/AudioRestoration';
import { VerticalFeatureRow } from '@/feature/VerticalFeatureRow';
import { Meta } from '@/layout/Meta';
import { Section } from '@/layout/Section';
import { TopNav } from '@/layout/TopNav';
import { Footer } from '@/templates/Footer';
import { Milestone } from '@/templates/Milestone';
import { SupportUs } from '@/templates/SupportUs';
import { Timeline } from '@/templates/Timeline';
import { AppConfig } from '@/utils/AppConfig';

const Digitization = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={`Media Digitization Services | ${AppConfig.site_name}`}
        description="Professional media digitization services to preserve your analog recordings and video content. Convert cassette tapes, reel-to-reel, VHS, and DVDs to high-quality digital formats."
      />

      <Background color="bg-gray-100">
        <TopNav />
      </Background>

      <Section>
        <div className="py-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
            Media Digitization Services
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 md:text-xl">
            Preserve your precious analog recordings and video content with our
            professional digitization services. Don&apos;t let time erase your
            valuable cultural and personal memories.
          </p>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            What We Can Digitize
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            We handle all types of analog media with professional equipment and
            expertise
          </p>
        </div>

        <VerticalFeatureRow
          title="Cassette Tapes"
          description="Convert your precious cassette recordings to high-quality digital formats. We handle all types including standard, chrome, and metal tapes with careful attention to preserving the original audio quality."
          image="/assets/images/cassette-tapes.jpg"
          imageAlt="Professional cassette tape digitization"
        />

        <VerticalFeatureRow
          title="Reel-to-Reel Tapes"
          description="Professional digitization of reel-to-reel recordings with careful handling of vintage and delicate magnetic tape media. Our specialized equipment ensures optimal transfer quality for these precious recordings."
          image="/assets/images/reel-to-reel.jpg"
          imageAlt="Reel-to-reel tape digitization"
          reverse
        />

        <VerticalFeatureRow
          title="VHS & Video Tapes"
          description="Preserve your video memories by converting VHS, Hi8, MiniDV, and other video formats to modern digital files. Don't let your family memories and cultural recordings fade away."
          image="/assets/images/vhs-tapes.jpg"
          imageAlt="VHS and video tape digitization"
        />

        <VerticalFeatureRow
          title="DVDs & CDs"
          description="Transfer content from optical media including DVDs, CDs, and other disc-based formats to digital files. Perfect for backing up important content before disc degradation occurs."
          image="/assets/images/dvd-cd.jpg"
          imageAlt="DVD and CD digitization"
          reverse
        />
      </Section>

      <Background color="bg-red-50">
        <Section>
          <div className="py-16">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                The Risk of Waiting
              </h2>
              <p className="text-lg text-gray-600">
                Even well-preserved analog media deteriorates over time.
                Here&apos;s why digitization is urgent:
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Magnetic Tape Degradation
                </h3>
                <p className="text-gray-600">
                  Magnetic tapes lose quality over time, even when stored
                  properly. The magnetic particles can shed, leading to
                  permanent data loss.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Time-Sensitive Media
                </h3>
                <p className="text-gray-600">
                  Cassettes and reel-to-reel tapes have a lifespan of 20-30
                  years. After this period, degradation accelerates
                  significantly.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Environmental Factors
                </h3>
                <p className="text-gray-600">
                  Heat, humidity, and magnetic fields can cause irreversible
                  damage to analog media, even in ideal storage conditions.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-lg bg-red-100 p-6 text-center">
              <h3 className="mb-2 text-xl font-semibold text-red-800">
                Don&apos;t Wait Until It&apos;s Too Late
              </h3>
              <p className="text-red-700">
                Every day you wait increases the risk of permanent loss. Start
                preserving your cultural heritage and personal memories today.
              </p>
            </div>
          </div>
        </Section>
      </Background>

      <AudioRestoration />

      <Section
        title="Our Digitization Process"
        description="Professional handling and cutting-edge technology ensure the best possible results"
      >
        <Timeline>
          <Milestone
            time="1"
            title="Assessment"
            description="We evaluate your media condition and recommend the best approach for optimal results."
            start
            complete
          />
          <Milestone
            time="2"
            title="Preparation"
            description="Careful cleaning and preparation of your analog media to ensure the best possible transfer quality."
            right
            complete
          />
          <Milestone
            time="3"
            title="Digitization"
            description="High-quality conversion using professional equipment and proven techniques."
            complete
          />
          <Milestone
            time="4"
            title="Enhancement"
            description="Optional audio restoration and quality improvements to bring new life to your recordings."
            right
            end
          />
        </Timeline>
      </Section>

      <SupportUs />
      <Footer />
    </div>
  );
};

export { Digitization };
