import { VerticalFeatureRow } from '@/feature/VerticalFeatureRow';
import { Section } from '@/layout/Section';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Milestone } from './Milestone';
import { SupportUs } from './SupportUs';
import { Timeline } from './Timeline';
import { VideoHero } from './VideoHero';

const MobileApp = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    {/* <TopNav></TopNav> */}

    <VideoHero
      title="kiyânaw"
      titleLine2="Mentor"
      subtitle="Now <u>anyone</u> can build a language app.<br /><i>Any language, any dialect, any community.</i>"
      videoSrc="/assets/videos/mentor-bg.mp4"
      screenshotSrc="/assets/images/kiyanaw-mentor-header2.png"
      screenshotAlt="kiyânaw Mentor interface screenshots"
      ctaText="Download on the App Store"
      ctaLink="https://apps.apple.com/ca/app/kiy%C3%A2naw-mentor/id6758683587"
      ctaImage="/assets/images/app-store-badge.svg"
      ctaText2="Get it on Google Play"
      ctaLink2="https://play.google.com/store/apps/details?id=net.kiyanaw.mentor"
      ctaImage2="/assets/images/google-play-badge.png"
      badge="PUBLIC BETA"
    />
    {/* <PublicBeta /> */}

    <Section
      title="kiyânaw Mentor"
      description="kiyânaw Mentor is a platform for building community-driven language bundles. Like MAP (Mentor-Apprentice Program) but available to any learner, a Mentor with a phone can answer any Learner question and contribute to the community language pool for any region or dialect."
    >
      <VerticalFeatureRow
        title="Phrase oriented"
        description="The kiyânaw App seeks to fill that 'intermediate gap' by allowing for the collection of phrases with audio. Phrase-based learning, especially self-directed, allows learners to incorporate useful language into their day-to-day, slowly building up towards fluency."
        image="/assets/images/app-phrase-oriented.png"
        imageAlt="Phrase-oriented learning"
      />
      <VerticalFeatureRow
        title="Learner driven"
        description="Learners can ask questions from Mentors and Language Keepers, answers to which contribute to the overall pool of phrases. Learner questions initially go into a private pool, only available to Mentors. Reponses (with audio) that become public contribute to the overall language bundle for future learners."
        image="/assets/images/app-questions.png"
        imageAlt="Learners can submit questions"
        reverse
      />
      <VerticalFeatureRow
        title="Your custom playlist"
        description="At the heart of the kiyânaw Mentor app is your playlist. Add audio from responses that have been contributed to the app to your playlist, and rotate in new phrases to fit your learning curve. Missing a phrase? Submit a new question for the specific sentence you are looking for."
        image="/assets/images/app-playlist.png"
        imageAlt="Build a personal playlist of phrases"
      />
      <VerticalFeatureRow
        title="Searchable"
        description="Learners can request answers from Language Keepers, contributing to the overall pool of phrases. Learner questions initially go into a question pool, hidden from the general list of responses, and can be elevated into the public pool of responses if they do not exist. Questions that have already been answered will be linked to existing answers to reduce duplication."
        image="/assets/images/app-searchable.png"
        imageAlt="Search the phrase pool"
        reverse
      />
      <VerticalFeatureRow
        title="Multi-language, multi-dialect"
        description="The kiyânaw Platform is designed to support any language or dialect. Received funding for a new app? Download the list of published phrases from a nearby dialect or language and spend 100% of your funding on recording audio from fluent speakers for your region or community."
        image="/assets/images/app-multi-dialect.png"
        imageAlt="Platform designed for any language or dialect"
      />
    </Section>

    <Section
      title="kiyânaw App Roadmap"
      description="Current progress and upcoming features for kiyânaw App"
    >
      <Timeline>
        <Milestone
          time="1.0-alpha"
          title="Private beta"
          description="Internal version for early testing."
          start
          complete
        />
        <Milestone
          time="1.0-beta"
          title="Public beta"
          description="Public beta release, question submission and promotion, search, browse, playlist, favorites."
          right
          complete
        />
        <Milestone
          time="1.0"
          title="General availability"
          description="Public release. Multiple language support."
          end
        />
      </Timeline>
    </Section>

    <SupportUs />

    <Footer />
  </div>
);

export { MobileApp };
