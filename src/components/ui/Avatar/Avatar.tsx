import React, { useEffect, useState } from "react";
import Axios from "axios";

const DEFAULT_ZOBU = "https://cdn.zostel.com/avatar/zobu.svg";

interface AvatarProps {
  className?: string;
  svg: string | null;
  full?: boolean;
  style?: { [key: string]: any };
  onClick?:
    | ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void)
    | undefined;
}

const Avatar: React.FC<AvatarProps> = ({
  className,
  svg,
  full,
  style,
  onClick,
}) => {
  const [svgData, setSvgData] = useState<string>("");

  const fetchSVG = async (url: string) => {
    if (sessionStorage.getItem(url)) {
      return sessionStorage.getItem(url);
    } else {
      try {
        const response = await Axios.get(url);
        const svgResponse = response.data.replace(/<\/?svg.*?>/g, "");
        try {
          sessionStorage.setItem(url, svgResponse);
        } catch (error) {
          sessionStorage.clear();
          sessionStorage.setItem(url, svgResponse);
        }
        return svgResponse;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  };

  useEffect(() => {
    let mounted = true;

    if (svg) {
      fetchSVG(svg)
        .then((data) => {
          if (data && mounted) {
            setSvgData(data);
          } else {
            fetchSVG(DEFAULT_ZOBU)
              .then((data) => {
                if (mounted) {
                  setSvgData(data);
                }
              })
              .catch((e) => {
                console.log(e);
              });
          }
        })
        .catch((e) => {
          fetchSVG(DEFAULT_ZOBU)
            .then((data) => {
              if (mounted) {
                setSvgData(data);
              }
            })
            .catch((e) => {
              console.log(e);
            });
        });
    } else {
      fetchSVG(DEFAULT_ZOBU)
        .then((data) => {
          if (mounted) {
            setSvgData(data);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }

    return () => {
      mounted = false;
    };
  }, [svg]);

  return full ? (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="154 0 200 512"
      dangerouslySetInnerHTML={{ __html: svgData }}
      style={style}
      onClick={onClick}
    />
  ) : (
    <div
      className={`overflow-hidden rounded-full ${className ? className : ""}`}
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="175 47 155 155"
        dangerouslySetInnerHTML={{ __html: svgData }}
        style={style}
        onClick={onClick}
      />
    </div>
  );
};

export default Avatar;
