import { useState, useEffect, useContext } from "react";
import getGif from "../../get-gifs";
import GifsContext from "../../context/GifsContext";

export function useGifs({ keyword } = { keyword: null }) {
    const { gifs, setGifs } = useContext(GifsContext)
    const [loading, setLoading] = useState(false)

    useEffect(function () {
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
        setLoading(true)

        getGif({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, setGifs])

    return { loading, gifs }
}