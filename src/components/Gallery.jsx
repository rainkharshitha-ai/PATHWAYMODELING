import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

/* VIDEOS */
import v1 from "./ModelingGallery/Gallery1.mp4";
import v4 from "./ModelingGallery/Gallery4.mp4";
import v5 from "./ModelingGallery/Gallery5.mp4";
import v6 from "./ModelingGallery/Gallery6.mp4";
import v7 from "./ModelingGallery/Gallery7.mp4";
import v8 from "./ModelingGallery/Gallery8.mp4";
import v9 from "./ModelingGallery/Gallery9.mp4";

/* IMAGES */
import i2 from "./ModelingGallery/Gallery2.jpg";
import i3 from "./ModelingGallery/Gallery3.jpg";
import i10 from "./ModelingGallery/Gallery10.jpg";
import i11 from "./ModelingGallery/Gallery11.jpg";
import i12 from "./ModelingGallery/Gallery12.jpg";
import i13 from "./ModelingGallery/Gallery13.jpg";
import i14 from "./ModelingGallery/Gallery14.jpeg";
import i15 from "./ModelingGallery/Gallery15.jpg";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState("image"); // image | video

  /* MEDIA LISTS */
  const videos = [v1, v4, v5, v6, v7, v8, v9];
  const images = [i2, i3, i10, i11, i12, i13, i14, i15];

  /* MASTER GALLERY */
  const galleryItems = [
    ...videos.map((v) => ({
      type: "video",
      src: v,
      slide: {
        type: "video",
        sources: [{ src: v, type: "video/mp4" }],
      },
    })),
    ...images.map((img) => ({
      type: "image",
      src: img,
      slide: { src: img },
    })),
  ];

  /* FILTERED ITEMS */
  const filteredItems = galleryItems.filter(
    (item) => item.type === filter
  );

  /* LIGHTBOX SLIDES */
  const slides = galleryItems.map((item) => item.slide);

  return (
    <>
      {/* PAGE */}
      <main className="bg-transparent text-black min-h-screen pt-40">
        <div className="max-w-7xl mx-auto px-4">

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-center mb-12">
            Modeling Portfolio
          </h1>

          {/* FILTER TABS */}
          <div className="flex justify-center gap-24 mb-20">
            {["image", "video"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`relative bg-transparent border-none outline-none
                  appearance-none focus:outline-none focus:ring-0
                  text-lg md:text-xl tracking-widest font-light
                  transition-all duration-300
                  ${
                    filter === type
                      ? "text-[#d4af37]"
                      : "text-gray-400 hover:text-black"
                  }`}
              >
                {type.toUpperCase()}

                {filter === type && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#d4af37]"></span>
                )}
              </button>
            ))}
          </div>

          {/* GALLERY GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredItems.map((item, i) => {
              const realIndex = galleryItems.indexOf(item);

              return (
                <div
                  key={i}
                  onClick={() => {
                    setIndex(realIndex);
                    setOpen(true);
                  }}
                  className="group relative aspect-[3/4] rounded-xl
                    overflow-hidden cursor-pointer
                    shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                >
                  {item.type === "image" ? (
                    <>
                      <img
                        src={item.src}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover
                          transition-transform duration-700 ease-out
                          group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center
                        bg-black/30 opacity-0 group-hover:opacity-100 transition">
                        <span className="tracking-widest text-sm text-white">
                          VIEW
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <video
                        src={item.src}
                        muted
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30" />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        plugins={[Video]}
        slides={slides}
      />
    </>
  );
}
