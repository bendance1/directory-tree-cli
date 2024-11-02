const Directory = require('./Directory');

class FileSystem {
  constructor() {
    this.root = new Directory('');
  }

  parsePath(path) {
    return path.split('/').filter(Boolean);
  }

  findDirectory(path) {
    const parts = this.parsePath(path);
    let current = this.root;

    for (const part of parts) {
      current = current.children.get(part);
      if (!current) return null;
    }
    return current;
  }

  create(path) {
    const parts = this.parsePath(path);
    let current = this.root;

    for (const part of parts) {
      if (!current.children.has(part)) {
        current = current.addChild(part);
      } else {
        current = current.children.get(part);
      }
    }
  }

  move(source, destination) {
    const sourceDir = this.findDirectory(source);
    if (!sourceDir) return;

    const sourceParts = this.parsePath(source);
    const sourceParentPath = sourceParts.slice(0, -1).join('/');
    const sourceParent = sourceParentPath ? this.findDirectory(sourceParentPath) : this.root;

    const destDir = this.findDirectory(destination);
    if (!destDir) return;

    sourceParent.removeChild(sourceParts[sourceParts.length - 1]);
    sourceDir.parent = destDir;
    destDir.children.set(sourceParts[sourceParts.length - 1], sourceDir);
  }

  delete(path) {
    const parts = this.parsePath(path);
    const dirName = parts[parts.length - 1];
    const parentPath = parts.slice(0, -1).join('/');
    const parent = parentPath ? this.findDirectory(parentPath) : this.root;

    if (!parent) {
      console.log(`Cannot delete ${path} - ${parts[0]} does not exist`);
      return;
    }

    parent.removeChild(dirName);
  }

  list() {
    this._printDirectory(this.root, 0);
  }

  _printDirectory(dir, level) {
    const sortedChildren = Array.from(dir.children.entries()).sort(([nameA], [nameB]) =>
      nameA.localeCompare(nameB)
    );

    for (const [name, child] of sortedChildren) {
      console.log('  '.repeat(level) + name);
      this._printDirectory(child, level + 1);
    }
  }
}

module.exports = FileSystem;
