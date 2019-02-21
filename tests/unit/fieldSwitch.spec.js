import { mount, createLocalVue } from "@vue/test-utils";
import ElementUI, { Form, Switch } from "element-ui";
import fieldSwitch from "@/fields/fieldElementSwitch.vue";

const localVue = createLocalVue();
localVue.use(ElementUI);

describe("fieldElementSwitch", () => {
  test("Switch props.", () => {
    const wrapper = mount(fieldSwitch, {
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
          elementLabel: "Switch label example",
          valueOn: "foo",
          valueOff: "bar",
          colorOn: "#fff",
          colorOff: "#ooo",
          textOn: "On",
          textOff: "Off",
          width: 50,
          default: "foo"
        }
      }
    });

    const elSwitch = wrapper.find(Switch);
    // const fieldSwitch1 = wrapper.find(fieldSwitch);
    // console.log(fieldSwitch1.props());

    expect(elSwitch.props("disabled")).toBeTruthy();
    expect(elSwitch.props("name")).toEqual("custom_element_name");
    expect(elSwitch.props("id")).toEqual("custom_element_id");
    expect(elSwitch.props("activeValue")).toEqual("foo");
    expect(elSwitch.props("inactiveValue")).toEqual("bar");
    expect(elSwitch.props("activeColor")).toEqual("#fff");
    expect(elSwitch.props("inactiveColor")).toEqual("#ooo");
    expect(elSwitch.props("activeText")).toEqual("On");
    expect(elSwitch.props("inactiveText")).toEqual("Off");
    expect(elSwitch.props("width")).toEqual(50);

    const labelHtml = wrapper.find("label").html();

    expect(
      labelHtml.includes(
        '<label class="el-form-item__label">Switch label example</label>'
      )
    ).toBeTruthy();
  });
});
