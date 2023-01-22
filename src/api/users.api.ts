export const getUsers: any = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      let x = Math.random();
      if (x < 0.5) throw new Error("404");
      return response.json();
    }
  );
};
