export const simulateApiDelay = (fn: () => boolean, delay: number = 1000): Promise<boolean> =>
  new Promise((resolve) => setTimeout(() => resolve(fn()), delay));
