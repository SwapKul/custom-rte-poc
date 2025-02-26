import { IFramework, IProgLang, IStacks } from "@components/RTE/interfaces";
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

export const languages: IProgLang[] = [
  {
    language: "Javascript",
  },
  {
    language: "Python",
  },
];

export const stacks: IStacks[] = [
  {
    stack: "Frontend",
  },
  {
    stack: "Backend",
  },
  {
    stack: "Fullstack",
  },
  {
    stack: "DevOps",
  },
  {
    stack: "Android",
  },
];

export const frameworks: IFramework[] = [
  {
    framework: "React Js",
  },
  {
    framework: "Next.Js",
  },
  {
    framework: "Fullstack",
  },
  {
    framework: "DevOps",
  },
  {
    framework: "Mobile",
  },
];
