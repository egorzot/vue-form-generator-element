import { mount, createLocalVue } from "@vue/test-utils";
import ElementUI, { Form, Input } from "element-ui";
import fieldTextArea from "@/fields/fieldElementTextArea.vue";

const localVue = createLocalVue();
localVue.use(ElementUI);

describe("fieldElementSwitch", () => {
  test("Switch props.", () => {
    const wrapper = mount(fieldTextArea, {
      localVue,
      parentComponent: Form,
      provide: {
        elForm: () => Form
      },
      propsData: {
        schema: {
          type: "elementTextArea",
          elementLabel: "Textarea example",
          placeholder: "Textarea example",
          id: "textarea_id", //not working with Slider
          inputName: "textarea_name", //not working with Slider
          visible: true,
          disabled: false,
          autosize: false,
          rows: 5
        }
      }
    });

    const elText = wrapper.find(Input);

    expect(elText.props("disabled")).toBeFalsy();
    expect(elText.props("type")).toEqual("textarea");
    expect(elText.props("autosize")).toBeFalsy();

    const labelHtml = wrapper.find("label").html();

    expect(
      labelHtml.includes(
        '<label class="el-form-item__label">Textarea example</label>'
      )
    ).toBeTruthy();

    const textArea = wrapper.find("textarea");
    expect(textArea.element.getAttribute("name")).toEqual("textarea_name");
    expect(textArea.element.getAttribute("id")).toEqual("textarea_id");
    expect(textArea.element.getAttribute("placeholder")).toEqual(
      "Textarea example"
    );
    expect(textArea.element.getAttribute("rows")).toBe("5");
  });
});
