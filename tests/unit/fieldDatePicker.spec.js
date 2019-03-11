import { mount, createLocalVue } from "@vue/test-utils";
import ElementUI, { Form, DatePicker } from "element-ui";
import fieldDatePicker from "@/fields/fieldElementDatePicker.vue";

const localVue = createLocalVue();
localVue.use(ElementUI);

describe("fieldElementDatePicker", () => {
  test("Date picker props.", () => {
    const wrapper = mount(fieldDatePicker, {
      localVue,
      parentComponent: Form,
      provide: {
        elForm: () => Form
      },
      propsData: {
        schema: {
          disabled: false,
          required: true,
          readonly: false,
          inputName: "custom_element_name",
          elementLabel: "DatePicker label example",
          editable: false,
          clearable: false,
          firstDayOfWeek: 1,
          placeholder: "DateTime picker example",
          size: "large",
          format: "dd.MM.yyyy HH:mm:ss",
          align: "left",
          dateType: "date",
          default: "December 17, 1995 03:24:00",
          defaultValue: "1999-02-12T12:46:00"
        }
      }
    });

    const elDatePicker = wrapper.find(DatePicker);

    expect(elDatePicker.props("disabled")).toBeFalsy();
    expect(elDatePicker.props("editable")).toBeFalsy();
    expect(elDatePicker.props("readonly")).toBeFalsy();
    expect(elDatePicker.props("clearable")).toBeFalsy();
    expect(elDatePicker.props("name")).toEqual("custom_element_name");

    expect(elDatePicker.props("placeholder")).toEqual(
      "DateTime picker example"
    );
    expect(elDatePicker.props("size")).toEqual("large");
    expect(
      elDatePicker.props("pickerOptions").firstDayOfWeek === 1
    ).toBeTruthy();
    expect(elDatePicker.props("format")).toEqual("dd.MM.yyyy HH:mm:ss");
    expect(elDatePicker.props("align")).toEqual("left");
    expect(elDatePicker.props("type")).toEqual("date");
    expect(elDatePicker.props("defaultValue")).toEqual("1999-02-12T12:46:00");

    const labelHtml = wrapper.find("label").html();

    expect(
      labelHtml.includes(
        '<label class="el-form-item__label">DatePicker label example</label>'
      )
    ).toBeTruthy();
  });
});
