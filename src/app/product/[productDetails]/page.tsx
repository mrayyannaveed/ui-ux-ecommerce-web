// import { client } from '@/sanity/lib/client';
// import { groq } from 'next-sanity';
// import { Product } from '../../../../types/products';
// import { notFound } from 'next/navigation';
// import ProductDetailsContent from '@/app/components/ProductDetailsContent';

// interface ProductPageProps {
//   params: { productDetails: string }; // ✅ No Promise!
// }

// const getProduct = async (productDetails: string): Promise<Product | null> => {
//   return await client.fetch(
//     groq`*[_type == "product" && slug.current == $productDetails][0]{
//       _id,
//       name,
//       _type,
//       slug,
//       image,
//       price,
//       description,
//       stock,
//       tag
//     }`,
//     { productDetails }
//   );
// };

// export default async function ProductPage({ params }: ProductPageProps) {
//   // ✅ No need to await params – it's a normal object
//   const product = await getProduct(params.productDetails);

//   if (!product) return notFound();

//   return <ProductDetailsContent product={product} />;
// }

// /app/products/[productDetails]/page.tsx
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { notFound } from 'next/navigation';
import ProductDetailsContent from '@/app/components/ProductDetailsContent';
import { Product } from '../../../../types/products';

type ProductPageProps = {
  params: Promise<{ productDetails: string }>;
}

// Fetch product details
const getProduct = async (productDetails: string): Promise<Product | null> => {
  return await client.fetch(
    groq`*[_type == "product" && slug.current == $productDetails][0]{
      _id,
      name,
      _type,
      slug,
      image,
      price,
      description,
      stock,
      tag
    }`,
    { productDetails }
  );
};

// Static generation of paths (required for SSG)
export async function generateStaticParams() {
  const products = await client.fetch(
    groq`*[_type == "product"]{ "slug": slug.current }`
  );

  return products.map((product: { slug: string }) => ({
    productDetails: product.slug,
  }));
}

// Page component
export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct((await params).productDetails);

  if (!product) return notFound();

  return <ProductDetailsContent product={product} />;
}
