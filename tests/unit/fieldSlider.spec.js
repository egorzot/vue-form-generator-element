import { mount, createLocalVue } from "@vue/test-utils";
import ElementUI, { Form, Slider } from "element-ui";
import fieldSlider from "@/fields/fieldElementSlider.vue";

const localVue = createLocalVue();
localVue.use(ElementUI);

describe("fieldSlider", () => {
  test("Props", () => {
    const wrapper = mount(fieldSlider, {
      localVue,
      parentComponent: Form,
      provide: {
        elForm: () => Form
      },
      propsData: {
        schema: {
          elementLabel: "Slider example",
          visible: true,
          disabled: false,
          min: 10,
          max: 77,
          step: 5,
          debounce: 500,
          showInput: true,
          showInputControls: true,
          inputSize: "large",
          showStops: false,
          showTooltip: true,
          formatTooltip: function(v) {
            return v;
          },
          range: false
        }
      }
    });

    const elSlider = wrapper.find(Slider);
    expect(elSlider.props("disabled")).toBeFalsy();
    expect(elSlider.props("min")).toBe(10);
    expect(elSlider.props("max")).toBe(77);
    expect(elSlider.props("step")).toBe(5);
    expect(elSlider.props("debounce")).toBe(500);
    expect(elSlider.props("showInput")).toBeTruthy();
    expect(elSlider.props("inputSize")).toEqual("large");
    expect(elSlider.props("showStops")).toBeFalsy();
    expect(elSlider.props("showInputControls")).toBeTruthy();
    expect(elSlider.props("showTooltip")).toBeTruthy();
    expect(elSlider.props("range")).toBeFalsy();

    const labelHtml = wrapper.find("label").html();
    expect(
      labelHtml.includes(
        '<label class="el-form-item__label">Slider example</label>'
      )
    ).toBeTruthy();
  });
});
