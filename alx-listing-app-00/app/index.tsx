// pages/index.tsx
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import backgroundImage from "@/public/hero-bg.jpg";
import Pill from "../components/Pill";

const filters = ["Top Villa", "Self Checkin", "Luxury", "Budget"];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
          <p className="mt-2 text-lg">The best prices for over 2 million properties worldwide.</p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap justify-center my-4">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} onClick={() => console.log(filter)} />
        ))}
      </div>

      {/* Listing Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <div key={property.name} className="border rounded shadow p-4">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover mb-2" />
            <h3 className="font-bold">{property.name}</h3>
            <p>Price: ${property.price}</p>
            <p>Rating: {property.rating}</p>
          </div>
        ))}
      </div>
    </>
  );
}

