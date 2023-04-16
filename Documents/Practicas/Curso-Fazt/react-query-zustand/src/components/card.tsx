import React from 'react'
import { Repository, Root2} from '../hooks/types'
import { useFavoriteRepoStore } from '../store/favoriteRepos';
type CardProps= {
repository: Root2,
    isFavorite:boolean
}
export const Card = ({ repository, isFavorite }: CardProps) => {

    const addFavoriteRepo = useFavoriteRepoStore(state => state.addFavoriteRepo);
    const removeFavoriteRepo = useFavoriteRepoStore(state => state.removeFavoriteRepo);
    const toggleFavorite =()=>{
        if(isFavorite){
           removeFavoriteRepo(repository.id)
           return
        }else{
            addFavoriteRepo(repository.id)
        }
    }
 
    return (
    <div>
          <h3>{repository.name}</h3>
          {
            isFavorite ?
                    <button onClick={toggleFavorite}>Dislike</button>
                    : <button onClick={toggleFavorite}>Like</button>
          }
    </div>
  )
}
