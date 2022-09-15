import { useState, useEffect } from "react";
import GetGif from "../../get-gifs";

export function useGifs({ keyword } = { keyword: null }) {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false)
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    useEffect(function () {
        setLoading(true)
        GetGif({ keyword: keywordToUse }).then(gifs => {
            setGifs(gifs)
            setLoading(false)
            localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword])

    return { loading, gifs }
}