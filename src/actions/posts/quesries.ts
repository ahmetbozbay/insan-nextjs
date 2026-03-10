import { groq } from "next-sanity";
export const postsQuery = (type = 'post') => {
    return (
        groq`*[_type == '${type}']{
            ...,
             categories[]{...}->{...,slug},
        }`
    )
}

export const postQuery = (slug = '') => {
    return (
        groq`*[_type == 'post' && slug.current == '${slug}']{
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