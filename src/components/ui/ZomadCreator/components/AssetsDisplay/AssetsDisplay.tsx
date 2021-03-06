import React, { useRef } from "react";
import { ArrowLeft, Download, Zap } from "../../../../../assets/icons";
import { getRandomItem } from "../../../../../utils/array";

interface AssetsDisplayProps {
  randomZobu: () => void;
  localBases: any[];
  selectedBase: number;
  zobuLayers: any[];
  selectedBackground: string;
}

const loadImage = (url: string) => {
  return new Promise<HTMLImageElement>((resolve, revoke) => {
    let img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.crossOrigin = "Anonymous";
    img.src = url;
  });
};

const COLOR_CODES = [
  "#2D9C94",
  "#17D0E8",
  "#2953A6",
  "#BF2A45",
  "#590202",
  "#202959",
  "#F2B705",
  "#532559",
  "#6976BF",
  "#F2AEC1",
  "#26658C",
  "#29A65F",
  "#16B4F2",
  "#A693BF",
];

const AssetsDisplay: React.FC<AssetsDisplayProps> = ({
  randomZobu,
  localBases,
  selectedBase,
  zobuLayers,
  selectedBackground,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const download = async () => {
    let canvas = document.createElement("canvas");
    canvas.height = 1024;
    canvas.width = 1024;
    let context = canvas.getContext("2d");
    const backgroundImage = await loadImage(selectedBackground);

    if (svgRef.current) {
      const svgElement = svgRef.current;
      const { width, height } = svgElement.getBoundingClientRect();
      svgElement.style.width = "2000px";
      svgElement.style.height = "5120px";
      let clonedSvgElement: any = svgElement.cloneNode(true);
      let outerHTML = clonedSvgElement.outerHTML,
        blob = new Blob([outerHTML], { type: "image/svg+xml;charset=utf-8" });
      let URL = window.URL || window.webkitURL || window;
      let blobURL = URL.createObjectURL(blob);
      const svgImage = await loadImage(blobURL);
      if (context) {
        // context.drawImage(backgroundImage, 0, 0);
        context.fillStyle = getRandomItem(COLOR_CODES);
        context.fillRect(0, 0, 1024, 1024);
        context.drawImage(svgImage, -80, -225, 1200, 3072);
      }
      canvas.toBlob((blob) => {
        let data = window.URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.href = data;
        link.download = "feed.jpg";
        link.click();
      }, "image/jpeg");
      svgElement.style.width = `${width}px`;
      svgElement.style.height = `${height}px`;
    }
  };

  return (
    <section className="w-full relative flex justify-center">
      <img
        className="w-full h-full object-cover object-center absolute inset-0 z-1"
        src={selectedBackground}
        alt=""
      />
      <header className="w-full flex justify-between items-center p-4 flex-shrink-0 absolute left-0 right-0 z-2">
        <button
          className="focus:outline-none opacity-100 flex items-center bg-white px-4 py-3 shadow-md rounded-lg hover:bg-white"
          // onClick={!loading ? handleSave : null}
          // onClick={handleSave}
        >
          <ArrowLeft className="mr-4" />
          <span className="title whitespace-no-wrap">Go Back</span>
        </button>
        <button
          className="focus:outline-none opacity-100 flex items-center bg-white px-4 py-3 shadow-md rounded-lg"
          onClick={randomZobu}
        >
          <Zap />
        </button>
        <button
          className="focus:outline-none opacity-100 flex items-center bg-white px-4 py-3 shadow-md rounded-lg"
          id="zobu-editor-close"
          onClick={download}
        >
          <Download className="mr-4" />
          <span className="title whitespace-no-wrap">Download</span>
        </button>
      </header>
      <svg
        className="pointer-events-none z-10 absolute no-svg-animation h-full mx-auto"
        ref={svgRef}
        id="zomad"
        style={{ bottom: "-10vh" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="154 0 200 512"
      >
        <g
          id={String(selectedBase)}
          dangerouslySetInnerHTML={{ __html: localBases[selectedBase] }}
        ></g>
        {zobuLayers &&
          zobuLayers.map((layer) => {
            if (layer.svg) {
              return (
                <g
                  id={layer.category}
                  key={layer.category}
                  dangerouslySetInnerHTML={{ __html: layer.svg }}
                ></g>
              );
            } else {
              return <g key={layer.category}></g>;
            }
          })}
      </svg>
      <canvas />
    </section>
  );
};

export default AssetsDisplay;
