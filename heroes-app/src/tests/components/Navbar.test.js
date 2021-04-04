import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router"
import AuthContext from "../../auth/AuthContext"
import Navbar from "../../components/ui/Navbar"
import types from "../../types/types"

describe('Test in <Navbar/>', () => {

  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),

  }

  const contextValues = {
    dispatch: jest.fn(),
    user: {
      name: 'Pedro',
      logged: true,
    }
  }

  const wrapper = mount(
    <AuthContext.Provider value={contextValues}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>

  )

  afterEach(() => {
    jest.clearAllMocks()
  })


  test('Debe render correct', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Pedro')
  })

  test('Debe de llamar logout y el usar history ', () => {

    wrapper.find('button').prop('onClick')()


    //Evaluar si dispatch fue llamada y con qué argumentos
    expect(contextValues.dispatch).toHaveBeenCalledWith({
      type: types.logout
    })


    expect(historyMock.replace).toHaveBeenCalledWith('/login')


  })



})
