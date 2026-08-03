import { useEffect } from "react";

export interface GalleryImage {
  src: string;
  label: string;
  description?: string;
}

interface ImageLightboxProps {
  isOpen: boolean;
  image: GalleryImage | null;
  onClose: () => void;
}

export default function ImageLightbox({ isOpen, image, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl   p-4 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full  text-lg text-white transition hover:bg-slate-700"
          aria-label="Close image"
        >
          ×
        </button>

        <img
          src={image.src}
          alt={image.label}
          className="max-h-[90vh] w-full rounded-lg object-contain"
        />

        <div className="mt-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            {image.label}
          </p>
          {image.description ? (
            <p className="mt-2 text-sm text-gray-300">{image.description}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
