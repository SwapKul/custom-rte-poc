import { IContentTypes } from "@interfaces/common";

export const options = [
  {
    title: "Bold",
    opt: "B",
    styles: "font-bold",
  },
  {
    title: "Italic",
    opt: "I",
    styles: "italic",
  },
  {
    title: "Underline",
    opt: "U",
    styles: "underline",
  },
];

export const contentTypes: IContentTypes[] = [
  {
    title: "Heading",
    value: "heading",
  },
  {
    title: "Paragraphs",
    value: "para",
  },
  {
    title: "List",
    value: "list",
  },
  {
    title: "Media",
    value: "media",
  },
  {
    title: "Link",
    value: "link",
  },
];
