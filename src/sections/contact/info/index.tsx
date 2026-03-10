import Link from "next/link";

interface ContactInfoItemProps {
    iconClass: string;
    title: string;
    value: string;
    href: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ iconClass, title, value, href }) => (
    <div className="flex flex-wrap gap-30 items-center">
        <div className="circle-btn w-50 h-50">
            <i className={`text-xl ${iconClass}`}></i>
        </div>
        <div className="w-1 h-full bg-primary-gray"></div>
        <div className="contact-content">
            <p className="text-primary text-lg xs-to-sm-max:text-base font-bold mb-10 leading-none">{title}</p>
            <Link href={href} className="text-primary-title text-base xs-to-sm-max:text-md font-semibold leading-none">
                {value}
            </Link>
        </div>
    </div>
);

interface ContactInfoSectionProps {
    contacts: ContactInfoItemProps[];
}

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ contacts }) => {
    return (
        <div className="rounded-[10px] bg-white p-30 shadow-helpful-card">
            <div className="flex flex-wrap gap-20 justify-between">
                {contacts.map((contact, index) => (
                    <ContactInfoItem key={index} {...contact} />
                ))}
            </div>
        </div>
    );
};

export default ContactInfoSection;
