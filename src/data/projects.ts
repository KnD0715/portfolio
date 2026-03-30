import { Project } from "@/types/project";
import { naeda } from "./projects/naeda";
import { squiz } from "./projects/squiz";
import { medichart } from "./projects/medichart";

export const projects: Project[] = [
  naeda,
  squiz,
  medichart,
  // 추가 프로젝트는 projects/ 폴더에 파일을 만들고 여기에 import하세요
];
