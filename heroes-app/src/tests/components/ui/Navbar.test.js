import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router"
import AuthContext from "../../../auth/AuthContext"
import Navbar from "../../../components/ui/Navbar"
import types from "../../../types/types"

describe('Test in <Navbar/>', () => {

  //here create history mock, this is the way.
  //also create values for defaults. This values are required by test.
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
      name: 'Lola',
      logged: true,
    }
  }

  const wrapper = mount(
    <AuthContext.Provider value={contextValues}>
      {/* here MemoryRouter because used link inside */}
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>

  )

  //reset of mocks
  afterEach(() => {
    jest.clearAllMocks()
  })


  test('Debe render correct', () => {
    //snapshot
    expect(wrapper).toMatchSnapshot();
    //toBe Pedro as object simulated above 
    expect(wrapper.find('.text-info').text().trim()).toBe('Lola')
  })

  test('Debe de llamar logout y el usar history ', () => {

    wrapper.find('button').prop('onClick')()


    //Evaluar si dispatch fue llamada y con qué argumentos
    expect(contextValues.dispatch).toHaveBeenCalledWith({
      type: types.logout
    })

    //here compared replace with history.replace in <Navbar/>
    expect(historyMock.replace).toHaveBeenCalledWith('/login')


  })



})
