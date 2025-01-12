import ProductDetailsPage from "./productDetailsPage";

interface ProductDetailsProps {
  params: { id: string };
}

// Generate Metadata for Dynamic Pages
export async function generateMetadata({ params }: { params: { id: string } }) {
  const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await response.json();

  return {
    title: product.title,
    description: product.description,
  };
}

// Dynamic Routes for All Products
export async function generateStaticParams() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return products.map((product: { id: number }) => ({
    id: product.id.toString(),
  }));
}

// Main Component
export default async function ProductDetails({ params }: ProductDetailsProps) {
  const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await response.json();

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <ProductDetailsPage product={product} />
    </section>
  );
}
