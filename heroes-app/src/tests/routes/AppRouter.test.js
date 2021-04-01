import { mount, shallow } from "enzyme"
import AuthContext from "../../auth/AuthContext"
import AppRouter from "../../routers/AppRouter"

describe('Test in AppRoute', () => {

  test(' Debe mostrar login si no esta autenticado', () => {
    const contextValues = {
      dispatch: jest.fn(),
      user: {
        logged: false
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValues}>
        <AppRouter />
      </AuthContext.Provider>

    )
    // console.log(wrapper.html())

    expect(wrapper).toMatchSnapshot()

  })

  test('Debe mostrar componente de Marvel si está autenticado', () => {
    const contextValues = {
      dispatch: jest.fn(),
      user: {
        name: 'Amaury',
        logged: true
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValues}>
        <AppRouter />
      </AuthContext.Provider>

    )
    // console.log(wrapper.html())
    expect(wrapper.find('.navbar').exists()).toBe(true)


  })



})
