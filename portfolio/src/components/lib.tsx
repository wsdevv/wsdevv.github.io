import { ReactNode } from "react";
import { JsxElement } from "typescript";

export interface PageFrontData { 
    title: string, 
    backgroundRender: string,
    backgroundImage: string,
    contents: ReactNode
}