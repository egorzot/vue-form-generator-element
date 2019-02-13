import { mount, createLocalVue } from "@vue/test-utils";
import ElementUI, { Form } from "element-ui";
import Component from "../../src/fields/fieldElementInput.vue";

const localVue = createLocalVue();
localVue.use(ElementUI);

describe("fieldElementInput", () => {
  test("Common props.", () => {
    const wrapper = mount(Component, {
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
        }
      }
    });

    const html = wrapper.html();
    // console.log(html)
    expect(html.includes('placeholder="Input number example"')).toBeTruthy();
    expect(html.includes('name="custom_element_name"')).toBeTruthy();
    expect(html.includes('id="custom_element_id"')).toBeTruthy();
    expect(html.includes('required="required"')).toBeTruthy();
    expect(html.includes('disabled="disabled"')).toBeTruthy();
    expect(html.includes('alt="Input alt"')).toBeTruthy();
    expect(html.includes('readonly="readonly"')).toBeTruthy();
    expect(
      html.includes(
        '<label class="el-form-item__label">Input label example</label>'
      )
    ).toBeTruthy();
  });
  test("Number type.", () => {
    const wrapper = mount(Component, {
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
    expect(wrapper.vm.schema.inputType).toBe("text");
    const html = wrapper.html();
    expect(html.includes('<input type="text"')).toBeTruthy();
    expect(html.includes('minlength="10"')).toBeTruthy();
    expect(html.includes('maxlength="20"')).toBeTruthy();
  });
  test("Text type.", () => {
    const wrapper = mount(Component, {
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
    expect(wrapper.vm.schema.inputType).toBe("number");
    const html = wrapper.html();
    expect(html.includes('<input type="number"')).toBeTruthy();
    expect(html.includes('step="0.1"')).toBeTruthy();
    expect(html.includes('min="0"')).toBeTruthy();
    expect(html.includes('max="10"')).toBeTruthy();
  });
});
