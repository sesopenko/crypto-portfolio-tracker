import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import HoldingList from '@/components/HoldingList.vue';

// Child components
import Holding from '@/components/Holding.vue';

describe('HoldingList.vue', () => {
  let actions: any;
  let store: any;

  const localVue = createLocalVue();
  localVue.use(Vuex);

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        holdings: [
          {
            name: 'BITCOIN',
            value: 1,
          },
          {
            name: 'ethereum',
            value: 2,
          },
        ],
        tickers: [],
      },
    });
  });

  it('Renders a property qty of holdings', () => {
    const expectedName = 'bitcoin';
    const expectedValue = 2.457;

    const wrapper = shallow(HoldingList, {
      store,
      localVue,
    });
    expect(wrapper.findAll(Holding).length).toBe(2);
  });
});
