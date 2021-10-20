import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Download, Shuffle } from "../../assets/icons";
import { Flex } from "../../components/structure";
import { Button } from "../../components/ui";
import { getRandomItem, shuffleArray } from "../../utils/array";

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

interface GenerateProps {}

const fetchSeed = async () => {
  const response: any = await axios.get(
    "https://api.zostel.com/profile/api/v1/avatar/seed/",
    {
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IlVBLTE3MDA2IiwicGlkIjoiV1E3MlJXWEoiLCJmaXJzdF9uYW1lIjoiSXNoYWFuIiwibGFzdF9uYW1lIjoiUmF3YXQiLCJtb2JpbGUiOiI5MS05NjAyMjYyMjYxIiwiYXBwX2lkIjoiNU5qYjVhd01rMGRiQzdWTm5ZN1ozNXR3MnlFRTFIdEE5MnI5WUExdCIsInVzZXJfaWQiOiI4NjIzMjY4YTc2IiwiaWF0IjoxNjMzOTY0NTA0fQ.bEQOLoAKbdMOPmF2Gy1YRTbYBfCh9kGCXfpPZioiuuU",
        "Content-Type": "application/json",
        "Client-App-Id": "Ne0HsSgWroMJkV9JQBpWd7ZdGIqARRnKeSYhRdVU",
        "Client-User-Id": "ssssss",
      },
    }
  );
  return { ...response.data.avatar };
};

const COLOR_CODES = [
  "#18C29C",
  "#88F9D4",
  "#0468BF",
  "#00F6FF",
  "#7E93FF",
  "#E06769",
  "#B2D6CC",
  "#FFFDF4",
  "#F2275D",
  "#F2E2C4",
  "#45B3BF",
  "#F285C1",
  "#F279B2",
  "#F2E96D",
  "#24BF93",
  "#03A63C",
];

const WORKING_LAYERS = [1, 2, 3, 4, 5, 8, 10, 11];

const Generate: React.FC<GenerateProps> = () => {
  const [bases, setBases] = useState<AvatarBase[]>([]);
  const [categories, setCategories] = useState<AvatarCategory[]>([]);
  const [categoryProbabilities, setCategoryProbabilities] = useState<any>({});

  const [localLayers, setLocalLayers] = useState<any>({});
  const [localBases, setLocalBases] = useState<any>({});

  const [loadingText, setLoadingText] = useState<string>(
    "Loading your wardrobe"
  );
  const [loadingAssets, setLoadingAssets] = useState<boolean>(true);

  const [selectedBackground, setSelectedBackground] = useState<string>("");
  const [zobuLayers, setZobuLayers] = useState<any[]>([]);
  const [selectedBase, setSelectedBase] = useState(1);

  const svgRef = useRef<SVGSVGElement>(null);

  const download = async () => {
    let canvas = document.createElement("canvas");
    canvas.height = 1024;
    canvas.width = 1024;
    let context = canvas.getContext("2d");

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
        context.fillStyle = selectedBackground;
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

  const getCategory = (name: string) => categories.find((c) => c.name === name);

  useEffect(() => {
    fetchSeed().then((res) => {
      setBases(res.bases);
      setCategories(res.categories);
      setCategoryProbabilities(res.probabilities);
    });
  }, []);

  useEffect(() => {
    if (!loadingAssets) {
      randomZobu();
    }
  }, [loadingAssets]);

  const fetchAsset = async (category: number, asset: number) => {
    if (localLayers[category] && localLayers[category][asset]) {
      // console.log("Fetching layer locally");
      return localLayers[category][asset];
    }
    try {
      // console.log("Downloading layer");
      const assetObj = categories
        .find((c) => c.id === category)
        ?.assets.find((a) => a.id === asset);
      switch (category) {
        case 1:
          setLoadingText("Preparing your wardrobe");
          break;
        case 2:
          setLoadingText("Calling our master Barber to work");
          break;
        case 3:
          setLoadingText("Chopping the perfect look for you");
          break;
        case 4:
          setLoadingText("Swag on in a moment");
          break;
        case 5:
          setLoadingText("Finding the perfect match for your head");
          break;
        case 6:
          setLoadingText("Polishing our finest gems");
          break;
        case 7:
          setLoadingText("Ironing your collection");
          break;
        case 8:
          setLoadingText("Preparing your wardrobe");
          break;
        case 9:
          setLoadingText("Preparing your wardrobe");
          break;
        default:
          setLoadingText("Preparing your wardrobe");
          break;
      }
      if (assetObj && assetObj.file) {
        const response: any = await axios.get(assetObj.file);
        return response.data.replace(/<\/?svg.*?>/g, "");
      } else {
        console.log("No file");
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchBase = async (_base: number) => {
    if (localBases[_base]) {
      // console.log("Fetching layer locally");
      return localBases[_base];
    }
    try {
      // console.log("Downloading layer");
      const assetObj = bases.find((b) => b.id === _base);
      if (assetObj && assetObj.file) {
        const response: any = await axios.get(assetObj.file);
        return response.data.replace(/<\/?svg.*?>/g, "");
      } else {
        console.log("No file");
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const downloadLayers = async () => {
    const b: any = {};
    for (const base in bases) {
      if (bases.hasOwnProperty(base)) {
        const indieBase = bases[base];
        try {
          if (Object.keys(indieBase).length && indieBase.file) {
            b[indieBase.id] = await fetchBase(indieBase.id);
          } else {
            b[indieBase.id] = null;
          }
        } catch (error) {
          console.log(error);
          b[indieBase.id] = null;
        }
      }
    }
    setLocalBases(b);
    const c: any = {};
    for (const category in categories) {
      if (categories.hasOwnProperty(category)) {
        const indieCat = categories[category];
        if (WORKING_LAYERS.indexOf(Number(indieCat.id)) !== 1) {
          c[indieCat.id] = {};
          for (const asset of indieCat.assets) {
            try {
              if (Object.keys(asset).length && asset.file) {
                c[indieCat.id][asset.id] = await fetchAsset(
                  indieCat.id,
                  asset.id
                );
              } else {
                c[indieCat.id][asset.id] = null;
              }
            } catch (error) {
              console.log(error);
              c[indieCat.id][asset.id] = null;
            }
          }
        }
      }
    }
  };

  const createLayers = () => {
    // console.log("Creating layers");
    const layers: any[] = categories.map((cat) => {
      return {
        category: cat.id,
        order: cat.order,
        asset: null,
        svg: null,
      };
    });
    setZobuLayers(layers.sort((a, b) => a.order - b.order));
  };

  const handleChange = useCallback(
    async (category, asset) => {
      const feature = asset ? await fetchAsset(category, asset) : null;
      const hairStyleCategory = getCategory("Hairstyle");
      const hatsCategory = getCategory("Hats");
      const topsCategory = getCategory("Tops");
      const bottomsCategory = getCategory("Bottoms");
      const outfitsCategory = getCategory("Outfit");

      setZobuLayers((z) => {
        const zobuLayersCopy = [...z];
        const layer = zobuLayersCopy.find((l) => l.category === category);
        if (layer) {
          layer.svg = feature;
          layer.asset = asset;
        }
        if (asset !== null) {
          if (
            hairStyleCategory &&
            category === hairStyleCategory.id &&
            hatsCategory
          ) {
            const hatLayer = zobuLayersCopy.find(
              (l) => l.category === hatsCategory.id
            );
            if (hatLayer) {
              hatLayer.svg = null;
              hatLayer.asset = null;
            }
          } else if (
            hatsCategory &&
            category === hatsCategory.id &&
            hairStyleCategory
          ) {
            const hairStyleLayer = zobuLayersCopy.find(
              (l) => l.category === hairStyleCategory.id
            );
            if (hairStyleLayer) {
              hairStyleLayer.svg = null;
              hairStyleLayer.asset = null;
            }
          }
          if (
            ((topsCategory && category === topsCategory.id) ||
              (bottomsCategory && category === bottomsCategory.id)) &&
            outfitsCategory
          ) {
            const outfitLayer = zobuLayersCopy.find(
              (l) => l.category === outfitsCategory.id
            );
            if (outfitLayer) {
              outfitLayer.svg = null;
              outfitLayer.asset = null;
            }
          } else if (outfitsCategory && category === outfitsCategory.id) {
            if (topsCategory) {
              const topLayer = zobuLayersCopy.find(
                (l) => l.category === topsCategory.id
              );
              if (topLayer) {
                topLayer.svg = null;
                topLayer.asset = null;
              }
            }
            if (bottomsCategory) {
              const bottomLayer = zobuLayersCopy.find(
                (l) => l.category === bottomsCategory.id
              );
              if (bottomLayer) {
                bottomLayer.svg = null;
                bottomLayer.asset = null;
              }
            }
          }
        }
        return zobuLayersCopy;
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fetchAsset]
  );

  const primalLayers = useCallback(() => {
    createLayers();
    const handCategory = getCategory("Hand");
    if (handCategory) {
      handleChange(handCategory.id, handCategory.assets[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createLayers]);

  // const handleBaseChange = (_base) => {
  //   primalLayers();
  //   setBase(_base);
  // };

  const randomZobu = useCallback(() => {
    const _categories = [...categories];
    const randomLayers: any[] = [];
    const newBase = getRandomItem([1, 2]);
    const hiddenLayers =
      newBase === 1
        ? ["Base", "Hand"]
        : ["Base", "Hand", "Facial Hair", "Hats"];
    handleBaseChange(newBase);

    _categories
      .filter(
        (c) =>
          hiddenLayers.indexOf(c.name) === -1 &&
          WORKING_LAYERS.indexOf(+c.id) !== -1
      )
      .forEach((_category) => {
        const assetsAccesible = _category.assets.filter(
          (a) => a.bases.indexOf(newBase) !== -1
        );
        const randomAsset =
          assetsAccesible[Math.floor(Math.random() * assetsAccesible.length)];
        const categoryProbability = categoryProbabilities[_category.id];
        if (categoryProbability) {
          const shouldAppear = Math.random() <= categoryProbability;
          console.log(categoryProbability, _category.id, shouldAppear);
          if (shouldAppear) {
            randomLayers.push([_category.id, randomAsset.id]);
          }
        }
      });

    shuffleArray(randomLayers);
    setSelectedBackground(getRandomItem(COLOR_CODES));
    primalLayers();
    randomLayers.forEach((_layer) => {
      handleChange(_layer[0], _layer[1]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, handleChange]);

  useEffect(() => {
    if (categories.length) {
      createLayers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  const handleBaseChange = (_base: number) => {
    primalLayers();
    setSelectedBase(_base);
  };

  useEffect(() => {
    let mounted = true;
    if (categories.length && bases.length) {
      console.log("Downloading assets...");
      setLoadingAssets(true);
      downloadLayers()
        .then(() => {
          console.log("Downloaded Assets...");
        })
        .catch((e) => {
          console.log("Assets downloading failed");
        })
        .finally(() => {
          if (mounted) {
            setLoadingAssets(false);
          }
        });
    }
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, bases]);

  return (
    <section className="flex flex-col">
      <header className="bg-orangy absolute top-0 left-0 right-0 h-18 w-full" />
      <Flex
        col
        className="mt-18 w-full flex-grow-0 flex-shrink-0"
        items="center"
      >
        <h1
          className="text-2xl md:text-4xl font-bold py-8"
          onClick={randomZobu}
        >
          Get your Zomad Avatar!
        </h1>
      </Flex>
      <Flex col items="center" className="">
        <Flex
          col
          items="center"
          justify="center"
          className="max-w-xs h-108 rounded-xl bg-gray-100 p-4"
        >
          <figure className="w-72 h-72 border-white border-8 relative overflow-hidden rounded-full">
            <div
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: selectedBackground }}
            />
            <svg
              className="pointer-events-none z-10 absolute no-svg-animation  mx-auto"
              ref={svgRef}
              style={{ top: "-16px" }}
              id="zomad"
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
          </figure>
          <button
            className="text-center my-8 flex items-center px-8 py-3 text-lg left-0 top-0 text-white rounded-2xl relative border border-orangy text-orangy"
            onClick={randomZobu}
          >
            <Shuffle className="w-6 h-6 mr-4" />
            Randomise
          </button>
        </Flex>
        <Button className="my-8" onClick={download}>
          <Download className="w-6 h-6 mr-4" />
          Download
        </Button>
      </Flex>
    </section>
  );
};

export default Generate;
