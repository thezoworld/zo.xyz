import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { getRandomItem, shuffleArray } from "../../../utils/array";
import { useWindowSize } from "../../hooks";
import { Flex } from "../../structure";
import AssetsDisplay from "./components/AssetsDisplay";
import AssetsSelector from "./components/AssetsSelector";

interface ZomadGeneratorProps {}

const fetchSeed = async () => {
  const response: any = await axios.get(
    "https://api.zostel.com/profile/api/v1/avatar/seed/"
  );
  return { ...response.data.avatar };
};

const ZomadGenerator: React.FC<ZomadGeneratorProps> = () => {
  const { isPortrait } = useWindowSize();

  const [backgrounds, setBackgrounds] = useState<Background[]>([]);
  const [bases, setBases] = useState<AvatarBase[]>([]);
  const [categories, setCategories] = useState<AvatarCategory[]>([]);
  const [categoryProbabilities, setCategoryProbabilities] = useState<any>({});
  const [hiddenLayers, setHiddenLayers] = useState<string[]>(["Base", "Hand"]);

  const [localLayers, setLocalLayers] = useState<any>({});
  const [localBases, setLocalBases] = useState<any>({});

  const [loadingText, setLoadingText] = useState<string>(
    "Loading your wardrobe"
  );
  const [loadingAssets, setLoadingAssets] = useState<boolean>(true);

  const [selectedBackground, setSelectedBackground] = useState<string>("");
  const [zobuLayers, setZobuLayers] = useState<any[]>([]);
  const [selectedBase, setSelectedBase] = useState(1);

  const getCategory = (name: string) => categories.find((c) => c.name === name);

  useEffect(() => {
    fetchSeed().then((res) => {
      setBackgrounds(res.background);
      setBases(res.bases);
      setCategories(res.categories);
      setCategoryProbabilities(res.probabilities);
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

  const handleBackgroundChange = (backgroundKey: string) => {
    const background: string =
      backgrounds.find((bg) => bg.key === backgroundKey)?.file_horizontal ||
      backgrounds.find((bg) => bg.key === backgroundKey)?.file ||
      "";
    setSelectedBackground(background);
  };

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
    _categories
      .filter((c) => hiddenLayers.indexOf(c.name) === -1)
      .forEach((_category) => {
        const assetsAccesible = _category.assets.filter(
          (a) => a.bases.indexOf(selectedBase) !== -1
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
    const randomBG = getRandomItem(backgrounds);
    let bgFile = randomBG.file_horizontal;
    if (isPortrait) {
      bgFile = randomBG.file_vertical;
    }
    shuffleArray(randomLayers);
    setSelectedBackground(bgFile);
    primalLayers();
    randomLayers.forEach((_layer) => {
      handleChange(_layer[0], _layer[1]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBase, categories, isPortrait, handleChange, hiddenLayers]);

  useEffect(() => {
    switch (selectedBase) {
      case 1:
        setHiddenLayers(["Base", "Hand"]);
        break;
      case 2:
        setHiddenLayers(["Base", "Hand", "Facial Hair", "Hats"]);
        break;
      default:
        setHiddenLayers(["Base", "Hand"]);
    }
  }, [selectedBase]);

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
            randomZobu();
          }
        });
    }
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, bases]);

  return (
    <Flex className="min-h-screen mt-18 w-full" items="stretch">
      <AssetsDisplay
        randomZobu={randomZobu}
        localBases={localBases}
        selectedBase={selectedBase}
        zobuLayers={zobuLayers}
        selectedBackground={selectedBackground}
      />
      <AssetsSelector
        backgrounds={backgrounds}
        selectedBackground={selectedBackground}
        categories={categories}
        handleBackgroundChange={handleBackgroundChange}
        handleChange={handleChange}
        zobuLayers={zobuLayers}
        hiddenLayers={hiddenLayers}
        selectedBase={selectedBase}
      />
    </Flex>
  );
};

export default ZomadGenerator;
