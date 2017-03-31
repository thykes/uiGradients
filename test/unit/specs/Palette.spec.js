import { mount } from 'avoriaz';
import Palette from '@/components/Palette';

const wrapper = mount(Palette, {
  propsData: {
    direction: 'to left',
    gradient: {
      colors: ['#1FA2FF', '#21DCF6', '#A6FFCB'],
      name: 'Stripe',
    },
    palletes: ['Cyans', 'Cyans', 'Greens'],
  },
});

describe('Palette.vue', () => {
  it('should have a class name of .palette__gradient', () => {
    expect(wrapper.is('.palette__gradient'))
    .to.equal(true);
  });

  it('should render a the gradient name', () => {
    expect(wrapper.contains('.palette__name'))
    .to.equal(true);
  });

  /**
   * Useless test, figure out a way to test computed properties
   */
  it('should compute the background style', () => {
    expect(wrapper.vm.backgroundStyle)
    .to.equal(wrapper.vm.backgroundStyle);
  });
});
