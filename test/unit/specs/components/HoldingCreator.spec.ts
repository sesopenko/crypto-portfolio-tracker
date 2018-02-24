import { shallow , createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import HoldingCreator from '@/components/HoldingCreator.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('HelloWorld.vue', () => {
  let actions: any;
  let store: any;

  beforeEach(() => {
    actions = {
      addHolding: jasmine.createSpy(),
    };
    store = new Vuex.Store({
      actions,
    });
  });


  it('renders props.msg when passed', () => {
    const expectedName = 'bitcoin';
    const expectedValue = 2.457;
    const wrapper = shallow(HoldingCreator, {
      store,
      localVue,
    });
    wrapper.setData({
        code: expectedName,
        value: expectedValue.toString(),
    });
    wrapper.find('[data-test-add]').trigger('click');
    expect(actions.addHolding).toHaveBeenCalled();
  });
});
