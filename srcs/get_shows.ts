const urls: string[] = [
	"https://www.nts.live/api/v2/shows/deadair-transmissions",
	"https://www.nts.live/api/v2/shows/moxie",
	"https://www.nts.live/api/v2/shows/umru",
	"https://www.nts.live/api/v2/shows/country-hayride",
	"https://www.nts.live/api/v2/shows/jeune-pouce",
	"https://www.nts.live/api/v2/shows/lil-c",
	"https://www.nts.live/api/v2/shows/adonis",
	"https://www.nts.live/api/v2/shows/hea4rtbroken",
	"https://www.nts.live/api/v2/shows/fifth-world",
	"https://www.nts.live/api/v2/shows/organ-tapes",
	"https://www.nts.live/api/v2/shows/otaku",
	"https://www.nts.live/api/v2/shows/hellotones",
	"https://www.nts.live/api/v2/shows/th4ys",
	"https://www.nts.live/api/v2/shows/sounds-on-screen"
];

async function getData(url: string): Promise<any> {
	try {
		const setInfo = await fetch(url, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		if (!setInfo.ok)
			throw new Error('Set not found.');
		const data = await setInfo.json();
		return data;
	} catch (error) {
		console.log("Show not found.");
	}
	return null;
}


export async function getLatest() {
	let latest = await getData(urls[0]);;
	for (const url of urls) {
		const show = await getData(url);
		if ((new Date(latest.embeds.episodes.results[0].broadcast).getTime()) < (new Date(show.embeds.episodes.results[0].broadcast).getTime())) {
			latest = show;
		}
	}
	console.log(latest.embeds.episodes.results[0].generes);
}