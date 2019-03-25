import { config } from "@vue/test-utils";
import { mount, createLocalVue } from "@vue/test-utils";
import ElementUI, { Form, Select } from "element-ui";
import fieldSelect from "@/fields/fieldElementSelect.vue";

config.stubs.transition = false;
const localVue = createLocalVue();
localVue.use(ElementUI);

describe("fieldElementSelect.vue", () => {
  test("Select multiple props", () => {
    const wrapper = mount(fieldSelect, {
      localVue,
      parentComponent: Form,
      provide: {
        elForm: () => Form
      },
      propsData: {
        schema: {
          values: [{ name: "1", id: 1 }, { name: "2", id: 2 }],
          multiple: true,
          reserveKeyword: true,
          collapseTags: true,
          multipleLimit: 3,
          default: 2
        }
      }
    });

    const elSelect = wrapper.find(Select);
    expect(elSelect.props("multiple")).toBeTruthy();
    expect(elSelect.props("reserveKeyword")).toBeTruthy();
    expect(elSelect.props("multipleLimit")).toBe(3);
    expect(elSelect.props("collapseTags")).toBeTruthy();
  });
});
