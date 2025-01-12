"use client";

import BestSellingCard from "./BestSellingCard";

const BestsellingProducts = () => {
  const bestSell = [
    {
      src: "/pictures/diamond-cufflinks.jpg",
      alt: "Diamond Cufflinks",
      title: "Diamond Cufflinks",
      price: 300,
      allCategory: "Jewellery",
      productDetails: "diamond-cufflinks",
      quantity: 1,
    },
    {
      src: "/pictures/platinum-anklet.png",
      alt: "Platinum Anklet",
      title: "Elegant Platinum Anklet",
      price: 150,
      allCategory: "Jewellery",
      productDetails: "platinum-anklet",
      quantity: 1,
    },
    {
      src: "/pictures/topaz-bracelet.jpg",
      alt: "Topaz Bracelet",
      title: "Beautiful Topaz Bracelet",
      price: 250,
      allCategory: "Jewellery",
      productDetails: "topaz-bracelet",
      quantity: 1,
    },
    {
      src: "/pictures/sapphire-bracelet.jpg",
      alt: "Sapphire Bracelet",
      title: "Stunning Sapphire Bracelet",
      price: 300,
      allCategory: "Jewellery",
      productDetails: "sapphire-bracelet",
      quantity: 1,
    },
    {
      src: "/pictures/citrine-earrings.jpg",
      alt: "Citrine Earrings",
      title: "Elegant Citrine Earrings",
      price: 150,
      allCategory: "Jewellery",
      productDetails: "citrine-earrings",
      quantity: 1,
    },
    {
      src: "/pictures/pearl-pendant.jpg",
      alt: "Pearl Pendant",
      title: "Classic Pearl Pendant",
      price: 250,
      allCategory: "Jewellery",
      productDetails: "pearl-pendant",
      quantity: 1,
    }
  ];
  return (
    <div className="mb-[50px] mt-[100px]">
      {/* best selling prooduct here */}
      <div className="flex flex-wrap justify-center gap-5 ">
        {bestSell.map((items, i) => (
          <BestSellingCard
            key={i}
            src={items.src}
            alt={items.alt}
            title={items.title}
            price={items.price}
            productDetails={items.productDetails}
            quantity={items.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default BestsellingProducts;