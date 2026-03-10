import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from 'next-sanity';
import { cn } from '@/lib/utils';

type BlogDetailsSectionProps = {
    imageSrc: string;
    author: string;
    category: string;
    title: string;
    categories: string[];
    socialLinks: { platform: string; iconClass: string; link: string }[];
    body: any;
    content?: string;
    relatedBlogs: { imageSrc: string; author: string; category: string; title: string; content: string; link: string }[];
};

const BlogDetailsSection: React.FC<BlogDetailsSectionProps> = ({
    imageSrc,
    author,
    category,
    title,
    content,
    categories,
    socialLinks,
    body,
    relatedBlogs,
}) => {
    console.log({ body })
    return (
        <div className="single-blog">
            <div className="relative blog-details-img">
                <Link href="#">
                    <Image src={imageSrc} alt="Blog Image" className="rounded-[15px] w-full" width={600} height={400} />
                </Link>
                <div className="brush-bg absolute top-20 left-20">
                    <Image src="/assets/images/gallery/brush-bg-two.png" alt="Brush Image" width={130} height={130} />
                </div>
            </div>
            <div className="blog-info mt-30">
                <div className="blog-info-title">
                    <div className="flex gap-16 mb-20 items-center">
                        <div className="user flex gap-10 items-center text-md text-tertiary-title">
                            <i className="ri-user-line"></i>
                            <p className="info">By: {author}</p>
                        </div>
                        <div className="donate flex gap-10 items-center text-md text-tertiary-title">
                            <i className="ri-chat-3-line"></i>
                            <p className="info">{category}</p>
                        </div>
                    </div>
                    <h4 className="text-xl font-bold leading-normal text-primary-title mb-20">{title}</h4>
                    {content && (
                        <p className="text-base font-normal leading-normal text-primary-title mb-30">{content}</p>
                    )}

                    <PortableText
                        value={body}
                        components={{
                            block: {
                                normal: ({ children }: any) => {
                                    if (children == '' || (children.length == 1 && children[0] == '')) {
                                        return <br />
                                    }
                                    return <p className="text-base font-normal leading-normal text-primary-title mb-30">{children}</p>
                                },
                            },
                        }}
                    />

                    <div className="divider mb-30"></div>
                </div>
                <div className="another-blog-info mb-60">
                    <div className="flex justify-between items-center gap-16 flex-wrap">
                        <div className="imp-btn flex gap-16 items-center">
                            {categories.map((category, index) => (
                                <div key={index} className="group">
                                    <div className="py-10 px-30 bg-[#e4edeb] rounded-[10px] cursor-pointer transition-bundle group-hover:bg-primary">
                                        <p className="text-base font-medium text-primary-title capitalize transition-bundle group-hover:text-white">{category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="share-link flex items-center gap-20 flex-wrap">
                            <p className="text-base font-semibold text-black leading-[16px] capitalize">share:</p>
                            <div className="social-link flex gap-10">
                                {socialLinks.map((social, index) => (
                                    <div key={index} className="w-40 min-w-40 h-40 rounded-full flex justify-center items-center bg-about-icon transition-bundle text-base text-primary-title hover:bg-primary hover:text-white">
                                        <a href={social.link}><i className={social.iconClass}></i></a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="related-blog">
                    <p className="text-base font-semibold text-black leading-[16px] capitalize mb-30">Related blogs</p>
                    {relatedBlogs.map((blog, index) => (
                        <div key={index} className="single-blog rounded-[15px] border border-primary-gray flex gap-30 mb-30">
                            <Link href={blog.link}>
                                <Image src={blog.imageSrc} alt={blog.title} className="rounded-tl-[15px] rounded-bl-[15px] min-w-300 h-full w-full" width={300} height={200} />
                            </Link>
                            <div className="blog-info h-full p-20">
                                <div className="blog-info-title">
                                    <div className="flex gap-16 mb-16 items-center flex-wrap">
                                        <div className="user flex gap-10 items-center text-md">
                                            <i className="ri-user-line text-primary"></i>
                                            <p className="info text-tertiary-title">By: {blog.author}</p>
                                        </div>
                                        <div className="donate flex gap-10 items-center text-md">
                                            <i className="ri-chat-3-line text-primary"></i>
                                            <p className="info text-tertiary-title">{blog.category}</p>
                                        </div>
                                    </div>
                                    <h4 className="text-xl leading-normal font-bold text-primary-title mb-15">{blog.title}</h4>
                                    <p className="text-base leading-normal font-normal text-tertiary-title mb-30">{blog.content}</p>
                                    <Link href={blog.link} className="btn-primary-fill rounded-[30px] py-12 px-25">Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsSection;
