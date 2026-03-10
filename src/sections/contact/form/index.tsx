'use client'
import { useState } from "react";

interface ContactFormSectionProps {
  mapEmbedUrl: string;
  t: any
  //   onSubmit: (data: ContactFormData) => void;
}

interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({ mapEmbedUrl, t }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onSubmit(formData);
  };

  return (
    <div className="pt-70 xs-to-md-max:pt-50">
      <div className="grid xs-to-lg-min:grid-cols-2 grid-cols-1 gap-24">
        {/* Form Section */}
        <div className="rounded-[15px] bg-white p-30 shadow-helpful-card">
          <form onSubmit={handleSubmit} className="custom-form">
            <div className="mb-30">
              <label className="mb-15 font-normal text-base xs-to-sm-max:text-md text-black block">
                {t.full_name}
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray text-base xs-to-sm-max:text-md font-normal text-tertiary-title leading-[1.56] rounded-[8px]"
                placeholder={t.full_name}
                required
              />
            </div>
            <div className="mb-30">
              <label className="mb-15 font-normal text-base xs-to-sm-max:text-md text-black block">
              {t.phone}
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray text-base xs-to-sm-max:text-md font-normal text-tertiary-title leading-[1.56] rounded-[8px]"
                placeholder={t.phone}
                required
              />
            </div>
            <div className="mb-30">
              <label className="mb-15 font-normal text-base xs-to-sm-max:text-md text-black block">
              {t.email}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray text-base xs-to-sm-max:text-md font-normal text-tertiary-title leading-[1.56] rounded-[8px]"
                placeholder={t.email}
                required
              />
            </div>
            <div className="mb-30">
              <label className="mb-15 font-normal text-base xs-to-sm-max:text-md text-black block">
                Message
              </label>
              <textarea
                name={t.message}
                value={formData.message}
                onChange={handleChange}
                className="py-13 px-20 min-h-150 w-full bg-secondary-gray border border-primary-gray text-base xs-to-sm-max:text-md font-normal text-tertiary-title leading-[1.56] rounded-[8px]"
                placeholder={t.message}
                required
              />
            </div>
            <button type="submit" className="btn-primary-fill leading-none px-30 py-16 rounded-[8px]">
            {t.send_message}
            </button>
          </form>
        </div>

        {/* Google Map Section */}
        <div className="map">
          <iframe
            className="w-full h-full rounded-[15px] min-h-400"
            src={mapEmbedUrl}
            width="600"
            height="450"
            style={{ border: "15px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
