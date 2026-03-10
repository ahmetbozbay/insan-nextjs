import { getTranslations } from "@/actions/translations";
import HomeQuestionArea from "@/sections/home/questyions";

export interface FrequentlyAskedQuestionsViewProps {
    lang?: string;
}

export default async function FrequentlyAskedQuestionsView({ lang = "en" }: FrequentlyAskedQuestionsViewProps) {
    const t = await getTranslations("questions");
    return (
        <>
            <HomeQuestionArea title={t.title} description={t.description} questions={t.questions} />
        </>
    );
}
