// Requires Node.js + fetch
// spell-checker: disable
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const username = "raufurislam"; // spell-checker: disable-line
const headers = {
  Accept: "application/vnd.github.v3+json",
  Authorization: process.env.GITHUB_SECRET,
};
// console.log("GITHUB_SECRET:", process.env.GITHUB_SECRET);

// spell-checker: enable

async function getUsers(url) {
  let users = [];
  let page = 1;

  while (true) {
    const res = await fetch(`${url}?per_page=100&page=${page}`, { headers });
    const data = await res.json();
    if (data.length === 0) break;
    users = users.concat(data.map((user) => user.login));
    page++;
  }

  return users;
}

(async () => {
  const following = await getUsers(
    `https://api.github.com/users/${username}/following`
  );
  const followers = await getUsers(
    `https://api.github.com/users/${username}/followers`
  );

  const notFollowingBack = following.filter(
    (user) => !followers.includes(user)
  );

  console.log(
    `People you follow who don’t follow you back: ${notFollowingBack.length}`
  );
  console.log(notFollowingBack);
})();

// THis file is all about who is not follow back
