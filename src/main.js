import fieldElementCheckbox from "@/fields/fieldElementCheckbox.vue";
import fieldElementRadio from "@/fields/fieldElementRadio.vue";
import fieldElementInput from "@/fields/fieldElementInput.vue";
import fieldElementSelect from "@/fields/fieldElementSelect.vue";
import fieldElementTextArea from "@/fields/fieldElementTextArea.vue";
import fieldElementUpload from "@/fields/fieldElementUpload.vue";
import fieldElementDateTimePicker from "@/fields/fieldElementDateTimePicker.vue";
import fieldElementSwitch from "@/fields/fieldElementSwitch.vue";
import fieldElementColorPicker from "@/fields/fieldElementColorPicker.vue";
import fieldElementSlider from "@/fields/fieldElementSlider.vue";


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
