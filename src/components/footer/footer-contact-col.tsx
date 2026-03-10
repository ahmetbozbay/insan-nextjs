export interface FooterContactColProps {
    email: string;
    phone: string;
    address: string;
    title: string;
}

export default function FooterContactCol({ email, phone, address,title }: FooterContactColProps) {
    return (
        <>
            <div className="xs-to-md-max:col-span-12 xs-to-lg-min:col-span-4 xs-to-md-min:col-span-5">
                <div className="footer-link">
                    <h4 className="text-xl xs-to-sm-max:text-base font-bold leading-normal text-white mb-20">{title}</h4>
                    <ul className="space-y-5">
                        <li>
                            <div className="flex items-center gap-10 mb-20">
                                <div className="bg-footer-bg text-white w-30 h-30 flex justify-center items-center rounded-[5px] text-md">
                                    <i className="ri-mail-fill"></i>
                                </div>
                                <a
                                    className="text-base xs-to-sm-max:text-md text-dark-subtitle font-normal leading-[1.56]"
                                    href={`mailto:${email}`}
                                >
                                    {email}
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-10 mb-20">
                                <div className="bg-footer-bg text-white w-30 h-30 flex justify-center items-center rounded-[5px] text-md">
                                    <i className="ri-phone-fill"></i>
                                </div>
                                <span className="text-base xs-to-sm-max:text-md text-dark-subtitle font-normal leading-[1.56]">
                                    {phone}
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-10 mb-20">
                                <div className="bg-footer-bg text-white w-30 h-30 flex justify-center items-center rounded-[5px] text-md">
                                    <i className="ri-map-pin-2-fill"></i>
                                </div>
                                <a
                                    className="text-base xs-to-sm-max:text-md text-dark-subtitle font-normal leading-[1.56]"
                                    href="javascript:void(0)"
                                >
                                    {address}
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

