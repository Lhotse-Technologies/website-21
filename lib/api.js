import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import markdownToHtml from "./markdownToHtml";

const PAGE_DIR = join(process.cwd(), "/content/pages");

export function getFiles(path) {
  return fs.readdirSync(path);
}
export function getFileName(name) {
  return name.replace(".md", "");
}

export async function getPage(path, language, defaultLanguage) {

  const langPath = join(PAGE_DIR, `/${language}/${path}`);
  const defaultPath = join(PAGE_DIR, `/${defaultLanguage}/${path}`);
  let fullPath;
  fs.existsSync(langPath) ? fullPath = langPath : fullPath = defaultPath;
  const files = getFiles(fullPath);

  let pageData = {};
  for (let i = 0; i < files.length; i++) {
    const currentFile = files[i];
    const fileContent = fs.readFileSync(join(fullPath, currentFile), "utf8");
    const { orig, content, ...serialized } = matter(fileContent);

    const parsedContent = await markdownToHtml(content);

    pageData[getFileName(currentFile)] = {
      ...serialized,
      content: parsedContent,
    };
  }

  return pageData;
}
