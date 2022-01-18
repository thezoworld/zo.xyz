import React from "react";
import { ArrowRight, Globe } from "../../../assets/icons";

interface BreadcrumbsProps {
  crumbs: { path: string; name: string }[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs, className }) => {
  return (
    <div
      className={`flex items-center space-x-2 ${className} text-sm font-semibold`}
    >
      <Globe width={16} height={16} />
      {crumbs.map((c) => (
        <>
          <ArrowRight width={12} height={12} />
          <span>{c.name}</span>
        </>
      ))}
    </div>
  );
};

export default Breadcrumbs;
