export const getGif =  async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=lxNF8coDKnFfTVDiaYUzQkZkheEXNsLq&q=${ categoria }&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json()

    const gifs = data.map( img => ({
      url: img.images.downsized_medium.url,
      title: img.title,
      id: img.id

    }));

    // console.log(gifs);
    return gifs
}