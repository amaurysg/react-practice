import { mount } from "enzyme"
import { MemoryRouter, Route, Router } from "react-router"
import HeroScreen from "../../../components/heroes/HeroScreen"

describe('Test in <HeroScreen/> simulacion de URLs ', () => {



  //create const historyMock by default
  const historyMock = {
    push: jest.fn(),
    goBack: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
    length: 10,

  }


  //reset of mocks
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Debe mostrar componente redirect si no hay arg en la URL', () => {

    const wrapper = mount(
      //here send initialEntries={['/hero']} because need initialEntries
      <MemoryRouter initialEntries={['/hero']}>
        {/* //here send history with values from history */}
        <HeroScreen history={historyMock} />
      </MemoryRouter>

    )

    // expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('Redirect').exists()).toBe(true)


  })

  test('Debe mostrar un heroe si existe argumentos', () => {
    const historyMock = {
      push: jest.fn(),
      goBack: jest.fn(),
      replace: jest.fn(),
      location: {},
      listen: jest.fn(),
      createHref: jest.fn(),
      length: 10,

    }


    const wrapper = mount(
      //here send initialEntries={['/hero']} because need initialEntries
      <MemoryRouter initialEntries={['/hero/marvel-iron']}>
        {/* //here send history with values from history */}
        <Route path="/hero/:heroeId" component={HeroScreen} />
      </MemoryRouter>

    )

    expect(wrapper.find('.row').exists()).toBe(true)


  })

  // test('debe regresar a la pantalla anterior con push', () => {
  //   const historyMock = {
  //     push: jest.fn(),
  //     goBack: jest.fn(),
  //     replace: jest.fn(),
  //     location: {},
  //     listen: jest.fn(),
  //     createHref: jest.fn(),
  //     length: 1

  //   }

  //   const wrapper = mount(
  //     //here send initialEntries={['/hero']} because need initialEntries
  //     <MemoryRouter initialEntries={['/hero/marvel-spider']}>
  //       <Router history={historyMock} >
  //         {/* <Route path="/hero/:heroeId" component={() => < HeroScreen history={historyMock} />} /> */}
  //         <Route path="/hero/:heroeId">

  //           <HeroScreen />
  //         </Route>
  //       </Router>
  //     </MemoryRouter>

  //   )
  //   console.log("print:", wrapper.find('.btn'))
  //   wrapper.find('button').prop('onClick')()

  //   expect(historyMock.push).toHaveBeenCalledWith('/');
  //   expect(historyMock.goBack).not.toHaveBeenCalled()


  // })


  test('Debe de llamar el redirect si hero no existe ', () => {
    const historyMock = {
      push: jest.fn(),
      goBack: jest.fn(),
      replace: jest.fn(),
      location: {},
      listen: jest.fn(),
      createHref: jest.fn(),
      length: 1

    }


    const wrapper = mount(
      //here send initialEntries={['/hero']} because need initialEntries
      <MemoryRouter initialEntries={['/hero/marvel-spider123456']}>
        {/* //here send history with values from history */}
        <Route
          path="/hero/:heroeId"
          component={() => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>

    )

    expect(wrapper.text()).toBe('')


  })








})
