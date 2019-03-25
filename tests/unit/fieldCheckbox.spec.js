import { mount, createLocalVue } from "@vue/test-utils";
import ElementUI, { Form, Checkbox } from "element-ui";
import fieldCheckbox from "@/fields/fieldElementCheckbox.vue";

const localVue = createLocalVue();
localVue.use(ElementUI);

describe("fieldElementCheckbox", () => {
  test("Checkbox props", () => {
    const wrapper = mount(fieldCheckbox, {
      localVue,
      parentComponent: Form,
      provide: {
        elForm: () => Form
      },
      propsData: {
        schema: {
          disabled: true,
          required: true,
          inputName: "custom_element_name",
          id: "custom_element_id",
          elementLabel: "Checkbox label example",
          checkedValue: "555",
          uncheckedValue: "777",
          checked: false,
          default: "777"
        }
      }
    });

    const elCheckbox = wrapper.find(Checkbox);
    expect(elCheckbox.props("disabled")).toBeTruthy();
    expect(elCheckbox.props("name")).toEqual("custom_element_name");
    expect(elCheckbox.props("id")).toEqual("custom_element_id");
    expect(elCheckbox.props("trueLabel")).toEqual("555");
    expect(elCheckbox.props("falseLabel")).toEqual("777");
    expect(elCheckbox.props("checked")).toEqual(false);

    const labelHtml = wrapper.find("label").html();

    expect(
      labelHtml.includes(
        '<label class="el-form-item__label">Checkbox label example</label>'
      )
    ).toBeTruthy();
  });
});
