import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { Product } from '../../../../types/products';
import { notFound } from 'next/navigation';
import ProductDetailsContent from '@/app/components/ProductDetailsContent';

// ✅ Correct param type for Next.js App Router
type PageProps = {
  params: {
    productDetails: string;
  };
};

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

export default async function ProductPage({ params }: PageProps) {
  const product = await getProduct(params.productDetails);

  if (!product) return notFound();

  return <ProductDetailsContent product={product} />;
}
