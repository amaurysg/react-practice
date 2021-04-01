import { mount } from "enzyme"
import { MemoryRouter } from "react-router"
import PrivateRoute from "../../routers/PrivateRoute"

describe('Test in PrivateRoute', () => {

  const props = {
    location: {
      pathname: '/marvel'
    }
  }

  test('Debe mostrar componente si está autenticado y guardar localStorage', () => {
    //usamos mount en lugar de shallow, debido a que mount es mas profundo
    const wrapper = mount(
      // para hacer pruebas de routers used MemoryRouter from react-router
      <MemoryRouter>

        <PrivateRoute
          isAuthenticated={true}
          component={() => <span></span>}
          {...props}

        />
      </MemoryRouter>
    )

    expect(wrapper.find('span').exists()).toBe(true)

  })


})
