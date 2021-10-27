import React, { useMemo, useState } from "react";
import { useWindowSize } from "../../../../hooks";

interface AssetsSelectorProps {
  categories: AvatarCategory[];
  backgrounds: Background[];
  hiddenLayers: any[];
  handleChange: (category: any, asset: any) => Promise<void>;
  selectedBase: number;
  handleBackgroundChange: (backgroundKey: string) => void;
  zobuLayers: any[];
  selectedBackground: string;
}

const AssetsSelector: React.FC<AssetsSelectorProps> = ({
  categories,
  backgrounds,
  hiddenLayers,
  handleChange,
  selectedBase,
  handleBackgroundChange,
  selectedBackground,
  zobuLayers,
}) => {
  const { width } = useWindowSize();
  const [activeTab, setActiveTab] = useState<number>();

  const handleTabSelect = (id: number) => {
    setActiveTab(id);
  };

  const activeTabContent = useMemo(
    () => categories.length > 0 && categories.find((c) => c.id === activeTab),
    [activeTab, categories]
  );

  const isBackground = activeTab === 2182;

  return (
    <section className="w-1/2">
      <header className="bg-white w-full h-auto flex-shrink-0">
        <ul className="flex flex-no-wrap overflow-x-auto w-full items-center bg-gray-200">
          <li
            className={`w-16 h-16 p-4 flex-shrink-0 cursor-pointer hover:bg-gray-300 ${
              activeTab === 2182 ? "bg-white" : ""
            }`}
            key={2182}
            onClick={handleTabSelect.bind(null, 2182)}
          >
            <img className="w-full h-full object-contain" alt="" />
          </li>
          {categories.length > 0 &&
            categories
              .sort((a, b) => a.display_order - b.display_order)
              .filter((c) => hiddenLayers.indexOf(c.name) === -1)
              .map((c) => {
                return (
                  <li
                    className={`w-16 h-16 p-4 flex-shrink-0 cursor-pointer hover:bg-gray-300 ${
                      activeTab === c.id ? "bg-white" : ""
                    }`}
                    key={c.id}
                    onClick={handleTabSelect.bind(null, c.id)}
                  >
                    <img
                      className="w-full h-full object-contain"
                      src={c.file}
                      alt=""
                    />
                  </li>
                );
              })}
        </ul>
      </header>
      {!isBackground ? (
        activeTabContent && (
          <section
            className={`w-full landscape:flex-grow landscape:h-0 left-0 flex flex-col items-center rounded-b-lg bg-white ${activeTabContent.name}`}
          >
            <div className="flex items-center justify-between w-full flex-shrink-0 p-4">
              <span className="text-xl font-bold">{activeTabContent.name}</span>
              <button
                className="bg-gray-700 p-2 rounded-lg text-sm text-white leading-none"
                onClick={(e) => handleChange(activeTabContent.id, null)}
              >
                Remove
              </button>
              <span className="text-sm flex items-end bg-gray-200 p-2 rounded-lg">
                <svg
                  className="w-4 h-4 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z" />
                </svg>
                <div className="leading-none">
                  <strong>
                    {
                      activeTabContent.assets.filter(
                        (a) => a.bases.indexOf(selectedBase) !== -1
                      ).length
                    }
                  </strong>
                  /{activeTabContent.assets.length * 2}
                </div>
              </span>
            </div>
            <ul
              className="grid grid-cols-4 md:grid-cols-5 w-full overflow-y-auto flex-grow px-4"
              style={{
                maxHeight: width < 1024 ? "17rem" : "calc(100vh - 8rem)",
              }}
            >
              {activeTabContent.assets
                .filter((a) => a.bases.indexOf(selectedBase) !== -1)
                .map((a) => (
                  <li
                    className={`group relative flex group-a rounded-lg flex-col items-center justify-between h-32 cursor-pointer hover:bg-gray-200 ${
                      zobuLayers.find((l) => l.asset === a.id)
                        ? "bg-gray-400"
                        : ""
                    }`}
                    key={a.id}
                    onClick={(e) => handleChange(activeTabContent.id, a.id)}
                  >
                    {/* <img
                    className="w-5 h-5 absolute top-0 right-0 m-2 opacity-0 group-a-hover:opacity-75"
                    src={infoIcon}
                    alt=""
                  /> */}
                    <img
                      className="w-24 h-24 p-2 flex-grow object-contain"
                      src={a.cropped_file}
                      alt=""
                    />
                    <div className="flex-shrink-0 w-full text-center whitespace-no-wrap text-xs font-semibold truncate text-gray-700 pb-2">
                      {a.name || "No Name"}
                    </div>
                  </li>
                ))}
            </ul>
          </section>
        )
      ) : (
        <section
          className={`w-full landscape:flex-grow landscape:h-0 left-0 flex flex-col items-center rounded-b-lg bg-white backgrounds`}
        >
          <div className="flex items-center justify-between w-full flex-shrink-0 p-4">
            <span className="text-xl font-bold">Background</span>
            <button
              className="bg-gray-700 p-2 rounded-lg text-sm text-white leading-none"
              onClick={(e) => handleBackgroundChange("")}
            >
              Remove
            </button>
            <span className="text-sm flex items-end bg-gray-200 p-2 rounded-lg">
              <svg
                className="w-4 h-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z" />
              </svg>
              <div className="leading-none">
                <strong>{backgrounds.length}</strong>/
                {backgrounds.length * 2 + 4}
              </div>
            </span>
          </div>
          <ul
            className="grid grid-cols-4 md:grid-cols-5 w-full overflow-y-auto flex-grow px-4"
            style={{
              maxHeight: width < 1024 ? "17rem" : "calc(100vh - 8rem)",
            }}
          >
            {backgrounds.map((a) => (
              <li
                className={`group relative flex group-a rounded-lg flex-col items-center justify-between h-32 cursor-pointer hover:bg-gray-200 ${
                  selectedBackground === a.key ? "bg-gray-400" : ""
                }`}
                key={a.key}
                onClick={(e) => handleBackgroundChange(a.key)}
              >
                {/* <img
                    className="w-5 h-5 absolute top-0 right-0 m-2 opacity-0 group-a-hover:opacity-75"
                    src={infoIcon}
                    alt=""
                  /> */}
                <img
                  className="w-24 h-24 my-2 flex-grow object-cover rounded-lg object-center"
                  src={a.file}
                  alt=""
                />
                <div className="flex-shrink-0 w-full text-center whitespace-no-wrap text-xs font-semibold truncate text-gray-700 pb-2">
                  {a.name || "No Name"}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
};

export default AssetsSelector;
