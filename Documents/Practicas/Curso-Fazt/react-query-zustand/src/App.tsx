import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useFetchRepository } from './hooks/useRepos';
import { Card } from './components/card';
import { useFavoriteRepoStore } from './store/favoriteRepos';
function App() {
  const {data, isLoading }=useFetchRepository('fazt');
  const { favoriteReposIds } = useFavoriteRepoStore();
if(isLoading) return <div>loadin ... posta </div>

  return (
    <div className="App">
      <div>
      <h1>hola</h1>
        {data?.map(repo => (<Card key={repo.id} repository={repo}
        isFavorite={favoriteReposIds.includes(repo.id)}
        />)
      )}
  
    
      </div>
   
    </div>
  )
}

export default App
