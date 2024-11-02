const FileSystem = require('../../src/models/FileSystem');

describe('FileSystem', () => {
  let fs;

  beforeEach(() => {
    fs = new FileSystem();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    fs = new FileSystem();
    console.log.mockRestore();
  });

  describe('create', () => {
    it('should create a single directory', () => {
      fs.create('test');
      expect(fs.findDirectory('test')).not.toBeNull();
    });

    it('should create nested directories', () => {
      fs.create('parent/child');
      const child = fs.findDirectory('parent/child');
      expect(child).not.toBeNull();
      expect(child.getPath()).toBe('/parent/child');
    });

    it('should handle creating existing directory', () => {
      fs.create('test');
      fs.create('test');
      expect(fs.root.children.size).toBe(1);
    });
  });

  describe('move', () => {
    beforeEach(() => {
      fs.create('source');
      fs.create('dest');
    });

    it('should move directory to new location', () => {
      fs.move('source', 'dest');
      expect(fs.findDirectory('source')).toBeNull();
      expect(fs.findDirectory('dest/source')).not.toBeNull();
    });

    it('should handle non-existent source', () => {
      fs.move('nonexistent', 'dest');
      expect(fs.findDirectory('dest/nonexistent')).toBeNull();
      expect(fs.findDirectory('dest')).not.toBeNull();
    });

    it('should handle non-existent destination', () => {
      fs.move('source', 'nonexistent');
      expect(fs.findDirectory('source')).not.toBeNull();
    });
  });

  describe('delete', () => {
    beforeEach(() => {
      fs.create('test');
      fs.create('test/child');
    });

    it('should delete a directory', () => {
      fs.delete('test');
      expect(fs.findDirectory('test')).toBeNull();
    });
  });
});
