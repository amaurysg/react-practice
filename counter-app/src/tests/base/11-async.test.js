import getImagen from "../../base/11-async-await"

describe('Pruebas async await', () => {

  test('Debe retornar url de imagen', async () => {

   const url = await getImagen()
   console.log(url)

   expect(url.includes('https://')).toBe(true)


    
  })
  
  
})
