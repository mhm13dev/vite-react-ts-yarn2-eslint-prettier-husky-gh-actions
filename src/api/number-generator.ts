let initialNumber = 0;

export const generateNewNumber = (): Promise<number> => {
  const promise = new Promise<number>((resolve) => {
    setTimeout(() => {
      initialNumber = Math.floor(Math.random() * 100);
      resolve(initialNumber);
    }, 1000);
  });

  return promise;
};
