import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/hero";

describe('Pruebas en funciones 08' ,()=> {

  test('Debe retornar un heroe por ID', () => {
    
    const id = 4; 
    const heroe = getHeroeById(id)
    /* console.log(heroe) */

    const heroData = heroes.find( h => h.id === id)

    expect(heroe).toEqual(heroData)

  })
  test('Debe retornar undefined si hero no existe', () => {
    
    const id = 10; 
    const heroe = getHeroeById(id)
    /* console.log(heroe) */
  
    expect(heroe).toBe(undefined)

  })

  test('Debe retornar un heroe por Owner', () => {
    
    const owner = "Marvel"; 
    const heroeOwner = getHeroesByOwner(owner)
   /*  console.log(heroeOwner) */

    const heroDataOwner = heroes.filter( h => h.owner === owner)
    /* console.log(heroDataOwner) */
    expect(heroeOwner).toEqual(heroDataOwner)

  })


  test('Debe retornar un arreglo con los heroes de Marvel', () => {
    
    const owner = "DC"; 
    const heroeOwnerMarvel = getHeroesByOwner(owner)
    /* console.log(heroeOwnerMarvel.length) */

    const cantidadHero = heroeOwnerMarvel.length
    /* console.log(cantidadHero) */
 

    expect(cantidadHero).toBe(3)

  })
  test('Debe retornar undefined si owner no existe', () => {
    
    const owner = "DCsssa"; 
    const heroeOwnerMarvel = getHeroesByOwner(owner)
    console.log(heroeOwnerMarvel)
 

    expect(heroeOwnerMarvel).toEqual([])

  })


  
})