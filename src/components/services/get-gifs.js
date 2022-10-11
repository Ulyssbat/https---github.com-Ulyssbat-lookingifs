const apiKey = 'k3HTK5ltye94yfM9THpc3Ot4Twqu6YAq';

export default function getGif({ keyword = {} }) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=5&offset=0&rating=r&lang=en`;

    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const { data } = response
            const gifs = data.map(image => {
                const { images, title, id } = image
                const { url } = images.downsized_medium
                return { title, id, url }
            })
            return gifs
        })
}