const Directory = require('../../src/models/Directory');

describe('Directory', () => {
  let directory;

  beforeEach(() => {
    directory = new Directory('root');
  });

  describe('constructor', () => {
    it('should be a directory with the given name', () => {
      expect(directory.name).toBe('root');
    });

    it('should initialize with empty children', () => {
      expect(directory.children.size).toBe(0);
    });

    it('should set parent to null by default', () => {
      expect(directory.parent).toBeNull();
    });
  });

  describe('addChild', () => {
    it('should add a child directory', () => {
      const child = directory.addChild('child');
      expect(directory.children.get('child')).toBe(child);
    });

    it('should set parent reference correctly', () => {
      const child = directory.addChild('child');
      expect(child.parent).toBe(directory);
    });

    it('should return the new child directory', () => {
      const child = directory.addChild('child');
      expect(child).toBeInstanceOf(Directory);
      expect(child.name).toBe('child');
    });
  });

  describe('removeChild', () => {
    it('should remove an existing child', () => {
      directory.addChild('child');
      expect(directory.removeChild('child')).toBe(true);
      expect(directory.children.has('child')).toBe(false);
    });

    it('should return false when removing non-existing child', () => {
      expect(directory.removeChild('nonexistent')).toBe(false);
    });
  });

  describe('getPath', () => {
    it('should return root path for top-level directory', () => {
      expect(directory.getPath()).toBe('root');
    });

    it('should return correct path for nested directory', () => {
      const child = directory.addChild('child');
      const grandchild = child.addChild('grandchild');
      expect(grandchild.getPath()).toBe('root/child/grandchild');
    });
  });
});
