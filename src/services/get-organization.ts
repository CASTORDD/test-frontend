export const getOrganization = async (org: string) => {
  const response = await fetch(`https://api.github.com/users/${org}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
