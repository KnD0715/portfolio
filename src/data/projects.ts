import { Project } from "@/types/project";
import { squiz } from "./projects/squiz";

export const projects: Project[] = [
  squiz,
  // 추가 프로젝트는 projects/ 폴더에 파일을 만들고 여기에 import하세요
  // import { projectName } from "./projects/projectName";
];
