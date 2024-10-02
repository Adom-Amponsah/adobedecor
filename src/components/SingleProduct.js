import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');

  // Simulated product data - replace this with actual data fetching logic
  useEffect(() => {
    // This is a placeholder. In a real app, you'd fetch the product data based on the id
    const fetchedProduct = {
      id: id,
      name: "Asgaard sofa",
      price: 250.00,
      description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      category: "Sofa",
      images: [
        "/images/sofa01.png",
        "/images/sofa02.png",
        "/images/sofa03.png",
        "/images/sofa04.png"
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["#B88E2F", "#333333", "#816DFA"]
    };
    setProduct(fetchedProduct);
    setMainImage(fetchedProduct.images[0]);
  }, [id]);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ... breadcrumb ... */}

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={mainImage} alt={product.name} className="w-full h-auto object-cover mb-4" />
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`${product.name} ${index + 1}`} 
                className="w-full h-24 object-cover cursor-pointer"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2">
          {/* ... product details ... */}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;