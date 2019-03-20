import { mount, createLocalVue } from "@vue/test-utils";
import ElementUI, { Form, ColorPicker } from "element-ui";
import fieldColorPicker from "@/fields/fieldElementColorPicker.vue";

const localVue = createLocalVue();
localVue.use(ElementUI);

describe("fieldColorPicker", () => {
  test("ColorPicker props", () => {
    const wrapper = mount(fieldColorPicker, {
      localVue,
      parentComponent: Form,
      provide: {
        elForm: () => Form
      },
      propsData: {
        schema: {
          elementLabel: "ColorPicker example",
          id: "color_picker_id", //add id for colorPicker div
          inputName: "color_picker_name", //add name for colorPicker div
          visible: true,
          disabled: false,
          size: "medium",
          showAlpha: false,
          colorFormat: "hex",
          popperClass: "test",
          predefine: [
            "#ff4500",
            "#ff8c00",
            "#ffd700",
            "#90ee90",
            "#00ced1",
            "#1e90ff",
            "#c71585"
          ]
        }
      }
    });

    const elColorPicker = wrapper.find(ColorPicker);
    expect(elColorPicker.props("disabled")).toBeFalsy();
    // expect(elColorPicker.props("name")).toEqual("color_picker_name");
    // expect(elColorPicker.props("id")).toEqual("color_picker_id");
    expect(elColorPicker.props("size")).toEqual("medium");
    expect(elColorPicker.props("showAlpha")).toBeFalsy();
    expect(elColorPicker.props("colorFormat")).toEqual("hex");
    expect(elColorPicker.props("popperClass")).toEqual("test");
    expect(elColorPicker.props("predefine")).toEqual([
      "#ff4500",
      "#ff8c00",
      "#ffd700",
      "#90ee90",
      "#00ced1",
      "#1e90ff",
      "#c71585"
    ]);

    const labelHtml = wrapper.find("label").html();

    expect(
      labelHtml.includes(
        '<label class="el-form-item__label">ColorPicker example</label>'
      )
    ).toBeTruthy();

    const pickerDiv = wrapper.find("#color_picker_id");
    expect(pickerDiv.element.getAttribute("name")).toEqual("color_picker_name");
    expect(pickerDiv.element.getAttribute("id")).toEqual("color_picker_id");
  });
});
