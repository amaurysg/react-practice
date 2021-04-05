import { mount } from "enzyme"
import { Router } from "react-router"
import AuthContext from "../../../auth/AuthContext"
import Login from "../../../components/login/Login"
import types from "../../../types/types"

describe('Test in Login', () => {

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
      logged: false
    }
  }


  const wrapper = mount(
    <AuthContext.Provider value={contextValues}>
      <Router history={historyMock}>
        <Login />
      </Router>
    </AuthContext.Provider>
  )

  //reset of mocks
  // afterEach(() => {
  //   jest.clearAllMocks()
  // })


  test('Debe hacer render correct', () => {

    expect(wrapper).toMatchSnapshot()


  })
  test('Debe de realizar el dispatch y navegacion', () => {

    const handleClick = wrapper.find('button').prop('onClick')
    handleClick()

    expect(contextValues.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: 'Amaury'
      }

    })

    expect(historyMock.replace).toHaveBeenCalledWith('/')
    localStorage.setItem('lastPathname', '/dc')
    // handleClick()
    // expect(historyMock.replace).toHaveBeenCalledWith('/dc')
    // expect(historyMock.replace).toHaveBeenCalledWith('/dc')


  })





})
