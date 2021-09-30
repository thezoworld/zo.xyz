import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <section
      className="w-full h-60"
      style={{
        background: "#333",
      }}
    ></section>
  );
};

export default Footer;
