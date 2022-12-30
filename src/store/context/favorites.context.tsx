import React, {createContext, useState, Context} from 'react'

type FavoritesContextType = {
    ids: Array<string>
    addFavorite: (id: string) => void
    removeFavorite: (id: string) => void
}

export const FavoritesContext: Context<FavoritesContextType> = createContext({
    ids: [''],
    addFavorite: (id: string) => {},
    removeFavorite: (id: string) => {},
})

export const FavoritesContextProvider = ({ children }: { children: React.ReactElement }) => {
    const [favoriteMealIds, setFavoriteMealIds] = useState<Array<string>>([])

    const addFavorite = (id: string) => {
        setFavoriteMealIds((currentIds) => [...currentIds ?? [], id])
    }

    const removeFavorite = (id: string) => {
        setFavoriteMealIds((currentIds) => currentIds?.filter((mealId) => mealId !== id))
    }

    const contextValue : FavoritesContextType = {
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite,
    }
    return <FavoritesContext.Provider value={contextValue}>{children}</FavoritesContext.Provider>
}
