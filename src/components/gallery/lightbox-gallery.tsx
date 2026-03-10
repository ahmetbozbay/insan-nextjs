import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Video from "yet-another-react-lightbox/plugins/video";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import ReactLightbox, { useLightboxState } from "yet-another-react-lightbox";
import { Icon } from "@iconify/react";

// ----------------------------------------------------------------------

export default function Lightbox({
  slides,
  disabledZoom,
  disabledVideo,
  disabledTotal,
  disabledCaptions,
  disabledSlideshow,
  disabledThumbnails,
  disabledFullscreen,
  onGetCurrentIndex,
  ...other
}: any) {
  const totalItems = slides ? slides.length : 0;

  return (
    <>
      <ReactLightbox
        slides={slides}
        animation={{ swipe: 240 }}
        carousel={{ finite: totalItems < 5 }}
        controller={{ closeOnBackdropClick: true }}
        plugins={getPlugins({
          disabledZoom,
          disabledVideo,
          disabledCaptions,
          disabledSlideshow,
          disabledThumbnails,
          disabledFullscreen,
        })}
        on={{
          view: ({ index }) => {
            if (onGetCurrentIndex) {
              onGetCurrentIndex(index);
            }
          },
        }}
        toolbar={{
          buttons: [
            <DisplayTotal
              key={0}
              totalItems={totalItems}
              disabledTotal={disabledTotal}
            />,
            "close",
          ],
        }}
        render={{
          iconClose: () => <Icon width={24} icon="carbon:close" />,
          iconZoomIn: () => <Icon width={24} icon="carbon:zoom-in" />,
          iconZoomOut: () => <Icon width={24} icon="carbon:zoom-out" />,
          iconSlideshowPlay: () => <Icon width={24} icon="carbon:play" />,
          iconSlideshowPause: () => <Icon width={24} icon="carbon:pause" />,
          iconPrev: () => <Icon width={32} icon="carbon:chevron-left" />,
          iconNext: () => <Icon width={32} icon="carbon:chevron-right" />,
          iconExitFullscreen: () => (
            <Icon width={24} icon="carbon:center-to-fit" />
          ),
          iconEnterFullscreen: () => (
            <Icon width={24} icon="carbon:fit-to-screen" />
          ),
        }}
        {...other}
      />
    </>
  );
}

// ----------------------------------------------------------------------

export function getPlugins({
  disabledZoom,
  disabledVideo,
  disabledCaptions,
  disabledSlideshow,
  disabledThumbnails,
  disabledFullscreen,
}: any) {
  let plugins = [Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom];

  if (disabledThumbnails) {
    plugins = plugins.filter((plugin) => plugin !== Thumbnails);
  }
  if (disabledCaptions) {
    plugins = plugins.filter((plugin) => plugin !== Captions);
  }
  if (disabledFullscreen) {
    plugins = plugins.filter((plugin) => plugin !== Fullscreen);
  }
  if (disabledSlideshow) {
    plugins = plugins.filter((plugin) => plugin !== Slideshow);
  }
  if (disabledZoom) {
    plugins = plugins.filter((plugin) => plugin !== Zoom);
  }
  if (disabledVideo) {
    plugins = plugins.filter((plugin) => plugin !== Video);
  }

  return plugins;
}

// ----------------------------------------------------------------------

export function DisplayTotal({ totalItems, disabledTotal }: any) {
  const { currentIndex } = useLightboxState();

  if (disabledTotal) {
    return null;
  }

  return (
    <div
      className="yarl__button"
      style={{
        alignItems: "center",
        display: "inline-flex",
        justifyContent: "center",
      }}
    >
      <strong> {currentIndex + 1} </strong> / {totalItems}
    </div>
  );
}
