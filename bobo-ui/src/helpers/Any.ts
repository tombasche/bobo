function any<T extends {}>(o: T): boolean {
  return Object.values(o).some((val) => {
    return val === true || val !== '';
  });
}

export default any;
