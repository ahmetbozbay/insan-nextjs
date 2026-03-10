import { cn } from "@/lib/utils";
import Link from "next/link";
import { Fragment } from "react";

interface FaqListItemProps {
  text: string;
}

const FaqListItem: React.FC<FaqListItemProps> = ({ text }) => (
  <li className="single-list flex items-center">
    <i className="text-xl mr-15 ri-shield-check-line"></i>
    <p className="text-[17px] leading-[1.6] text-tertiary-title font-normal">{text}</p>
  </li>
);

interface FaqItemProps {
  title?: string | any[];
  content?: string;
  listItems?: string[];
  additionalContent?: string[];
}

const FaqItem: React.FC<FaqItemProps> = ({ title, content, listItems = [], additionalContent = [] }) => (
  <div className="single-terms mb-30">
    {typeof title == 'string' ? (
      <h5 className="text-2xl font-semibold mb-18 capitalize">{title}</h5>
    ) : <Fragment>
      {title?.map((t, index) => (
        <Link href={t.href || '#'} download={!!t.download} className="text-primary">
          <h5 key={index} className="text-2xl font-semibold mb-18 capitalize">{t.title}</h5>
        </Link>
      ))}
    </Fragment>}
    {content && <p className="text-[17px] leading-[1.6] mb-20 text-tertiary-title font-normal">{content}</p>}
    {listItems.length > 0 && (
      <ul className="experience listing listing2">
        {listItems.map((item, index) => (
          <FaqListItem key={index} text={item} />
        ))}
      </ul>
    )}
    {additionalContent.length > 0 &&
      additionalContent.map((text, index) => (
        <p key={index} className="text-[17px] leading-[1.6] mb-20 text-tertiary-title font-normal">
          {text}
        </p>
      ))}
  </div>
);

interface FaqsAreaProps {
  faqs: FaqItemProps[];
  contactEmail: string;
  showContactInfo?: boolean;
  className?: string;
}

const FaqsArea: React.FC<FaqsAreaProps> = ({ faqs, contactEmail, showContactInfo = true, className = '' }) => (
  <div className={cn("faqs-area py-110 lg:py-70 xs-to-md-max:py-50",className)}>
    <div className="container">
      {faqs.map((faq, index) => (
        <FaqItem key={index} {...faq} />
      ))}
      {showContactInfo && (
        <div className="single-terms mb-0">
          {/* <h5 className="text-2xl font-semibold mb-18 capitalize">Contact Us</h5> */}
          <p className="text-md leading-[1.6] mb-20 text-tertiary-title font-normal text-normal">
            Email:{" "}
            <a href={`mailto:${contactEmail}`} className="text-primary">
              {contactEmail}
            </a>
          </p>
        </div>
      )}
    </div>
  </div>
);

export default FaqsArea;
