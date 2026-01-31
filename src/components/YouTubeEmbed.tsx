type YouTubeEmbedProps = {
  videoId: string;
  title?: string;
};

const YouTubeEmbed = ({
  videoId,
  title = 'YouTube video',
}: YouTubeEmbedProps) => (
  <div className="mx-auto w-3/4">
    <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
      {title}
    </h2>
    <div className="relative w-full pb-[56.25%]">
      <iframe
        className="absolute inset-0 h-full w-full rounded-lg shadow-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);

export { YouTubeEmbed };
