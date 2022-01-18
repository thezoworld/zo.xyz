import React, { ReactNode } from "react";

interface ItemCardProps {
  height?: number;
  width?: number;
  image?: string;
  footer?: ReactNode;
  className?: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  image = "",
  footer,
  height = 263,
  width = 230,
  className = "bg-gray-300",
}) => {
  return (
    <div
      style={{ height, width, borderRadius: 16 }}
      className={`relative ${className}`}
    >
      {footer && <div className="absolute bottom-4 left-4">{footer}</div>}
    </div>
  );
};

export default ItemCard;
