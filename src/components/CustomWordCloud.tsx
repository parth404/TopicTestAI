"use client";

import { useTheme } from "next-themes";
import React from "react";
import D3WordCloud from "react-d3-cloud";
type Props = {
  formattedTopics: { text: string; value: number }[];
};

const data = [];

const fontSizeMapper = (word: { value: number }) => {
  return Math.log2(word.value) * 5 + 16;
};
const CustomWordCloud = ({ formattedTopics }: Props) => {
  const theme = useTheme();
  return (
    <>
      <D3WordCloud
        height={550}
        data={formattedTopics}
        font="Times"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme.theme == "dark" ? "white" : "black"}
      />
    </>
  );
};

export default CustomWordCloud;
