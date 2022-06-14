import { mount } from '@vue/test-utils';
import AppVue from '../../src/App.vue';
import { createI18n } from 'vue-i18n';

describe('Navbar in App.vue', () => {
  const i18n = createI18n({
    fallbackLocale: 'en',
    locale: 'en',
    legacy: false,
    globalInjection: true,
    messages: {
      en: require('../../src/locales/en.json')
    }
  })
  it('The top navbar renders correctly', () => {
     const wrapper = mount(AppVue, {
        global: {
          plugins: [i18n]
      },
    })
    expect(wrapper.find('#navbarBrand').isVisible());
    expect(wrapper.find('#navbarBrand').text()).toBe("Pokemon Test Challenge");
    expect(wrapper.find('#navigationDropDown').isVisible());
    expect(wrapper.find('#navigationDropDown').text()).toBe("Navigation Type");
  })
  it('When user click on navigation type dropdown, it shows two options', async () => {
    const wrapper = mount(AppVue, {
        global: {
          plugins: [i18n]
      },
    })
    await wrapper.find('#navigationDropDown').trigger('click');

    expect(wrapper.find('#navigationDropDownMenu').isVisible());
    expect(wrapper.find('#loadMoreLink').isVisible());
    expect(wrapper.find('#loadMoreLink').text()).toBe("Load More");
    expect(wrapper.find('#paginationLink').isVisible());
    expect(wrapper.find('#paginationLink').text()).toBe("Pagination");
  })
})
