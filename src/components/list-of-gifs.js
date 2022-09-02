import React, { useState, useEffect } from "react";
import Gif from "./gif";
import GetGif from "../get-gifs";

export default function ListOfGifs({ params }) {
    const { keyword } = params

    const [gifs, setGifs] = useState([]);

    useEffect(function () {
        GetGif({ keyword }).then(gifs => setGifs(gifs))
    }, [keyword])

    return gifs.map(({ id, title, url }) =>
        <Gif
            key={id}
            id={id}
            title={title}
            url={url}
        />
    )
}