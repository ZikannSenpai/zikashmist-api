import fs from "fs";
import path from "path";

const root = process.cwd();

function tree(dir, prefix = "") {
  const files = fs.readdirSync(dir).filter(f => !f.startsWith("."));

  files.forEach((file, i) => {
    const full = path.join(dir, file);
    const isLast = i === files.length - 1;
    const connector = isLast ? "└── " : "├── ";

    console.log(prefix + connector + file);

    if (fs.statSync(full).isDirectory()) {
      const nextPrefix = prefix + (isLast ? "    " : "│   ");
      tree(full, nextPrefix);
    }
  });
}

console.log(path.basename(root));
tree(root);
