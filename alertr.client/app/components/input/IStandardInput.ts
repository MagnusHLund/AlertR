import { UseControllerProps } from './../../../node_modules/react-hook-form/dist/types/controller.d'
import { Control } from 'react-hook-form'
import { FieldValues } from './../../../node_modules/react-hook-form/dist/types/fields.d'

type FormValues = Record<string, unknown>

interface IInput {
  onPress?: () => void
  control?: Control<FieldValues, any>
  formProps: UseControllerProps<FormValues>
}

export default IInput
