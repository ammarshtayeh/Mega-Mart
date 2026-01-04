import { ProductSpecsProps } from "../../types/product-detail";

export default function ProductSpecs({
  availabilityStatus,
  stock,
  returnPolicy,
}: ProductSpecsProps) {
  const getAvailabilityColor = () => {
    if (availabilityStatus === 'Low Stock') return 'text-red-500';
    if (stock && stock > 0) return 'text-green-600';
    return 'text-red-500';
  };

  const getAvailabilityText = () => {
    return availabilityStatus || (stock && stock > 0 ? "In Stock" : "Out of Stock");
  };

  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      {}
      <div>
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
          Availability
        </h3>
        <p className={`font-semibold ${getAvailabilityColor()}`}>
          {getAvailabilityText()}
        </p>
      </div>

      {}
      <div>
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
          Return Policy
        </h3>
        <p className="text-gray-900 font-medium">
          {returnPolicy || "30 days return policy"}
        </p>
      </div>
    </div>
  );
}
