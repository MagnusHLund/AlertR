import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native'
import { AddAlertDto } from '../../../model/dtos/addAlertDto'
import { updateSettingDto } from '../../../model/dtos/updateSettingDto'
import CustomTextInput from '../../input/Text input/CustomTextInput'
import { Control, FieldValues } from 'react-hook-form'

type DTO = { [key: string]: 'string' | 'boolean' | 'number' }

interface IForm {
  dto: AddAlertDto | updateSettingDto
}

interface IFormInput {
  control: Control
}

const typeMapping: { [key in keyof DTO]: any } = {
  string: CustomTextInput,
  //boolean: CustomToggle //! Does not exist yet
  number: CustomTextInput,
}

const GenericForm: React.FC<IForm> = ({ dto }) => {
  return (
    <View>
      {Object.keys(dto).map((key) => {
        const Component = typeMapping[dto[key]]
        return (
          <View key={key}>
            <Text>{key}</Text>
            {dto[key] === 'boolean' ? (
              <Component
                value={values[key]}
                onValueChange={(value: boolean) => onChange(key, value)}
              />
            ) : (
              <Component
                value={values[key]}
                onChangeText={(value: string) => onChange(key, value)}
                keyboardType={dto[key] === 'number' ? 'numeric' : 'default'}
              />
            )}
          </View>
        )
      })}
    </View>
  )
}

const TextInput: React.FC<IFormInput> = (control) => {
  return (
    <CustomTextInput
      onChange={() => {}}
      formProps={{
        name: '',
        defaultValue: '',
        control: control,
      }}
    />
  )
}

const NumberInput: React.FC<IFormInput> = (control) => {
  return (
    <CustomTextInput
      onChange={() => {}}
      formProps={{
        name: '',
        defaultValue: 0,
        control: control,
      }}
    />
  )
}
