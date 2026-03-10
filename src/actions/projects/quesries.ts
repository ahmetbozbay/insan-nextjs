import { groq } from "next-sanity";
export const projectsQuery = (type: string) => {
    return (
        groq`*[_type == '${type}']{
            ...,
            categories[]{...}->{...,slug},
        }`
    )
}

export const projectQuery = (slug = '') => {
    return (
        groq`*[_type == 'project' && slug.current == '${slug}']{
            ...,
            categories[]{...}->{...,slug},
        }[0]`
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