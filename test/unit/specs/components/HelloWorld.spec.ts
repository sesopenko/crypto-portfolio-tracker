import Vue from 'vue';
import { shallow } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(HelloWorld);
    expect(wrapper.text()).toContain('Essential Links');
  });
});
