import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Holding from '@/components/Holding.vue';

describe('Holding.vue', () => {
  let actions: any;
  let store: any;

  const localVue = createLocalVue();
  localVue.use(Vuex);

  beforeEach(() => {
    actions = {
      deleteHolding: jasmine.createSpy(),
    };
    store = new Vuex.Store({
      actions,
    });
  });
  it('Renders the provided details', () => {
    const expectedName = 'bitcoin';
    const expectedValue = 2.457;
    const expectedLocation = 'test1';
    const expectedUuid = 'test test test';

    const wrapper = shallow(Holding, {
      store,
      localVue,
      propsData: {
        name: expectedName,
        value: expectedValue,
        location: expectedLocation,
        uuid: expectedUuid
      },
    });
    expect(wrapper.find('[data-test-holding-name]').text()).toContain(expectedName);
    expect(wrapper.find('[data-test-holding-value]').text()).toContain('2.457');
    expect(wrapper.find('[data-test-holding-location]').text()).toContain(expectedLocation);
  });

  it('Deletes the holding when the delete button is pressed', () => {
    const expectedName = 'bitcoin';
    const expectedValue = 2.457;

    const wrapper = shallow(Holding, {
      store,
      localVue,
      propsData: {
        name: expectedName,
        value: expectedValue,
      },
    });
    wrapper.find('[data-test-delete-button]').trigger('click');
    expect(actions.deleteHolding).toHaveBeenCalled();
  });
});
