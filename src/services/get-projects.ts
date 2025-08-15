export const getProjects = async ({ org = "", limit = 10, page = 1 }) => {
  const response = await fetch(
    `https://api.github.com/users/${org}/repos?per_page=${limit}&page=${page}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await response.json();
};
