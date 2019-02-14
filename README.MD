**UNSTABLE NOW! Stable version coming soon**

Fields for [vue-form-generator](https://github.com/vue-generators/vue-form-generator) module with [Element css framework](http://element.eleme.io).

In development, not stable for now

Vue component example
```vue
<template>
    <div class='panel-body'>
        <form>
            <vue-form-generator :schema='schema' :model='model' :options="formOptions">
            </vue-form-generator>
        </form>
    </div>
</template>
<script>
    import { validators, component as VueFormGenerator } from 'vue-form-generator'
    import component from 'vue-form-generator-element'
    export default {
        components: { VueFormGenerator },
        data() {
            return {
                model: {
                    id: 1,
                    name: 'John Doe',
                    password: 'J0hnD03!x4',
                    skills: ['Javascript', 'VueJS'],
                    email: 'john.doe@gmail.com',
                    status: true,
                    type: '#90EE90',
                    fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                    dob: '10.04.2018 19:22:10',
                    sex: 'female'
                },
                schema: {
                    groups: [
                        {
                            legend: 'User Details',
                            fields: [
                              {
                                  type: 'elementCheckbox',
                                  text: 'Чекбокс element',
                                  model: "status",
                                  default: true
                              },
                              {
                                  type: 'elementRadio',
                                  text: 'Радио element',
                                  model: "type",
                                  values: [
                                      {name: "Deep Pink", value:"#FF1493"},
                                      {name: "Peach Puff", value:"#FFDAB9"},
                                      {name: "Dark Orange", value:"#FF8C00"},
                                      {name: "Light Green", value:"#90EE90"}
                                  ]
                              },
                              {
                                type: 'elementInput',
                                inputType: 'text',
                                label: 'ID (disabled text field)',
                                model: 'id',
                                readonly: true,
                                disabled: true
                              },
                              {
                                type: 'elementInput',
                                inputType: 'text',
                                label: 'Name',
                                model: 'name',
                                id: 'user_name',
                                placeholder: 'Your name',
                                featured: true,
                                required: true
                              },
                              {
                                type: 'elementInput',
                                inputType: 'email',
                                label: 'E-mail',
                                model: 'email',
                                placeholder: 'User e-mail address'
                              },
                              {
                                type: 'elementInput',
                                inputType: 'password',
                                label: 'Password',
                                model: 'password',
                                min: 6,
                                required: true,
                                validator: validators.string
                              },
                              {
                                type: 'elementSelect',
                                label: 'skills',
                                model: 'skills',
                                multiple: true,
                                filterable: true,
                                values : function() {
                                  return [
                                    { id: "Javascript", name: "Джаваскрипт" },
                                    { id: "VueJS", name: "Вью" },
                                    { id: "CSS3", name: "КСС" },
                                    { id: "HTML5", name: "Хтмл" },
                                  ]
                                },
                              },
                              {
                                type: "elementTextArea",
                                label: "Biography",
                                model: "bio",
                                max: 500,
                                placeholder: "User's biography",
                                rows: 4,
                                validator: validators.string
                              },
                              {
                                type: "elementUpload",
                                limit: 2,
                                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                                multiple: true,
                                tip: "jpg/png files with a size less than 500kb test",
                                placeholder: "Загрузить",
                                drag:true
                              }, {
                                type: "elementDateTimePicker",
                                label: "DOB",
                                model: "dob",
                                required: true,
                                placeholder: "User's birth of date",
                                min: "1900-01-01",
                                max: "2016-01-01",
                                validator: validators.date,
                                format: "dd.MM.yyyy HH:mm:ss"
                              },
                              {
                                type: "elementSwitch",
                                label: "Sex",
                                model: "sex",
                                textOn: "Female",
                                textOff: "Male",
                                valueOn: "female",
                                valueOff: "male"
                              }
                            ]
                        }
                    ],
                    formOptions: {
                        validateAfterLoad: true,
                        validateAfterChanged: true,
                        fieldIdPrefix: 'user-'
                    }
                }
            }
        }
    }
</script>
```
