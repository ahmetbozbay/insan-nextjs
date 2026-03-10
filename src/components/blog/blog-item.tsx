'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BlogItemDialog from "./blog-item-dialog";

export interface BlogItemProps {
    image: string;
    author: string;
    category: string;
    title: string;
    description?: string;
    link: string;
    url: string;
    date: Date;
    buttonText?: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ image, author, category, title, description, link, buttonText, date, url }) => {
    const [open, setOpen] = useState(false)
    const [iframeUrl, setIframeUrl] = useState(url)
    return (
        <>
            <div className="group" onClick={() => setOpen(true)}>
                <div
                    className="p-20 rounded-[10px] border border-primary-gray cursor-pointer transition-all delay-300 ease-linear group-hover:bg-white group-hover:border-transparent shadow-blog-one"
                >
                    <div
                        content={date.toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'numeric',
                            year: 'numeric'
                        }).split('/').map(f => f.padStart(2, '0')).join('\n')}
                        className="blog-img relative before:content-[attr(content)] ">
                        {/* <Link href={link}> */}
                        <Image
                            src={image}
                            width={500}
                            height={300}
                            className="w-full rounded-[10px]"
                            alt="Blog Image"
                        />
                        {/* </Link> */}
                    </div>
                    <div className="blog-info mt-45">
                        <div className="flex gap-16 items-center mb-16">
                            {/* <div className="flex gap-10 items-center min-w-[100px]">
                                <i className="text-base text-tertiary-title ri-user-line"></i>
                                <p className="text-md text-primary-title">By: {author}</p>
                            </div> */}
                            <div className="flex gap-10 items-center">
                                <i className="text-base text-tertiary-title ri-chat-3-line"></i>
                                <p className="text-md text-primary-title line-clamp-1">{category}</p>
                            </div>
                        </div>
                        <h4 className="common-title line-clamp-2 text-xl xs-to-sm-max:text-base mb-15 leading-normal transition-all delay-300 ease-linear group-hover:text-primary h-[60px]">
                            {title}
                            {/* <Link href={link}>{title}</Link> */}
                        </h4>
                        {/* {description &&
                            <p className="common-pera line-clamp-2 text-base xs-to-sm-max:text-md leading-normal">
                                {description}
                            </p>
                        }
                        {buttonText && (
                            <div className="mb-20 mt-[2rem]">
                                <Link href={'#'} className="border border-info-gray rounded-[40px] py-17 px-30 text-base font-semibold text-primary-title transition-bundle xs:py-14 xs:px-24 xs:text-md hover:bg-primary hover:border-primary hover:text-white">
                                    {buttonText}
                                </Link>
                            </div>
                        )} */}
                    </div>
                </div>
            </div>
            <BlogItemDialog open={open} setOpen={setOpen} url={iframeUrl} />
        </>
    );
}

export default BlogItem