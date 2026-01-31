type YouTubeEmbedProps = {
  videoId: string;
  title?: string;
  description?: string;
};

const YouTubeEmbed = ({
  videoId,
  title = 'YouTube video',
  description,
}: YouTubeEmbedProps) => (
  <div className="mx-auto max-w-4xl">
    <div className="mb-8 text-center">
      <span className="mb-2 inline-block rounded-full bg-primary-100 px-4 py-1 text-sm font-medium text-primary-700">
        Video Tutorial
      </span>
      <h2 className="mt-3 text-3xl font-bold text-gray-900">{title}</h2>
      {description && (
        <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
    <div className="relative w-full overflow-hidden rounded-2xl bg-gray-900 p-2 shadow-2xl">
      <div className="relative w-full pb-[56.25%]">
        <iframe
          className="absolute inset-0 h-full w-full rounded-xl"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
);

export { YouTubeEmbed };
