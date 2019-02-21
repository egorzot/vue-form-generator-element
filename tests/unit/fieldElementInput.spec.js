import { mount, createLocalVue } from "@vue/test-utils";
import ElementUI, { Form, Input } from "element-ui";
import fieldInput from "@/fields/fieldElementInput.vue";

const localVue = createLocalVue();
localVue.use(ElementUI);

describe("fieldElementInput", () => {
  test("Common props.", () => {
    const wrapper = mount(fieldInput, {
      localVue,
      parentComponent: Form,
      provide: {
        elForm: () => Form
      },
      propsData: {
        schema: {
          inputType: "number",
          disabled: true,
          required: true,
          placeholder: "Input number example",
          inputName: "custom_element_name",
          id: "custom_element_id",
          elementLabel: "Input label example",
          alt: "Input alt",
          readonly: true,
          clearable: true
        }
      }
    });

    const elInput = wrapper.find(Input);

    expect(elInput.props("disabled")).toBeTruthy();
    expect(elInput.props("readonly")).toBeTruthy();
    expect(elInput.props("clearable")).toBeTruthy();
    expect(elInput.props("type")).toEqual("number");

    const inputHtml = wrapper.find("input").html();

    expect(
      inputHtml.includes('placeholder="Input number example"')
    ).toBeTruthy();
    expect(inputHtml.includes('name="custom_element_name"')).toBeTruthy();
    expect(inputHtml.includes('id="custom_element_id"')).toBeTruthy();
    expect(inputHtml.includes('required="required"')).toBeTruthy();
    expect(inputHtml.includes('disabled="disabled"')).toBeTruthy();
    expect(inputHtml.includes('alt="Input alt"')).toBeTruthy();
    expect(inputHtml.includes('readonly="readonly"')).toBeTruthy();

    const labelHtml = wrapper.find("label").html();

    expect(
      labelHtml.includes(
        '<label class="el-form-item__label">Input label example</label>'
      )
    ).toBeTruthy();
  });
  test("Text type.", () => {
    const wrapper = mount(fieldInput, {
      localVue,
      parentComponent: Form,
      provide: {
        elForm: () => Form
      },
      propsData: {
        schema: {
          inputType: "text",
          minlength: 10,
          maxlength: 20
        }
      }
    });
    expect(wrapper.find(fieldInput).props("schema").inputType).toBe("text");

    const inputHtml = wrapper.find("input").html();
    expect(inputHtml.includes('<input type="text"')).toBeTruthy();
    expect(inputHtml.includes('minlength="10"')).toBeTruthy();
    expect(inputHtml.includes('maxlength="20"')).toBeTruthy();
  });
  test("Number type.", () => {
    const wrapper = mount(fieldInput, {
      localVue,
      parentComponent: Form,
      provide: {
        elForm: () => Form
      },
      propsData: {
        schema: {
          inputType: "number",
          step: 0.1,
          min: 0,
          max: 10
        }
      }
    });
    expect(wrapper.find(fieldInput).props("schema").inputType).toBe("number");

    const inputHtml = wrapper.find("input").html();
    expect(inputHtml.includes('<input type="number"')).toBeTruthy();
    expect(inputHtml.includes('step="0.1"')).toBeTruthy();
    expect(inputHtml.includes('min="0"')).toBeTruthy();
    expect(inputHtml.includes('max="10"')).toBeTruthy();
  });
});
