import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from '../CartContext';
import { useFavorites } from '../FavoritesContext';

const Shop = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Syltherine",
      price: 250,
      image: "/images/image01.png",
      discount: "30%",
      category: "Stylish cafe chair",
    },
    {
      id: 2,
      name: "Leviosa",
      price: 250,
      image: "/images/image02.png",
      category: "Stylish cafe chair",
    },
    {
      id: 3,
      name: "Lolito",
      price: 700,
      image: "/images/image03.png",
      discount: "50%",
      category: "Luxury big sofa",
    },
    {
      id: 4,
      name: "Respira",
      price: 500,
      image: "/images/image04.png",
      newArrival: true,
      category: "Outdoor bar table and stool",
    },
    {
      id: 5,
      name: "Grifo",
      price: 150,
      image: "/images/image05.png",
      category: "Night lamp",
    },
    {
      id: 6,
      name: "Muggo",
      price: 150,
      image: "/images/image06.png",
      newArrival: true,
      category: "Small mug",
    },
    {
      id: 7,
      name: "Pingky",
      price: 700,
      image: "/images/image07.png",
      discount: "50%",
      category: "Cute bed set",
    },
    {
      id: 8,
      name: "Potty",
      price: 500,
      image: "/images/image08.png",
      newArrival: true,
      category: "Minimalist flower pot",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [sortBy, setSortBy] = useState("default");
  const [filterCategory, setFilterCategory] = useState("All");
  const [lovedProducts, setLovedProducts] = useState(Array(products.length).fill(false));

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter(product => 
    filterCategory === 'All' || product.category === filterCategory
  );
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low-high') return a.price - b.price;
    if (sortBy === 'price-high-low') return b.price - a.price;
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilter = (category) => {
    setFilterCategory(category);
    setCurrentPage(1);
  };

  const toggleLove = (index) => {
    const updatedLovedProducts = [...lovedProducts];
    updatedLovedProducts[index] = !updatedLovedProducts[index];
    setLovedProducts(updatedLovedProducts);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const { addToCart } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addToCart(product);
  };

  const toggleFavorite = (e, product) => {
    e.preventDefault();
    if (favorites.some(item => item.id === product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="bg-white">
      <div className="relative bg-gray-100 h-64">
        <img
          src="/images/heroimage.png"
          alt="Shop Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">Shop</h1>
          <nav className="text-sm">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span>Shop</span>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <select 
              className="border rounded px-2 py-1" 
              onChange={(e) => handleFilter(e.target.value)}
              value={filterCategory}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <button className="px-4 py-2 border rounded">Grid</button>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center">
              <span className="mr-2">Show:</span>
              <select 
                className="border rounded px-2 py-1"
                onChange={handleItemsPerPageChange}
                value={itemsPerPage}
              >
                <option value={6}>6</option>
                <option value={12}>12</option>
                <option value={24}>24</option>
              </select>
            </div>
            <div className="flex items-center">
              <span className="mr-2">Sort by:</span>
              <select
                className="border rounded px-2 py-1"
                onChange={handleSort}
                value={sortBy}
              >
                <option value="default">Default</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <Link to={`/product/${product.id}`}>
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition mr-2"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={(e) => toggleFavorite(e, product)}
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-200 transition"
                    >
                      {favorites.some(item => item.id === product.id) ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="red" viewBox="0 0 24 24" stroke="red">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {product.discount && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                      {product.discount} OFF
                    </span>
                  )}
                  {product.newArrival && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-sm rounded">
                      New
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                  <p className="text-gray-800 font-bold">CAD {product.price.toLocaleString()}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <nav>
            <ul className="flex space-x-2">
              {Array.from({ length: Math.ceil(sortedProducts.length / itemsPerPage) }, (_, i) => (
                <li key={i}>
                  <button
                    onClick={() => paginate(i + 1)}
                    className={`px-3 py-1 rounded ${
                      currentPage === i + 1 ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Shop;