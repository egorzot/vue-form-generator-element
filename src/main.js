import fieldElementCheckbox from "../src/fields/fieldElementCheckbox.vue";
import fieldElementRadio from "../src/fields/fieldElementRadio.vue";
import fieldElementInput from "../src/fields/fieldElementInput.vue";
import fieldElementSelect from "../src/fields/fieldElementSelect.vue";
import fieldElementTextArea from "../src/fields/fieldElementTextArea.vue";
import fieldElementUpload from "../src/fields/fieldElementUpload.vue";
import fieldElementDateTimePicker from "../src/fields/fieldElementDateTimePicker.vue";
import fieldElementSwitch from "../src/fields/fieldElementSwitch.vue";
import fieldElementColorPicker from "../src/fields/fieldElementColorPicker.vue";
import fieldElementSlider from "../src/fields/fieldElementSlider.vue";


export default {
  install(Vue) {
    Vue.component("fieldElementCheckbox", fieldElementCheckbox);
    Vue.component("fieldElementRadio", fieldElementRadio);
    Vue.component("fieldElementInput", fieldElementInput);
    Vue.component("fieldElementSelect", fieldElementSelect);
    Vue.component("fieldElementTextArea", fieldElementTextArea);
    Vue.component("fieldElementUpload", fieldElementUpload);
    Vue.component("fieldElementDateTimePicker", fieldElementDateTimePicker);
    Vue.component("fieldElementSwitch", fieldElementSwitch);
    Vue.component("fieldElementColorPicker", fieldElementColorPicker);
    Vue.component("fieldElementSlider", fieldElementSlider);
  }
};
