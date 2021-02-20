function all<T extends {}>(f: T): boolean {
    return Object.values(f).every((b) => b)
};

export default all;