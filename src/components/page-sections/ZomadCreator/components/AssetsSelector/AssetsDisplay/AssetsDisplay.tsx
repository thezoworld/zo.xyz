import React from "react";
import { ArrowLeft, Download, Zap } from "../../../../../../assets/icons";

interface AssetsDisplayProps {
  randomZobu: () => void;
  localBases: any[];
  selectedBase: number;
  zobuLayers: any[];
  selectedBackground: string;
}

const AssetsDisplay: React.FC<AssetsDisplayProps> = ({
  randomZobu,
  localBases,
  selectedBase,
  zobuLayers,
  selectedBackground,
}) => {
  return (
    <section className="w-1/2 relative flex justify-center">
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
        >
          <Download className="mr-4" />
          <span className="title whitespace-no-wrap">Download</span>
        </button>
      </header>
      <svg
        className="pointer-events-none z-10 absolute no-svg-animation h-full mx-auto"
        // ref={zobuRef}
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
    </section>
  );
};

export default AssetsDisplay;
