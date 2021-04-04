import { mount } from "enzyme"
import { MemoryRouter } from "react-router"
import AuthContext from "../auth/AuthContext"
import DashboardRoutes from "../routers/DashboardRoutes"

describe('Test en DashBoard', () => {

  //defined a const to simulated
  const contextValues = {
    //here used fn() to simulated fn.
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Juanito'
    }
  }

  test('should ', () => {
    //here used mount because this rearch more deep.
    const wrapper = mount(
      //para trabajar con routes usamos MemoryRouter
      <MemoryRouter>
        <AuthContext.Provider value={contextValues}>
          <DashboardRoutes
          />
        </AuthContext.Provider>

      </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot()
    //here review Juanito inside html
    expect(wrapper.find('.text-info').text().trim()).toBe('Juanito')

  })


})
