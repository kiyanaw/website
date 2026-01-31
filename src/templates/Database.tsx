import { VerticalFeatureRow } from '@/feature/VerticalFeatureRow';
import { Section } from '@/layout/Section';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Milestone } from './Milestone';
import { PublicBeta } from './PublicBeta';
import { SupportUs } from './SupportUs';
import { Timeline } from './Timeline';
import { VideoHero } from './VideoHero';

const Database = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    {/* <TopNav></TopNav> */}

    <VideoHero
      title="Language"
      titleLine2="Database"
      subtitle="Learner-driven deep context exploration within real-world language."
      videoSrc="/assets/videos/database-bg-video.mp4"
      screenshotSrc="/assets/images/language-database.png"
      screenshotAlt="kiyânaw Database interface screenshot"
      ctaText="Try it now →"
      ctaLink="https://bundle.kiyanaw.net/database"
      badge="NOW LIVE"
    />

    <PublicBeta ctaLink="https://bundle.kiyanaw.net/database" />

    <Section
      title="kiyânaw Database"
      description="kiyânaw Database provides learner-driven deep context exploration within real-world language. By indexing content from transcriptions and other published materials, learners are able to search for words, partial words, or phrases that support their current learning context. Initially developed for nêhiyawêwin (Plains Cree Y-dialect), kiyânaw Database <a href='https://docs.kiyanaw.net/language-database' target='_blank'>currently supports several Indigenous languages</a>, with additional support added weekly."
    >
      <VerticalFeatureRow
        title="High frequency words"
        description="When analysis (spell-checking) is available for a language, advanced indexing becomes possible, allowing us to keep a list of high-frequency words. Studying these lists can help to speed the advance our comprehension and fluency."
        image="/assets/images/database-high-frequency.png"
        imageAlt="High frequency words"
        targetText="Try it now"
        blank
      />
      <VerticalFeatureRow
        title="Explore in-context"
        description="Rather than just simple word lists or dictionaries, learners can explore for words within their current study domain and see & hear them used in-context. Links to existing transcriptions and other media let learners hear real language from fluent speakers, used correctly, in-context."
        image="/assets/images/database-distribution.png"
        imageAlt="Search and explore in-context"
        reverse
        targetText="Example distribution for itwêw"
        blank
      />
      <VerticalFeatureRow
        title="Powerful search"
        description="Being able to find words, partial words, or phrases adjacent to the materials we're currently studying as learners is extremely powerful. kiyânaw Database allows for powerful partial and advanced search to support the learner's journey."
        image="/assets/images/database-search.png"
        imageAlt="Powerful search features"
        targetText="Try it"
        blank
      />
    </Section>

    <Section
      title="kiyânaw Database Roadmap"
      description="Current progress and upcoming features for kiyânaw Database"
    >
      <Timeline>
        <Milestone
          time="1.0-beta"
          title="Test design & functionality"
          description="High frequency verbs and nouns, search function, itwêwina integration, surface distribution of forms."
          start
          complete
        />
        <Milestone
          time="1.0"
          title="General availability"
          description="Multi-source integration (Website, PDF), english search."
          right
        />
        <Milestone
          time="1.1"
          title="Advanced Search"
          description="Support for compound search options, Public Figure support."
          end
        />
      </Timeline>
    </Section>

    <SupportUs />

    <Footer />
  </div>
);

export { Database };
