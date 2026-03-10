// import Image from "next/image";

// interface PaymentMethodProps {
//     id: string;
//     label: string;
// }

// interface ProjectDetailsSectionProps {
//     imageUrl: string;
//     title: string;
//     description: string;
//     goalAmount: number;
//     raisedAmount: number;
//     paymentMethods: PaymentMethodProps[];
//     quickAmounts: number[];
// }

// interface ProjectFormData {
//     amount: number;
//     name: string;
//     email: string;
//     company: string;
//     postcode: string;
//     city: string;
//     houseNumber: string;
//     agreeTerms: boolean;
// }

// const ProjectDetailsSection: React.FC<ProjectDetailsSectionProps> = ({
//     imageUrl,
//     title,
//     description,
//     goalAmount,
//     raisedAmount,
//     paymentMethods,
//     quickAmounts,
// }) => {
//     //   const [formData, setFormData] = useState<ProjectFormData>({
//     //     amount: quickAmounts[0] || 50,
//     //     name: "",
//     //     email: "",
//     //     company: "",
//     //     postcode: "",
//     //     city: "",
//     //     houseNumber: "",
//     //     agreeTerms: false,
//     //   });

//     //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     //     setFormData({ ...formData, [e.target.name]: e.target.value });
//     //   };

//     //   const handleCheckboxChange = () => {
//     //     setFormData({ ...formData, agreeTerms: !formData.agreeTerms });
//     //   };

//     //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     //     e.preventDefault();
//     //     if (!formData.agreeTerms) {
//     //       alert("You must agree to the terms and conditions.");
//     //       return;
//     //     }
//     //     onSubmit(formData);
//     //   };

//     return (
//         <div className="donate-details rounded-[15px] bg-white shadow-helpful-card p-10">
//             <div className="relative blog-details-img">
//                 <Image src={imageUrl} alt="Donation" width={600} height={400} className="rounded-t-[15px] w-full" />
//             </div>

//             <div className="donate-info p-30 xs-to-sm-max:p-20 mt-10 xs-to-sm-max:mt-0">
//                 <h4 className="text-xl font-bold leading-[30px] text-primary-title mb-30 xs-to-sm-max:text-base">{title}</h4>
//                 <p className="text-base font-normal leading-[25px] text-tertiary-title mb-30 xs-to-sm-max:text-md">
//                     {description}
//                 </p>

//                 {/* Notice Section */}
//                 <div className="flex py-11 px-15 border border-primary-gray rounded-[10px] mb-30">
//                     <div className="mr-20 text-secondary text-6xl">
//                         <i className="ri-error-warning-fill"></i>
//                     </div>
//                     <div className="flex items-center flex-wrap gap-10">
//                         <h4 className="text-xl font-bold leading-[30px] text-primary-title xs-to-sm-max:text-base">Notice:</h4>
//                         <p className="text-md font-normal leading-[1.5] text-tertiary-title">
//                             Test mode is enabled. While in test mode, no live donations are processed.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Progress Bar */}
//                 <div className="progress custom-progress mt-0">
//                     <div
//                         className="progress-bar bg-primary"
//                         style={{ width: `${(raisedAmount / goalAmount) * 100}%` }}
//                     ></div>
//                 </div>

//                 {/* Donation Details */}
//                 <div className="flex justify-between mt-14 mb-20">
//                     <div className="flex gap-20">
//                         <div className="charges">
//                             <p className="text-lg xs:text-base text-primary-title font-bold leading-none mb-8">${goalAmount}</p>
//                             <h4 className="text-base xs:text-md font-normal text-primary leading-normal">Goal</h4>
//                         </div>
//                         <div className="charges">
//                             <p className="text-lg xs:text-base text-primary-title font-bold leading-none mb-8">${raisedAmount}</p>
//                             <h4 className="text-base xs:text-md font-normal text-primary leading-normal">Raised</h4>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Payment Section */}
//                 <div className="payment-section rounded-[10px] p-20 border border-primary-gray">
//                     <h4 className="text-xl font-bold text-primary-title xs-to-sm-max:text-base">Select Payment Method</h4>
//                     <div className="payment-btn flex gap-16 flex-wrap">
//                         {paymentMethods.map((method) => (
//                             <div key={method.id} className="custom-radio-check flex gap-10 items-center">
//                                 <input type="radio" name="payment-method" className="radio radio-success w-16 h-16" id={method.id} />
//                                 <label className="text-base font-semibold leading-[16px] text-primary-title" htmlFor={method.id}>
//                                     {method.label}
//                                 </label>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Donation Amount Selection */}
//                 <div className="amount flex justify-between gap-16 items-center flex-wrap mt-30">
//                     <div className="enter-amount">
//                         <button className="btn-primary-fill rounded-full leading-none px-25 pt-16 pb-18">Enter Your Amount</button>
//                     </div>
//                     <div className="all-amount flex flex-wrap gap-16">
//                         {quickAmounts.map((amount) => (
//                             <button key={amount} className="btn-primary-outline rounded-full leading-none px-25 pt-16 pb-18">
//                                 ${amount}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Donation Form */}
//                 {/* <div className="mt-30">
//                     <h4 className="text-xl font-bold leading-[30px] text-primary-title mb-30">Details</h4>
//                     <form>
//                         <div className="grid grid-cols-12 gap-20">
//                             <input type="text" name="name" placeholder="Full Name" required />
//                             <input type="email" name="email" placeholder="Email" required />
//                             <input type="text" name="company" placeholder="Company Name" required />
//                         </div>

//                         <h4 className="text-xl font-bold leading-[30px] text-primary-title mt-30 mb-30">Address</h4>
//                         <div className="grid grid-cols-12 gap-20">
//                             <input type="text" name="postcode" placeholder="Postcode" required />
//                             <input type="text" name="city" placeholder="City" required />
//                             <input type="text" name="houseNumber" placeholder="House No" required />
//                         </div>

//                         <div className="agreement-section my-30">
//                             <input type="checkbox" />
//                             <label>I agree with the Terms of Service</label>
//                         </div>

//                         <button type="submit" className="btn-primary-fill px-30 py-16 rounded-[8px] uppercase">Project Now</button>
//                     </form>
//                 </div> */}
//             </div>
//         </div>
//     );
// };

// export default ProjectDetailsSection;


import Slider from "@/components/slider";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetailsSectionProps {
  imageUrl: string;
  images: string[];
  title: string;
  slug: string;
  description: string;
  goalAmount: string;
  raisedAmount?: string;
}

const ProjectDetailsSection: React.FC<ProjectDetailsSectionProps> = ({
  imageUrl,
  title,
  slug,
  images,
  description,
  goalAmount,
  raisedAmount,
}) => {
  return (
    <div className="donate-details rounded-[15px] bg-white shadow-helpful-card">
      <Slider
        emblaClassName="w-full"
        slideItemClass="w-full"
        pervClassName={'left-[2rem]'}
        nextClassName={'right-[2rem]'}
        showNavigation={false}
        showDots={false}
      >
        <div className="relative blog-details-img  w-full h-full max-h-[510px]">
          <Image src={imageUrl} className="rounded-t-[15px] w-full h-full" width={600} height={400} alt="Project Image" />
          {/* <div className="blog-img relative"></div> */}
        </div>
        {images.map((image: string, index: number) => (
          <div className="relative blog-details-img  w-full h-full max-h-[510px]" key={index}>
            <Image src={image} className="rounded-t-[15px] w-full h-full" width={600} height={400} alt="Project Image" />
            {/* <div className="blog-img relative"></div> */}
          </div>
        ))}
      </Slider>

      <div className="donate-info p-30 xs-to-sm-max:p-20 mt-10 xs-to-sm-max:mt-0">
        <div className="flex justify-between items-center">
          <div className="donate-info-title">
            <h4 className="text-xl font-bold leading-[30px] text-primary-title mb-30 xs-to-sm-max:text-base">{title}</h4>
            <p className="text-base font-normal leading-[25px] text-tertiary-title mb-30 xs-to-sm-max:text-md">
              {description}
            </p>

            {/* Notice Section */}
            {/* <div className="flex py-11 px-15 border border-primary-gray rounded-[10px] mb-30">
              <div className="mr-20 text-secondary text-6xl">
                <i className="ri-error-warning-fill"></i>
              </div>
              <div className="flex items-center flex-wrap gap-10">
                <h4 className="text-xl font-bold leading-[30px] text-primary-title xs-to-sm-max:text-base">Notice:</h4>
                <p className="text-md font-normal leading-[1.5] text-tertiary-title">
                  Text mode is enabled. While in test mode, no live donations are processed.
                </p>
              </div>
            </div> */}

            {/* Progress Bar */}
            <div className="progress custom-progress mt-0">
              <div className="progress-bar bg-primary" style={{ width: "25%" }}></div>
            </div>

            {/* Donation Details */}
            <div className="flex justify-between mt-14 mb-20">
              <div className="flex gap-20">
                <div className="charges">
                  <p className="text-lg xs:text-base text-primary-title font-bold leading-none mb-8">{goalAmount}</p>
                  {/* <h4 className="text-base xs:text-md font-normal text-primary leading-normal">Bağış Bedeli</h4> */}
                </div>
                {/* <div className="charges">
                  <p className="text-lg xs:text-base text-primary-title font-bold leading-none mb-8">${raisedAmount}</p>
                  <h4 className="text-base xs:text-md font-normal text-primary leading-normal">Raised</h4>
                </div> */}
              </div>
              <div className="w-40 h-40 rounded-[10px] bg-transparent border border-primary flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white">
                <i className="ri-reply-fill transform -scale-x-[1]"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="payment-section rounded-[10px] p-20 border border-primary-gray">
          <div className="select-payment flex justify-between flex-wrap gap-16">
            <h4 className="text-xl font-bold text-primary-title xs-to-sm-max:text-base">Bu proje için şimdi bağış yapın</h4>
            {/* <div className="payment-btn flex gap-16 flex-wrap">
              <div className="custom-radio-check flex gap-10 items-center">
                <input id="flexRadioDefault2" type="radio" name="radio-5" className="radio radio-success w-16 h-16" />
                <label className="text-base font-semibold leading-[16px] text-primary-title" htmlFor="flexRadioDefault2">
                  Test Donation
                </label>
              </div>
              <div className="custom-radio-check flex gap-10 items-center">
                <input className="radio radio-success w-16 h-16" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                <label className="text-base font-semibold leading-[16px] text-primary-title" htmlFor="flexRadioDefault3">
                  Cardiant Donation
                </label>
              </div>
              <div className="custom-radio-check flex gap-10 items-center">
                <input className="radio radio-success w-16 h-16" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                <label className="text-base font-semibold leading-[16px] text-primary-title" htmlFor="flexRadioDefault4">
                  Office Donation
                </label>
              </div>
            </div> */}
          </div>

          {/* Donation Amount Selection */}
          <div className="amount flex justify-between gap-16 items-center flex-wrap mt-30">
            {/* <div className="enter-amount"> */}
            <Link href={`/pay/${slug}`} className="btn-primary-fill rounded-full leading-none px-25 pt-16 pb-18 active">Bağış yap</Link>
            {/* </div> */}
            {/* <div className="all-amount flex flex-wrap gap-16">
              <button className="btn-primary-fill rounded-full leading-none px-25 pt-16 pb-18 active">150$</button>
              <button className="btn-primary-outline rounded-full leading-none px-25 pt-16 pb-18">170$</button>
              <button className="btn-primary-outline rounded-full leading-none px-25 pt-16 pb-18">190$</button>
              <button className="btn-primary-outline rounded-full leading-none px-25 pt-16 pb-18">250$</button>
            </div> */}
          </div>
        </div>

        {/* Form Sections */}
        {/* <div className="mt-30">
          <h4 className="text-xl font-bold leading-[30px] text-primary-title mb-30">Details</h4>
          <div className="p-30 xs-to-sm-max:p-20 border border-primary-gray rounded-[15px]">
            <form action="donation-details.html" className="custom-form">
              <div className="grid grid-cols-12 xs-to-min:gap-24 gap-20">
                <input type="text" placeholder="Alex Jordan*" className="form-input" />
                <input type="email" placeholder="name@example.com*" className="form-input" />
                <input type="text" placeholder="Company Name*" className="form-input" />
              </div>
            </form>
          </div>
        </div> */}

        {/* <div className="mt-30">
          <h4 className="text-xl font-bold leading-[30px] text-primary-title mb-30">Address</h4>
          <div className="p-30 xs-to-sm-max:p-20 border border-primary-gray rounded-[15px]">
            <form action="donation-details.html" className="custom-form">
              <div className="grid grid-cols-12 xs-to-min:gap-24 gap-20">
                <input type="text" placeholder="Postcode*" className="form-input" />
                <input type="text" placeholder="City*" className="form-input" />
                <input type="text" placeholder="House No*" className="form-input" />
              </div>
            </form>
          </div>
        </div> */}

        {/* Agreement Section */}
        {/* <div className="agreement-section my-30">
          <input className="checkbox checkbox-success w-20 h-20 rounded-[5px]" type="checkbox" />
          <label className="text-base text-tertiary-title">I agree with the Terms of Service</label>
        </div> */}

        {/* Submit Buttons */}
        {/* <div className="flex gap-16 flex-wrap">
          <button className="btn-primary-fill px-30 py-16 rounded-[8px] uppercase">Donate Now</button>
          <button className="btn-primary-outline text-primary-title px-30 py-16 rounded-[8px] uppercase">Total Donation: $250</button>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectDetailsSection;
