import { useState, useCallback, useEffect } from "react";

// ----------------------------------------------------------------------

export default function useLightbox(slides: any) {
  const [selected, setSelected] = useState(-1);

  const handleOpen = useCallback(
    (slideUrl: any) => {
      const slideIndex = slides.findIndex((slide: any) =>
        slide.type === "video"
          ? slide.poster === slideUrl
          : slide.src === slideUrl
      );


      setSelected(slideIndex);
    },
    [slides]
  );

  const handleClose = useCallback(() => {
    setSelected(-1);
  }, []);

  useEffect(() => {
  }, [selected]);

  return {
    selected,
    open: selected >= 0,
    onOpen: handleOpen,
    onClose: handleClose,
    setSelected,
  };
}
