import { cn } from "@/lib/utils";
import { PortableText } from "next-sanity";

interface ProjectContentSectionProps {
    paragraphs?: string[];
    body: any;
    sections?: { title: string; content: string[] }[];
}

const ProjectContentSection: React.FC<ProjectContentSectionProps> = ({ paragraphs, sections, body }) => {
    const ContentTitles = ({ children, className }: any) => {
        return (
            <h4 className={cn("text-xl text-primary-title font-bold xs-to-sm-max:text-base", className)}>{children}</h4>
        )
    }
    return (
        <div className="donate-content mt-30 mb-30 rounded-[15px] bg-white shadow-helpful-card p-30">

            {/* <div className="text-base font-normal text-tertiary-title mb-30 xs-to-sm-max:text-md"> */}

            <PortableText value={body}
                components={{
                    list: {
                        bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
                        number: ({ children }) => <ol className="mt-lg">{children}</ol>,
                        checkmarks: ({ children }) => <ol className="m-auto text-lg">{children}</ol>,
                    },
                    block: {
                        h6: ({ children }) => <ContentTitles className='text-base'>{children}</ContentTitles>,
                        h5: ({ children }) => <ContentTitles className='text-lg'>{children}</ContentTitles>,
                        h4: ({ children }) => <ContentTitles className='text-xl'>{children}</ContentTitles>,
                        h3: ({ children }) => <ContentTitles className='text-2xl'>{children}</ContentTitles>,
                        h2: ({ children }) => <ContentTitles className='text-3xl'>{children}</ContentTitles>,
                        h1: ({ children }) => <ContentTitles className='text-4xl'>{children}</ContentTitles>,
                        normal: ({ children }: any) => {
                            if (children == '' || (children.length == 1 && children[0] == '')) {
                                return <br />
                            }
                            return <p className="text-base font-normal text-tertiary-title xs-to-sm-max:text-md">{children}</p>
                        },
                    },
                    listItem: {
                        bullet: ({ children }) => <li className="pl-15 text-base font-normal text-tertiary-title xs-to-sm-max:text-md">- {children}</li>,
                        // checkmarks: ({ children }) => <li>✅ {children}</li>,
                    },
                    // marks: {
                    //     p: ({ }) => <p className="text-base font-normal text-tertiary-title mb-30 xs-to-sm-max:text-md"></p>,
                    //     // span: ({  }) => <p className="text-base font-normal text-tertiary-title mb-30 xs-to-sm-max:text-md"></p>,
                    // }
                }}

            />
            {/* </div> */}



            {/* {paragraphs.map((text, index) => (
          <p key={index} className="text-base font-normal text-tertiary-title mb-30 xs-to-sm-max:text-md">
            {text}
          </p>
        ))} */}

            {/* {sections.map((section, index) => (
          <div key={index}>
            <h4 className="text-xl text-primary-title font-bold mb-30 xs-to-sm-max:text-base">{section.title}</h4>
            {section.content.map((text, subIndex) => (
              <p key={subIndex} className="text-base font-normal text-tertiary-title mb-30 xs-to-sm-max:text-md">
                {text}
              </p>
            ))}
          </div>
        ))} */}
        </div>
    );
};

export default ProjectContentSection;
