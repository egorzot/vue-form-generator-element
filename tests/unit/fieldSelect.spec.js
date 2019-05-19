import { config } from "@vue/test-utils";
import { mount, createLocalVue } from "@vue/test-utils";
import ElementUI, { Form, Select } from "element-ui";
import fieldSelect from "@/fields/fieldElementSelect.vue";

config.stubs.transition = false;
const localVue = createLocalVue();
localVue.use(ElementUI);
//todo: протетсировать remote, сделать чтобы тествы запускались все вместе
describe("fieldElementSelect.vue", () => {
  test("Select props", () => {
    const wrapper = mount(fieldSelect, {
      localVue,
      parentComponent: Form,
      provide: {
        elForm: () => Form
      },
      propsData: {
        schema: {
          elementLabel: "Select example",
          placeholder: "Select example",
          id: "select_id",
          inputName: "select_name",
          visible: true,
          disabled: false,
          valueKey: "value",
          values: [{ name: "1", id: 1 }, { name: "2", id: 2 }],
          size: "large",
          filterable: false,
          multiple: false,
          clearable: true,
          autocomplete: "off",
          allowCreate: false,
          defaultFirstOption: false,
          popperAppendToBody: false,
          automaticDropdown: false,
          reserveKeyword: false
        }
      }
    });

    const elSelect = wrapper.find(Select);
    expect(elSelect.props("disabled")).toBeFalsy();
    expect(elSelect.props("name")).toEqual("select_name");
    expect(elSelect.props("id")).toEqual("select_id");
    expect(elSelect.props("valueKey")).toEqual("value");
    expect(elSelect.props("size")).toEqual("large");
    expect(elSelect.props("filterable")).toBeFalsy();
    expect(elSelect.props("multiple")).toBeFalsy();
    expect(elSelect.props("placeholder")).toEqual("Select example");
    expect(elSelect.props("autocomplete")).toEqual("off");
    expect(elSelect.props("allowCreate")).toBeFalsy();
    expect(elSelect.props("popperAppendToBody")).toBeFalsy();
    expect(elSelect.props("automaticDropdown")).toBeFalsy();
    expect(elSelect.props("reserveKeyword")).toBeFalsy();

    const labelHtml = wrapper.find("label").html();
    expect(
      labelHtml.includes(
        '<label class="el-form-item__label">Select example</label>'
      )
    ).toBeTruthy();
  });
});
