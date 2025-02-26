import { UnknownAction } from "@reduxjs/toolkit";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IContent {
  type: string;
  value: string | null | unknown;
}

export interface IContentTypeSelectorProps extends IContent {
  action: any;
  // action: (payload: { index: number; value: string }) => unknown;
  index: number;
  removeAction: any;
  // removeAction: (index: number) => void;
  updateAction: any;
  // updateAction: (index: number, value: string | null | unknown) => void;
}

export interface IStacks {
  stack: string;
}

export interface IProgLang {
  language: string;
}

export interface IFramework {
  framework: string;
}

export interface IStepCompProps {
  title: string;
  option: string;
  options: IProgLang[] | IFramework[] | IStacks[];
}

export interface IStep {
  title: string;
  option: string;
  options: IProgLang[] | IFramework[] | IStacks[];
}
