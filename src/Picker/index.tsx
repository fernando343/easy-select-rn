import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { Picker as Pk } from "@react-native-picker/picker";
import { t } from "i18next";
import { capitalize } from "lodash";
import React, { useCallback, useMemo, useRef } from "react";
import {
  Keyboard,
  Platform,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Button, RadioButton, TextInput } from "react-native-paper";
import { Item } from "./Item";
import { Body, Box, Content, Header } from "./styled";
import type { PickerProps } from "./types";

const Picker: React.FC<PickerProps> = ({
  data = [],
  label,
  includeSelect,
  selectLabel,
  value,
  onValueChange,
  boxPosition = "center",
  sizeLg = "70%",
  sizeLx = "63%",
}) => {

  const { width } = useWindowDimensions();
  const height = Platform.OS === "ios" ? 280 : 350;

  // Botoom Sheet
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => [height, height], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    Keyboard.dismiss();
  }, []);
  const handleCloseSheet = () => bottomSheetModalRef.current?.close();

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
        pressBehavior="none"
      />
    ),
    [],
  );

  const renderPickerIOS = useMemo(
    () => (
      <Pk selectedValue={value} onValueChange={onValueChange}>
        {includeSelect && (
          <Pk.Item
            enabled={false}
            label={selectLabel}
            value=""
            color="#dcdcdc"
          />
        )}
        {data.map((item) => (
          <Pk.Item
            key={item.value}
            label={item.label}
            value={item.value}
          />
        ))}
      </Pk>
    ),
    [data, includeSelect, onValueChange, selectLabel, value],
  );

  const renderPickerAndroid = useMemo(
    () => (
      <Content contentContainerStyle={{ paddingBottom: 20 }}>
        <RadioButton.Group onValueChange={onValueChange} value={value}>
          {data.map((item) => (
            <Item key={item.value} label={item.label} value={item.value} />
          ))}
        </RadioButton.Group>
      </Content>
    ),
    [data, onValueChange, value],
  );

  return (
    <>
      <TouchableOpacity onPress={handlePresentModalPress}>
        <TextInput
          mode="outlined"
          label={label}
          editable={false}
          value={
            value !== ""
              ? capitalize(data?.find((item) => item.value === value)?.label)
              : ""
          }
          onPressIn={handlePresentModalPress}
        />
      </TouchableOpacity>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        handleComponent={null}
        backdropComponent={renderBackdrop}
        enablePanDownToClose={false}
        backgroundStyle={{
          backgroundColor: "#00000000",
        }}
        style={{ width: "100%", alignItems: "center" }}
      >
        <Body boxPosition={boxPosition}>
          <Box width={width} sizeLg={sizeLg} sizeLx={sizeLx}>
            <Header>
              <Button onPress={handleCloseSheet}>{t("done")}</Button>
            </Header>

            {Platform.OS === "ios" ? renderPickerIOS : renderPickerAndroid}
          </Box>
        </Body>
      </BottomSheetModal>
    </>
  )
  // Resto del código del componente Picker
};

export default Picker;