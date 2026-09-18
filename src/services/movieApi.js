const API_URL = "https://api.tvmaze.com";

export async function fetchShows() {
  const response = await fetch(`${API_URL}/shows`);

  if (!response.ok) {
    throw new Error("Unable to fetch shows.");
  }

  return response.json();
}

export async function findShows(query) {
  const response = await fetch(
    `${API_URL}/search/shows?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Unable to search shows.");
  }

  return response.json();
}

export async function fetchShowById(id) {
  const response = await fetch(
    `${API_URL}/shows/${id}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch show details.");
  }

  return response.json();
}