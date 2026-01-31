import { TopNav } from '@/layout/TopNav';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

interface VideoHeroProps {
  title: string;
  titleLine2?: string;
  subtitle: string;
  videoSrc: string;
  screenshotSrc: string;
  screenshotAlt: string;
  ctaText?: string;
  ctaLink?: string;
  badge?: string;
}

const VideoHero = ({
  title,
  titleLine2,
  subtitle,
  videoSrc,
  screenshotSrc,
  screenshotAlt,
  ctaText,
  ctaLink,
  badge,
}: VideoHeroProps) => (
  <div>
    <Background color="bg-gray-100">
      <TopNav />
    </Background>

    <div className="relative">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gray-900/60" />
      </div>
      <div className="relative flex min-h-[600px] items-center">
        <Section yPadding="py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left side - Text content */}
            <div className="relative z-10 text-center lg:text-left">
              <div className="relative mx-auto inline-block lg:mx-0">
                <h1 className="text-5xl font-bold leading-tight text-white lg:text-6xl">
                  <span
                    className="block"
                    style={{
                      textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
                    }}
                  >
                    {title}
                  </span>
                  {titleLine2 && (
                    <span
                      className="block"
                      style={{
                        textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
                      }}
                    >
                      {titleLine2}
                    </span>
                  )}
                </h1>
                {badge && (
                  <div className="absolute -right-4 -top-3 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    {badge}
                  </div>
                )}
              </div>
              <div
                className="mt-6 text-xl text-white"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              ></div>
              {ctaText && ctaLink && (
                <div className="mt-8">
                  <a
                    href={ctaLink}
                    target="_blank"
                    className="inline-block rounded-md px-8 py-4 text-xl font-extrabold text-white hover:opacity-90"
                    style={{ backgroundColor: '#4CAF48' }}
                  >
                    {ctaText}
                  </a>
                </div>
              )}
            </div>

            {/* Right column intentionally empty; image is placed as an overlay below */}
          </div>
        </Section>
        {/* Oversized screenshot overlay anchored at grid seam */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden items-center lg:flex">
          <img
            src={screenshotSrc}
            alt={screenshotAlt}
            className="block max-h-[500px] w-auto max-w-[50vw] select-none object-contain"
          />
        </div>
      </div>
    </div>
  </div>
);

export { VideoHero };
