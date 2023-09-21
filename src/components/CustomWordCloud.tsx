"use client";

import { useTheme } from "next-themes";
import React from "react";
import D3WordCloud from "react-d3-cloud";
type Props = {};

const data = [
  {
    text: "Hey",
    value: "3",
  },
  {
    text: "Java",
    value: "13",
  },
  {
    text: "JavaScript",
    value: "29",
  },
  {
    text: "React",
    value: "38",
  },
  {
    text: "DSA",
    value: "17",
  },
  {
    text: "SQL",
    value: "8",
  },
  {
    text: "C++",
    value: "12",
  },
  {
    text: "Node",
    value: "23",
  },
];

const fontSizeMapper = (word: { value: number }) => {
  return Math.log2(word.value) * 5 + 16;
};
const CustomWordCloud = (props: Props) => {
  const theme = useTheme();
  return (
    <>
      <D3WordCloud
        height={550}
        data={data}
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
