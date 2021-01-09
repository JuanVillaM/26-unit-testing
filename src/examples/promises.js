import { getHeroById } from "./imports-exports";

export const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const hero = getHeroById(id);
            if(hero){
                resolve(hero);
            } else {
                reject( 'Error searching the hero' );
            }
        }, 1500);
    });
}