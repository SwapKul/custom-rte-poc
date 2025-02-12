import { IContent } from "@components/RTE/interfaces";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IAlert {
  open: boolean;
  message: string;
  severity: AlertColor;
}

export interface IAlertPayload {
  open: boolean;
  message: string;
  status: AlertColor;
}

export interface IValueState {
  rows: any[];
  count: number;
}

export interface IStoreState {
  value: IContent[];
  selectedData: any;
  status: "idle" | "loading" | "failed";
}

export interface IContentTypes {
  title: string;
  value: string;
}
