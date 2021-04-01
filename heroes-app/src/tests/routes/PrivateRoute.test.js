import { mount } from "enzyme"
import { MemoryRouter } from "react-router"
import PrivateRoute from "../../routers/PrivateRoute"

describe('Test in PrivateRoute', () => {

  //create props with values required
  const props = {
    location: {
      pathname: '/marvel'
    }
  }

  Storage.prototype.setItem = jest.fn()

  test('Debe mostrar componente si está autenticado y guardar localStorage', () => {
    //usamos mount en lugar de shallow, debido a que mount es mas profundo y pueda renderizar el PrivateRoute
    const wrapper = mount(
      // para hacer pruebas de routers used MemoryRouter from react-router
      <MemoryRouter>

        <PrivateRoute
          isAuthenticated={true}
          //De esta manera simulamos un component.. es una arrow function que retorna un tag html. en este caso un jsx span
          component={() => <span></span>}
          {...props}

        />
      </MemoryRouter>
    )

    expect(wrapper.find('span').exists()).toBe(true)
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPathname', '/marvel')

  })


})
