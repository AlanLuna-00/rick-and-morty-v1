import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { cleanCharacterDetail, getCharacterDetail } from "../redux/actions"

export const useGetCharacter = () => {
    const dispatch = useDispatch()

    const { id } = useParams()

    const parsedId = parseInt(id);

    const character = useSelector((state) => state.characterDetail)

    useEffect(() => {
        dispatch(getCharacterDetail(parsedId))
        return () => {
            dispatch(cleanCharacterDetail())
        }
    }, [parsedId, dispatch])

    return character

}
