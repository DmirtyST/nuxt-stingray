import {maxLength,helpers,required,minLength,email} from '@vuelidate/validators'
const validEmail = helpers.regex(/^([a-z0-9_.+-]+)@([a-z0-9-]+\.)+([a-z]{2,6})$/gm)
const validNumber = helpers.regex(/^(\d{3}[-\s]?\d{2}[-\s]?\d{2})$/gm)
const endsWithRu = (value) => {
  if (!value) return true
  return !value.endsWith('.ru')
}
export const rules = computed(() => ({
    name: {
        required:helpers.withMessage('Обязательно для заполнения',required),
        maxLength: helpers.withMessage('validator.name.maxLength',maxLength(15)),
        minLength: helpers.withMessage('validator.name.minLength',minLength(5)),
      },

      email:{
        required:helpers.withMessage('Обязательно для заполнения',required),
        regex:helpers.withMessage('Введите корректный email',validEmail),
        notRussian: helpers.withMessage('Русский военнык корабль иди на ху....', endsWithRu),
        }

}))