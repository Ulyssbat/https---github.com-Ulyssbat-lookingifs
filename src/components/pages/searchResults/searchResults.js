import React from "react";
import Spinner from '../../spinner/spinner'
import ListOfGifs from "../../list-of-gifs";
import { useGifs } from "../../hooks/useGifs";

export default function SearchResults({ params }) {
    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword })

    return <>
        {loading
            ? <Spinner />
            : <ListOfGifs gifs={gifs} />
        }
    </>
}