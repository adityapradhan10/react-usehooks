import path from "path";
import fs from "fs";

const ROOT_DIR = path.join(process.cwd(), "..", "..");
const DOC_SRC_DIR = path.join(ROOT_DIR, "apps", "web", "src", "generated");
const PACKAGE_SRC_DIR = path.join(
  ROOT_DIR,
  "packages",
  "react-usehooks",
  "src"
);

/**
 * Get all the hooks which have the  documentation
 */
export const getAllHookList = () => {
  return fs.readdirSync(DOC_SRC_DIR);
};

/**
 * Get hook details based on hook slug
 */
export const getHook = (hookName: string) => {
  const hook_dir = path.join(DOC_SRC_DIR, hookName);
  const doc = fs.readFileSync(path.join(hook_dir, `${hookName}.doc.md`));
  const code = fs.readFileSync(path.join(hook_dir, `${hookName}.code.md`));
  const demo = fs.readFileSync(path.join(hook_dir, `${hookName}.demo.md`));

  return {
    slug: hookName,
    dir: hook_dir,
    doc,
    code,
    demo,
  };
};
