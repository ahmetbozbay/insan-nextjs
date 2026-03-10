import { groq } from "next-sanity";
export const categoriesQuery = (type = 'categories') => {
    return (
        groq`*[_type == '${type}']{
            ...,
        }`
    )
}