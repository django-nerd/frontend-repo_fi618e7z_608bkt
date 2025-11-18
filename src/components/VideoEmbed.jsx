export default function VideoEmbed({ url, title = 'Video' }) {
  const isYouTube = url && /youtube\.com|youtu\.be/.test(url)
  const isVimeo = url && /vimeo\.com/.test(url)
  const isMp4 = url && url.endsWith('.mp4')

  return (
    <div className="relative w-full rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-800 bg-slate-900/70 flex items-center justify-between">
        <div className="text-slate-200 font-medium">{title}</div>
        <div className="text-xs text-slate-400">{url ? 'Embedded' : 'Awaiting media URL'}</div>
      </div>

      <div className="aspect-video w-full bg-slate-950/60">
        {url ? (
          isYouTube || isVimeo ? (
            <iframe
              title={title}
              src={url}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : isMp4 ? (
            <video
              className="w-full h-full object-cover"
              src={url}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-slate-400 text-sm px-6 text-center">
              Unsupported media URL. Provide a YouTube/Vimeo embed URL or a direct .mp4 link.
            </div>
          )
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2 text-center px-6">
            <div className="text-slate-300 text-sm">Iraq map video placeholder</div>
            <div className="text-slate-500 text-xs">Set VITE_HOME_VIDEO_URL to a YouTube/Vimeo embed or .mp4 link to display here.</div>
          </div>
        )}
      </div>
    </div>
  )
}
