import { mount } from '@vue/test-utils';
import PokemonProfile from '../../src/components/cards/PokemonProfile.vue';
import { createI18n } from 'vue-i18n';
import { faker } from '@faker-js/faker';

describe('Pokemon Profile in App.vue', () => {
    const i18n = createI18n({
      fallbackLocale: 'en',
      locale: 'en',
      legacy: false,
      globalInjection: true,
      messages: {
          en: require('../../src/locales/en.json')
      }
  })
  it('Pokemon Profile card renders correctly', () => {
    const pokemonInfo = {
      id: faker.random.numeric(1),
      name: faker.name.firstName(),
      height: faker.random.numeric(2),
      weight: faker.random.numeric(2),
      image: faker.image.animals()
    }
    const wrapper = mount(PokemonProfile, {
        global: {
          plugins: [i18n]
      },
      data() {
        return {
          pokemonInfo,
          imageUrl: ""
        }
      }
    })
    expect(wrapper.find('#pokemonProfileCard').isVisible());
    expect(wrapper.find('#pokemonImage').isVisible());
    expect(wrapper.find('#pokemonNameTitle').isVisible());
    expect(wrapper.find('#pokemonNameTitle').text()).toBe(`${pokemonInfo.id}.${pokemonInfo.name}`);
    expect(wrapper.find('#pokemonWeight').isVisible());
    expect(wrapper.find('#pokemonWeight').text()).toBe(`Weight: ${pokemonInfo.weight}`);
    expect(wrapper.find('#pokemonHeight').isVisible());
    expect(wrapper.find('#pokemonHeight').text()).toBe(`Height: ${pokemonInfo.height}`);
  })
})
