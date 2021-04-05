import { mount } from "enzyme"
import { MemoryRouter, Route, useLocation } from "react-router-dom"
import SearchScreen from "../../../components/search/SearchScreen"

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn()
}));

describe('Test in SearchScreen', () => {

  test('Debe mostrar correctamente con valores por defecto', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search Hero')

  })

  test('Debe mostrar batman y el input con el valor del queryString', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )

    expect(wrapper.find('input').prop('value')).toBe('batman')
    //se ejecuto un nuevo snapshot al aparecer la card de batman
    expect(wrapper).toMatchSnapshot()

  })

  test('debe de mostrar error si no se encuentra el Hero!', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )

    expect(wrapper.find('.alert-danger').exists()).toBe(true)

  })

  test('debe llamar el push del history', () => {
    const hero = 'superman';
    const query = `q=${hero}`;
    const history = {
      push: jest.fn()
    }

    useLocation.mockReturnValueOnce({ search: query });

    const wrapper = mount(
      <MemoryRouter>
        <SearchScreen history={history} />
      </MemoryRouter>
    );

    wrapper.find('form').prop('onSubmit')({ preventDefault() { } });

    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find('input').prop('value')).toBe(hero);
    // expect(history.push).toHaveBeenCalledWith(hero)
    expect(history.push).toHaveBeenCalled();
    expect(history.push).toHaveBeenCalledTimes();





  })





})
