// stargazers.js
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const username = "raufurislam";
const headers = {
  Accept: "application/vnd.github.v3+json",
  Authorization: process.env.GITHUB_SECRET,
};

// Get all public repositories
async function getAllRepos(user) {
  let repos = [];
  let page = 1;

  while (true) {
    const res = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=100&page=${page}`,
      { headers }
    );

    if (!res.ok) {
      const error = await res.text();
      console.error(`❌ Error fetching repos: ${res.status}\n${error}`);
      break;
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) break;

    repos = repos.concat(data.map((repo) => repo.name));
    page++;
  }

  return repos;
}

// Get stargazers of one repo
async function getStargazersForRepo(owner, repo) {
  let users = [];
  let page = 1;

  while (true) {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/stargazers?per_page=100&page=${page}`,
      { headers }
    );

    if (!res.ok) {
      console.warn(`⚠️ Skipping ${repo}: ${res.status}`);
      break;
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) break;

    users = users.concat(data.map((user) => user.login));
    page++;
  }

  return users;
}

// Get all stargazers across all repos
async function getAllStargazers(username) {
  const repos = await getAllRepos(username);
  const allStargazers = new Set();

  for (const repo of repos) {
    console.log(`🔍 Fetching stargazers for ${repo}...`);
    const stargazers = await getStargazersForRepo(username, repo);
    stargazers.forEach((user) => allStargazers.add(user));
  }

  return Array.from(allStargazers);
}

// Run
getAllStargazers(username).then((users) => {
  console.log(
    `\n⭐ Total unique stargazers on your account: (${users.length})`
  );
  console.log(users);
});
