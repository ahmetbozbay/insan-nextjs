'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import useLightbox from "@/hooks/use-linght-box";
import Lightbox from "@/components/gallery/lightbox-gallery";

interface Category {
  href: string;
  isActive?: boolean;
  name: string;
}

interface RelatedEvent {
  date: Date;
  title: string;
  imageUrl: string;
  eventLink: string;
}

interface Tag {
  name: string;
}

interface ProjectSidebarProps {
  categories: Category[];
  images: any[];
  relatedEvents: RelatedEvent[];
  tags: Tag[];
}

const ProjectSidebar: React.FC<ProjectSidebarProps> = ({ categories, relatedEvents, tags, images }) => {
  const formattedDate = (date: Date) => {
    const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options)
  };

  const slides = images.map((url) => ({ src: url }));
  const lightbox = useLightbox(slides);


  return (
    <>
      <div className="right-element">
        {/* Category Section */}
        <div className="category-section mb-30">
          <p className="text-base font-bold text-black leading-[16px] mb-20 xs-to-sm-max:text-md xs-to-sm-max:mb-15">
            Galleri
          </p>
          <div className="flex w-full gap-10 mb-20">
            <div className="rounded-[10px] h-5 w-[30%] bg-primary"></div>
            <div className="rounded-[10px] h-5 w-[60%] bg-primary-gray"></div>
          </div>
          <div className="category-box rounded-[15px] border border-primary-gray p-20">
            <ul className="listing flex justify-center items-center flex-wrap">
              {images.map((image, index) => (
                <li key={index} className={cn("single-list mb-9 w-1/3 aspect-square p-[10px]")} onClick={() => lightbox.onOpen(image)}>
                  <Image src={image} className="rounded-[15px] w-full h-full" width={400} height={400} alt="Project Image" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className="category-section mb-30">
        <p className="text-base font-bold text-black leading-[16px] mb-20 xs-to-sm-max:text-md xs-to-sm-max:mb-15">
          Kategoriler
        </p>
        <div className="flex w-full gap-10 mb-20">
          <div className="rounded-[10px] h-5 w-[30%] bg-primary"></div>
          <div className="rounded-[10px] h-5 w-[60%] bg-primary-gray"></div>
        </div>
        <div className="category-box rounded-[15px] border border-primary-gray p-20">
          <ul className="listing">
            {categories.map((category, index) => (
              <li key={index} className={cn("single-list mb-9", !!category.isActive && 'active')}>
                <Link href={category.href} className="text-md font-medium text-tertiary-title leading-[14px]">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div> */}

        {/* Related Events */}
        {/* <div className="related-post-section mb-30">
        <p className="text-base font-bold text-black leading-[16px] mb-20 xs-to-sm-max:text-md xs-to-sm-max:mb-15">
          İlgili Habarler
        </p>
        <div className="flex w-full gap-10 mb-20">
          <div className="rounded-[10px] h-5 w-[30%] bg-primary"></div>
          <div className="rounded-[10px] h-5 w-[60%] bg-primary-gray"></div>
        </div>
        <div className="rounded-[15px] border border-primary-gray p-20">
          {relatedEvents.map((event, index) => (
            <div key={index} className="flex mb-15">
              <div className="post-img w-57 min-w-57 h-57">
                <Link href={event.eventLink}>
                  <Image src={event.imageUrl} width={57} height={57} className="w-full h-full rounded-[15px]" alt="Event Image" />
                </Link>
              </div>
              <div className="ml-15">
                <div className="flex gap-10 items-center mb-8 text-tertiary-title">
                  <i className="ri-time-line"></i>
                  <p className="text-md leading-[14px] text-tertiary-title">{formattedDate(event.date)}</p>
                </div>
                <h4 className="text-md leading-[18px] text-primary-title font-semibold line-clamp-1 transition-bundle hover:text-primary">
                  <Link href={event.eventLink}>{event.title}</Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div> */}

        {/* Tags Section */}
        {tags.length > 0 && (
          <div className="tag-section mb-0">
            <p className="text-base font-bold text-black leading-[16px] mb-20 xs-to-sm-max:text-md xs-to-sm-max:mb-15">
              Tags
            </p>
            <div className="flex w-full gap-10 mb-20">
              <div className="rounded-[10px] h-5 w-[30%] bg-primary"></div>
              <div className="rounded-[10px] h-5 w-[60%] bg-primary-gray"></div>
            </div>
            <div className="rounded-[15px] border border-primary-gray p-20">
              <div className="flex gap-10 flex-wrap">
                {tags.map((tag, index) => (
                  <div key={index} className="group">
                    <div className="py-8 px-20 bg-[#e4edeb] rounded-[10px] cursor-pointer transition-bundle group-hover:bg-primary">
                      <p className="text-md font-medium text-primary-title capitalize transition-bundle group-hover:text-white">
                        {tag.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Lightbox
        index={lightbox.selected}
        slides={slides}
        open={lightbox.open}
        close={lightbox.onClose}
      />
    </>
  );
};

export default ProjectSidebar;