import { groq } from "next-sanity";
export const projectsQuery = (type = 'post') => {
    return (
        groq`*[_type == '${type}']{
            ...,
        }`
    )
}
// export const postsQuery = (type = 'post') => {
//     return (
//         groq`*[_type == '${type}']{
//             ...,
//             body[]{ ...,'url':asset->url },
//             mainImage{'url':asset->url},
//             categories[]{...}->{...,slug},
//         }`
//     )
// }