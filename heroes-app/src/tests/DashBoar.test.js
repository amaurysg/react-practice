import { mount } from "enzyme"
import { MemoryRouter } from "react-router"
import AuthContext from "../auth/AuthContext"
import DashboardRoutes from "../routers/DashboardRoutes"

describe('Test en DashBoard', () => {

  const contextValues = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Juanito'
    }
  }

  test('should ', () => {

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
    expect(wrapper.find('.text-info').text().trim()).toBe('Juanito')

  })


})
