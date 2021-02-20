function any<T extends {}>(o: T): boolean {
    return Object.values(o).includes(true);
};

export default any;