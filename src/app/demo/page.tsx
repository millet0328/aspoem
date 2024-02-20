"use client";

import domToImage from "dom-to-image";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

const ImageDom = () => {
  const { data: poem } = api.poem.findById.useQuery(809);

  if (!poem) return;

  const content =
    poem?.content
      .replaceAll("\n", "")
      .match(/[^。|！|？|，|；]+[。|！|？|，|；]+/g)
      ?.slice(0, 2) || [];

  return (
    <div
      id="image-dom"
      style={{
        height: 1440,
        width: 1080,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3d345a",
        color: "#fff",
      }}
    >
      {content.map((c, i) => {
        return (
          <div
            key={i}
            style={{
              fontSize: 112,
              display: "flex",
              marginTop: i === 0 ? "-10%" : 0,
            }}
          >
            {c}
          </div>
        );
      })}

      <div
        style={{
          marginTop: 132,
          fontSize: 36,
          color: "#d4ceea",
          display: "flex",
        }}
      >
        —— {poem.author.dynasty}·{poem.author.name}《{poem.title}》
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10%",
          fontSize: 32,
          color: "#bbb",
        }}
      >
        现代化中国诗词学习网站
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "7%",
          fontSize: 32,
          color: "#bbb",
        }}
      >
        aspoem.com
      </div>
    </div>
  );
};

export default function a() {
  return (
    <>
      <ImageDom />
      <Button
        onClick={() => {
          void domToImage
            .toPng(document.getElementById("image-dom")!)
            .then((blob) => {
              const link = document.createElement("a");
              link.href = blob;
              link.download = "poem.png";
              link.click();
            });
        }}
      >
        保存
      </Button>
    </>
  );
}
