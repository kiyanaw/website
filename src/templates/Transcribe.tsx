import { YouTubeEmbed } from '@/components/YouTubeEmbed';
import { VerticalFeatureRow } from '@/feature/VerticalFeatureRow';
import { Section } from '@/layout/Section';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Milestone } from './Milestone';
import { OpenSourceBanner } from './OpenSourceBanner';
import { PublicBeta } from './PublicBeta';
import { SupportUs } from './SupportUs';
import { Timeline } from './Timeline';
import { VideoHero } from './VideoHero';

const Transcribe = () => (
  <div className="text-gray-600 antialiased">
    <Meta
      title={`${AppConfig.title} - Collaborative Transcription software`}
      description={AppConfig.description}
    />
    <VideoHero
      title="kiyânaw Transcribe"
      subtitle="Free online <u>collaborative</u> transcription software designed for Indigenous languages."
      videoSrc="/assets/videos/transcribe-bg-video.mp4"
      screenshotSrc="/assets/images/kiyanaw-transcribe-header.png"
      screenshotAlt="kiyânaw Transcribe interface screenshot"
      ctaText="Try it now →"
      ctaLink="https://bundle.kiyanaw.net/"
    />

    <PublicBeta />

    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="mx-auto max-w-screen-lg px-3">
        <YouTubeEmbed
          videoId="58SPAZMQ0Qs"
          title="See it in Action"
          description="Watch a quick walkthrough of kiyânaw Transcribe and learn how to get started with collaborative transcription."
        />
      </div>
    </div>

    <OpenSourceBanner />

    <Section>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">FEATURES</h1>
      </div>

      <VerticalFeatureRow
        title="Language-Agnostic"
        description="We add spell-check support for Indigenous languages continually. As <a href='https://docs.kiyanaw.net/transcribe-features/spell-check' target='_blank'>transducers</a> (spell-checkers) become available for various languages, we are able to add support for that language to our platform easily. But even if your language isn't supported yet, most of our <a href='https://docs.kiyanaw.net/transcribe-features', target='_blank'>features</a> will still work."
        image="/assets/images/language-selector.png"
        imageAlt="Support for various media formats"
        // target="https://bundle.kiyanaw.net/transcribe-edit/1ead8e60"
        targetText="View transcription"
        reverse
        blank
      />

      <VerticalFeatureRow
        title="Online Collaboration"
        description="Work on the same transcription <a href='https://docs.kiyanaw.net/transcribe-features/sharing' target='_blank'>simultaneously with friends or other language learners</a>. Receive visual cues when others are editing nearby content, as well as conflict resolution options when editing the same region."
        image="/assets/images/transcribe-conflict.png"
        imageAlt="Collaborative transcribing"
        // target="https://bundle.kiyanaw.net/transcribe-edit/1ead8e60"
        targetText="View transcription"
        blank
      />
      <VerticalFeatureRow
        title="Audio & Video Support"
        description="Expanding support for various media formats, audio and video including most mobile formats. Upload directly from your phone and start transcribing."
        image="/assets/images/transcribe-video.png"
        imageAlt="Support for various media formats"
        // target="https://bundle.kiyanaw.net/transcribe-edit/1ead8e60"
        targetText="View transcription"
        reverse
        blank
      />
      <VerticalFeatureRow
        title="Deep Linking"
        description="Clicking on a Region or Issue will result in <a href='https://docs.kiyanaw.net/transcribe-features/regions#linking-to-a-region' target='_blank'>the URL updating to that item's location</a>, allowing users to share the URL with others to gain support on problem areas easily."
        image="/assets/images/transcribe-share.png"
        imageAlt="Deep link to specific regions"
        // target="https://bundle.kiyanaw.net/transcribe-edit/1ead8e60/wavesurfer_0pm4l1hk4pg"
        targetText="Transcription deep link"
        blank
      />
      <VerticalFeatureRow
        title="Issue Flagging"
        description="As users encounter problem words or areas within a transcription, <a href='https://docs.kiyanaw.net/transcribe-features/issues' target='_blank'>those words can be flagged as problematic for follow-up later on</a>, and will be visually marked for easy identification."
        image="/assets/images/transcribe-issues.png"
        imageAlt="High frequency words"
        // target="https://bundle.kiyanaw.net/transcribe-edit/73150c90"
        targetText="View transcription"
        reverse
        blank
      />
      <VerticalFeatureRow
        title="Spell checking integration"
        description="When <a href='http://localhost:3001/transcribe-features/spell-check' target='_blank'>analysis (spell-checking) is available</a> for a language, <a href='http://localhost:3001/language-database' target='_blank'>advanced indexing becomes possible</a>, allowing us to keep a list of high-frequency words. Studying these lists can help to speed the advance our comprehension and fluency."
        image="/assets/images/transcribe-spelling.png"
        imageAlt="High frequency words"
        // target="https://bundle.kiyanaw.net/transcribe-edit/1ead8e60"
        targetText="View transcription"
        blank
      />
      {/* <VerticalFeatureRow
        title="kiyânaw Theatre"
        description="When analysis (spell-checking) is available for a language, advanced indexing becomes possible, allowing us to keep a list of high-frequency words. Studying these lists can help to speed the advance our comprehension and fluency."
        image="/assets/images/database-high-frequency.png"
        imageAlt="High frequency words"
        comingSoon
        reverse
      /> */}
    </Section>

    <Section
      title="kiyânaw Transcribe Roadmap"
      description="Current progress and upcoming features for kiyânaw Transcribe"
    >
      <Timeline>
        <Milestone
          time="1.0-alpha"
          title="Internal testing and development"
          description="Internal online release, spell check support for nêhiyawêwin, issue submission, mp4 video support, database indexing, adjustable playback rate, shared transcriptions."
          start
          complete
        />
        <Milestone
          time="1.0-beta"
          title="Beta release"
          description="Realtime updates upgrade (Amplify API v2), realtime collaboration, contributor awareness, private transcriptions, disable indexing, N. Michif support (experimental)."
          right
          complete
        />
        <Milestone
          time="1.0"
          title="General availability"
          description="Publish transciptions, export formats, syllabics support, +1 language spell check, versioning, keyboard shortcuts"
        />
        <Milestone
          time="1.1"
          title="kiyânaw Theatre"
          description='kiyânaw Theatre will provide a publicly-available list of published transcriptions that will be viewable in "theatre mode", along with the ability to export subtitles files for other platforms such as YouTube.'
          right
        />
        <Milestone
          time="1.2"
          title="Transcription Trainer"
          description='Training mode uses an existing, finished transcription as the key for training users on transcribing. Rather that highlight words spelled "correctly", the transcription will highlight as the learner correctly matches the key.'
        />
        <Milestone
          time="1.3"
          title="Issue browser"
          description="Central location for the browsing, searching & filtering of issues across a body of transcriptions."
          right
          end
        />
      </Timeline>

      {/* <div className="text-center">
        <Link target="_blank" href="https://bundle.kiyanaw.net/">
          <Button>{`Try it out now →`}</Button>
        </Link>
      </div> */}
    </Section>

    <SupportUs />

    <Footer />
  </div>
);

export { Transcribe };
