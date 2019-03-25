import { mount, createLocalVue } from "@vue/test-utils";
import ElementUI, { Form, Upload } from "element-ui";
import fieldUpload from "@/fields/fieldElementUpload.vue";

const localVue = createLocalVue();
localVue.use(ElementUI);

describe("fieldElementUpload", () => {
  test("Upload props.", () => {
    const wrapper = mount(fieldUpload, {
      localVue,
      parentComponent: Form,
      provide: {
        elForm: () => Form
      },
      propsData: {
        schema: {
          action: "https://www.mocky.io/v2/5185415ba171ea3a00704eed",
          visible: true,
          disabled: false,
          onPreview: function(file) {
            console.log(file);
          },
          onRemove: function(file, fileList) {
            console.log(file);
            console.log(fileList);
          },
          onSuccess: function(response, file, fileList) {
            console.log(response);
            console.log(file);
            console.log(fileList);
          },
          onError: function(err, file, fileList) {
            console.log(err);
            console.log(file);
            console.log(fileList);
          },
          onProgress: function(event, file, fileList) {
            console.log(event);
            console.log(file);
            console.log(fileList);
          },
          onChange: function(file, fileList) {
            console.log(file);
            console.log(fileList);
          },
          beforeUpload: function(file) {
            console.log(file);
          },
          beforeRemove: function(file, fileList) {
            console.log(file);
            console.log(fileList);
          },
          onExceed: function(file, fileList) {
            console.log(file);
            console.log(fileList);
          },
          thumbnailMode: true,
          fileList: [
            {
              name: "linux.jpg",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg"
            }
          ],
          listType: "text", //picture,picture-card
          drag: false,
          multiple: true,
          limit: 3,
          autoUpload: true,
          elementLabel: "Upload example",
          placeholder: "Click to upload",
          inputName: "upload_name"
        }
      }
    });

    const elUpload = wrapper.find(Upload);

    expect(elUpload.props("disabled")).toBeFalsy();
    expect(elUpload.props("action")).toEqual(
      "https://www.mocky.io/v2/5185415ba171ea3a00704eed"
    );
    expect(elUpload.props("listType")).toEqual("text");
    expect(elUpload.props("drag")).toBeFalsy();
    expect(elUpload.props("multiple")).toBeTruthy();
    expect(elUpload.props("limit")).toEqual(3);
    expect(elUpload.props("autoUpload")).toBeTruthy();
    const fileListItem = elUpload.props("fileList")[0];
    expect(fileListItem.name).toEqual("linux.jpg");
    expect(fileListItem.url).toEqual(
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg"
    );
    expect(fileListItem.status).toEqual("success");

    const input = wrapper.find("input[name='upload_name']");
    expect(input.element.getAttribute("type")).toEqual("file");

    const span = wrapper.find("span");
    expect(span.text()).toEqual("Click to upload");

    const labelHtml = wrapper.find("label").html();
    expect(
      labelHtml.includes(
        '<label class="el-form-item__label">Upload example</label>'
      )
    ).toBeTruthy();
  });
});
