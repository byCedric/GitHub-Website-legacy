export function mentionLink(name) {
	let mention = name.split("");

	mention.splice(0, 1);

	let username = mention.join("");

	const url = `https://github.com/${username}`;

	return url;
}
