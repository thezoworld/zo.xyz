import axios from "axios";
import Head from "next/head";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Download, Shuffle } from "../../assets/icons";
import { Flex } from "../../components/structure";
import { Button } from "../../components/ui";
import Loading from "../../components/ui/Loading";
import { getRandomItem, shuffleArray } from "../../utils/array";
import { AVATAR_NAMES } from "../../utils/avatarNames";

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
    "https://api.zostel.com/profile/api/v1/avatar/seed/"
  );
  return { ...response.data.avatar };
};

const WORKING_LAYERS = [1, 2, 3, 4, 5, 8, 10, 11];

const Generate: React.FC<GenerateProps> = () => {
  const [bases, setBases] = useState<AvatarBase[]>([]);
  const [backgroundColors, setBackgroundColors] = useState<AvatarBase[]>([]);
  const [categories, setCategories] = useState<AvatarCategory[]>([]);
  const [categoryProbabilities, setCategoryProbabilities] = useState<any>({});

  const [downloadLink, setDownloadLink] = useState<string>("");

  const [avatarName, setAvatarName] = useState<string>("");

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
    setLoadingText("Downloading ...");
    setLoadingAssets(true);
    let canvas = document.createElement("canvas");
    canvas.height = 1024;
    canvas.width = 1024;
    let context = canvas.getContext("2d");

    if (svgRef.current) {
      const svgElement = svgRef.current;
      const { width, height } = svgElement.getBoundingClientRect();
      try {
        svgElement.style.width = "2000px";
        svgElement.style.height = "5120px";
        let clonedSvgElement: any = svgElement.cloneNode(true);
        let outerHTML = clonedSvgElement.outerHTML,
          blob = new Blob([outerHTML], { type: "image/svg+xml;charset=utf-8" });
        let URL = window.URL || window.webkitURL || window;
        let blobURL = URL.createObjectURL(blob);
        const svgImage = await loadImage(blobURL);
        if (context) {
          context.fillStyle = selectedBackground;
          context.fillRect(0, 0, 1024, 1024);
          context.drawImage(svgImage, -80, -225, 1200, 3072);
        }
        canvas.toBlob((blob) => {
          let data = window.URL.createObjectURL(blob);
          let link = document.createElement("a");
          link.href = data;
          link.download = `${avatarName.replace(/\s+/g, "-")}.jpg`;
          setDownloadLink(data);
          link.click();
        }, "image/jpeg");
      } catch (error) {
        svgElement.style.width = `${width}px`;
        svgElement.style.height = `${height}px`;
      } finally {
        setTimeout(() => {
          setLoadingAssets(false);
        }, 500);
      }
    }
  };

  const getCategory = (name: string) => categories.find((c) => c.name === name);

  useEffect(() => {
    fetchSeed().then((res) => {
      setCategoryProbabilities(res.probabilities);
      setBackgroundColors(res.background.colors);
      setBases(res.bases);
      setCategories(res.categories);
    });
  }, []);

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
        case 8:
          setLoadingText("Polishing our finest gems");
          break;
        case 10:
          setLoadingText("Ironing your collection");
          break;
        case 11:
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
    setLocalLayers(c);
    return true;
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

  const randomZobu = () => {
    setDownloadLink("");
    setLoadingText("Shuffling ...");
    setLoadingAssets(true);
    const randomLayers: any[] = [];
    const newBase = getRandomItem([1, 2]);
    const hiddenLayers = newBase === 1 ? [1, 9] : [1, 9, 2, 5];
    primalLayers();
    setSelectedBase(newBase);
    setSelectedBackground(getRandomItem(backgroundColors));

    categories
      .filter(
        (c) =>
          hiddenLayers.indexOf(+c.id) === -1 &&
          WORKING_LAYERS.indexOf(+c.id) !== -1
      )
      .forEach((_category) => {
        const assetsAccesible = _category.assets.filter(
          (a) => a.bases.indexOf(newBase) !== -1
        );
        let randomAsset = getRandomItem(assetsAccesible);
        if (randomAsset == null) {
          randomAsset = getRandomItem(assetsAccesible);
        }
        const categoryProbability = categoryProbabilities[_category.id];
        setAvatarName(randomAsset.name);
        console.log(`Avatar Name: ${randomAsset.name}`);
        if (categoryProbability) {
          const shouldAppear = Math.random() <= categoryProbability;
          console.log(categoryProbability, _category.name, shouldAppear);
          if (shouldAppear) {
            randomLayers.push([_category.id, randomAsset.id]);
          }
        }
      });

    shuffleArray(randomLayers);
    randomLayers.forEach((_layer) => {
      handleChange(_layer[0], _layer[1]);
    });

    setTimeout(() => {
      setLoadingAssets(false);
    }, 500);
  };

  useEffect(() => {
    if (avatarName == null || avatarName == "") {
      randomZobu();
    }
  }, [avatarName]);

  useEffect(() => {
    if (categories.length) {
      createLayers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  useEffect(() => {
    let mounted = true;
    if (categories.length && bases.length) {
      console.log("Downloading assets...");
      setLoadingAssets(true);
      downloadLayers()
        .then(() => {
          console.log("Downloaded Assets...");
          randomZobu();
        })
        .catch((e) => {
          console.log("Assets downloading failed");
        })
        .finally(() => {});
    }
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, bases]);

  return (
    <section className="flex flex-col">
      <Head>
        <meta name="title" content="Zo World | Get your Zomad Avatar" />
        <meta
          name="description"
          content="Build and get your super cool Zomad avatar to show off to the world."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zo.xyz/zomad/generate" />
        <meta property="og:title" content="Zo World | Get your Zomad Avatar" />
        <meta
          property="og:description"
          content="Build and get your super cool Zomad avatar to show off to the world."
        />
        <meta
          property="og:image"
          content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://zo.xyz/zomad/generate" />
        <meta
          property="twitter:title"
          content="Zo World | Get your Zomad Avatar"
        />
        <meta
          property="twitter:description"
          content="Build and get your super cool Zomad avatar to show off to the world."
        />
        <meta
          property="twitter:image"
          content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
        />
        <meta name="theme-color" content="#F15824" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@The_Zo_World" />
        <title>Zo World | Get your Zomad Avatar</title>
      </Head>
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
          className="max-w-xs w-full h-full rounded-xl bg-gray-100 p-4"
        >
          {loadingAssets ? (
            <Flex col items="center">
              <Loading className="w-32" />
              <span className="mt-4">{loadingText}</span>
            </Flex>
          ) : (
            <>
              <figure className="w-72 h-72 border-white shadow-sm border-8 relative overflow-hidden rounded-full">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: selectedBackground }}
                />
                <svg
                  className="pointer-events-none z-10 absolute no-svg-animation mx-auto"
                  ref={svgRef}
                  style={{ top: "-16px" }}
                  id="zomad"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="154 0 200 512"
                >
                  <g
                    id={String(selectedBase)}
                    dangerouslySetInnerHTML={{
                      __html: localBases[selectedBase],
                    }}
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
              <p className="py-3 text-lg">{avatarName}</p>
              <button
                className="text-center my-8 flex items-center px-8 py-3 text-lg left-0 top-0 rounded-2xl relative border border-orangy text-orangy"
                onClick={randomZobu}
              >
                <Shuffle className="w-6 h-6 mr-4" />
                Randomise
              </button>
            </>
          )}
        </Flex>
        <Flex items="center" col justify="center" className="h-32">
          {loadingAssets ? (
            downloadLink != "" && (
              <span className="text-center">
                If the download hasn't started yet
                <br />
                <a
                  href={downloadLink}
                  target="_blank"
                  download={`${avatarName.replace(/\s+/g, "-")}.jpg`}
                  className="text-orangy font-semibold"
                >
                  Click to download
                </a>
              </span>
            )
          ) : (
            <Button onClick={download}>
              <Download className="w-6 h-6 mr-4" />
              Download
            </Button>
          )}
        </Flex>
      </Flex>
    </section>
  );
};

export default Generate;
