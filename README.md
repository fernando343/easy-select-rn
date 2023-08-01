# React Native Easy Select

[![Platforms](https://img.shields.io/badge/Platforms-Android%20%7C%20iOS%20%7C%20macOS%20%7C%20Windows%20%7C%20Expo-blue)](#)
 [![License](https://img.shields.io/badge/License-MIT-green)](#)





React Native Easy Select is a customizable and easy-to-use picker component for React Native. It allows you to create a selector with a bottom sheet modal, providing a smooth user experience for selecting options.

## Installation

Install the package using npm or yarn:

```
npm install react-native-easy-select
```

or

```
yarn add react-native-easy-select
```

## Usage

Import the \`Picker\` component from \`react-native-easy-select\` and use it in your React Native application:

```
import React, { useState } from 'react';

import { View, Text } from 'react-native';

import { Picker } from 'react-native-easy-select';

const MyComponent = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const data = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <View>
      <Text>Select an option:</Text>
      <Picker
        data={data}
        label="Select an option"
        value={selectedValue}
        onValueChange={(value) => setSelectedValue(value)}
      />
      <Text>Selected Value: {selectedValue}</Text>
    </View>
  );
};
```

## Props

The \`Picker\` component accepts the following props:

| Prop          | Type                                      | Default            | Description                                                        |
| ------------- | ----------------------------------------- | ------------------ | ------------------------------------------------------------------ |
| data          | Array of { value: string, label: string } | []                 | An array of options to display in the picker.                      |
| label         | string                                    |                    | Label for the picker input.                                        |
| includeSelect | boolean                                   | false              | Whether to include a "Select" option at the beginning of the list. |
| selectLabel   | string                                    | "Select an option" | Label for the "Select" option.                                     |
| value         | string                                    | ""                 | Currently selected value.                                          |
| defaultValue  | string                                    | ""                 | Default value for the picker.                                      |
| onValueChange | function                                  |                    | Callback function to handle value changes.                         |
| boxPosition   | "center", "flex-start", "flex-end"        | "center"           | Position of the selector box.                                      |
| sizeLg        | string                                    | "70%"              | Size of the selector box for large screens.                        |
| sizeLx        | string                                    | "63%"              | Size of the selector box for extra-large screens.                  |


## License

MIT License. See the [LICENSE](LICENSE) file for more information.