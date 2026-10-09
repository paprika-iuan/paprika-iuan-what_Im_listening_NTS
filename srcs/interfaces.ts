interface ShowData {
    show: string;
    generes: string[];
    description: string;
    date: string;
    soundcloud: string;
    img: string;
}

export function extractShowData(show: string): ShowData {
    const info: ShowData = {
        show: show.embeds.episodes.results[0].name,
        generes: show.embeds.episodes.results[0].generes,
        description: show.embeds.episodes.results[0].description,
    }
}