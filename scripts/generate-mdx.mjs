import fs from "fs";
import path from "path";

console.log("Generating static docs...");

const ROOT_DIR = path.join(process.cwd());
const PACKAGE_SRC_DIR = path.join(
  ROOT_DIR,
  "packages",
  "react-usehooks",
  "src"
);
const DOC_SRC_DIR = path.join(ROOT_DIR, "apps", "web", "src", "docs");

const OUTPUT_DIR = path.join(ROOT_DIR, "apps", "web", "src", "generated");

export function getAllHooksList() {
  return fs.readdirSync(DOC_SRC_DIR).filter((dir) => dir.startsWith("use"));
}

function run() {
  // Create /generated for output
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  } else {
    fs.rmdirSync(OUTPUT_DIR, { recursive: true, force: true });
    fs.mkdirSync(OUTPUT_DIR);
  }

  const allHooks = getAllHooksList();

  allHooks.map((hook) => {
    const hookDir = path.join(OUTPUT_DIR, hook);
    // Create dir for each hook
    fs.mkdirSync(hookDir);

    const hookCode = fs.readFileSync(
      path.join(PACKAGE_SRC_DIR, hook, `${hook}.ts`)
    );
    const hookDoc = fs.readFileSync(
      path.join(DOC_SRC_DIR, hook, `${hook}.mdx`)
    );

    const hookDemo = fs
      .readFileSync(path.join(DOC_SRC_DIR, hook, `${hook}.demo.tsx`))
      .toString();

    fs.writeFileSync(path.join(hookDir, `${hook}.doc.md`), hookDoc);
    fs.writeFileSync(
      path.join(hookDir, `${hook}.code.md`),
      `\`\`\`ts\n${hookCode}\n\`\`\``
    );
    fs.writeFileSync(
      path.join(hookDir, `${hook}.demo.md`),
      `\`\`\`tsx\n${hookDemo}\n\`\`\``
    );
  });
}

run();
