import { mount, createLocalVue } from "@vue/test-utils";
import ElementUI, { Form, Radio, RadioButton, RadioGroup } from "element-ui";
import fieldRadio from "@/fields/fieldElementRadio.vue";

const localVue = createLocalVue();
localVue.use(ElementUI);

describe("fieldRadio", () => {
  test("Radio", () => {
    const wrapper = mount(fieldRadio, {
      localVue,
      parentComponent: Form,
      provide: {
        elForm: () => Form
      },
      propsData: {
        schema: {
          elementLabel: "Radio example",
          inputName: "radio_name", //add name for colorPicker div
          visible: true,
          disabled: false,
          values: [{ name: "1", value: 1 }, { name: "2", value: 2 }],
          size: "medium", //size of the Radio, only works when border is true
          default: 2,
          border: true // only if radioType not button
        }
      }
    });

    const elRadio = wrapper.find(Radio);
    expect(elRadio.props("disabled")).toBeFalsy();
    expect(elRadio.props("name")).toEqual("radio_name");
    expect(elRadio.props("border")).toBeTruthy();
    expect(elRadio.props("size")).toEqual("medium");

    const labelHtml = wrapper.find("label").html();
    expect(
      labelHtml.includes(
        '<label class="el-form-item__label">Radio example</label>'
      )
    ).toBeTruthy();
  });
  test("RadioButton and RadioGroup with RadioType button", () => {
    const wrapper = mount(fieldRadio, {
      localVue,
      parentComponent: Form,
      provide: {
        elForm: () => Form
      },
      propsData: {
        schema: {
          values: [{ name: "1", value: 1 }, { name: "2", value: 2 }],
          radioType: "button", //'button' or other for default
          textColor: "#ffd700", //only if radioType is button
          fill: "#ff4500", //only if radioType is button
          disabled: true
        }
      }
    });

    const elRadioGroup = wrapper.find(RadioGroup);
    expect(elRadioGroup.props("textColor")).toEqual("#ffd700");
    expect(elRadioGroup.props("fill")).toEqual("#ff4500");

    const elRadiobutton = wrapper.find(RadioButton);
    expect(elRadiobutton.props("disabled")).toBeTruthy();
  });
});
