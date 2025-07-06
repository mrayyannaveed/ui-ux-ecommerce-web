import { defineQuery, groq } from "next-sanity";


// export const allProducts = defineQuery(`
//     *[_type == "product"]{
//         _id,
//         name,
//         price,
//         description,
//         slug,
//         category,
//         "imageUrl": image.asset->url,
//         stock,
//         tag
//     }`)
export const allProducts = groq`*[_type == "product"]`;


export const fourPro = groq`*[_type == "product"][0..3]`;
// export const fourPro = defineQuery(`
//     *[_type == "product"][0..3]{
//         _id,
//         name,
//         price,
//         description,
//         slug,
//         category,
//         "imageUrl": image.asset->url,
//         stock,
//         tag
//     }`)


