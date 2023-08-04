import {
	BottomSheetBackdrop,
	BottomSheetModal,
	BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { t } from "i18next";
import { capitalize } from "lodash";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
	ScrollView,
	TouchableOpacity,
	useWindowDimensions,
} from "react-native";
import { Button, Checkbox, TextInput } from "react-native-paper";
import { useTheme } from "styled-components";
import { Item } from "./Item";
import { Body, BodyContent, Box, Content, Header, TextField } from "./styled";

interface ItemData {
	key: string; // The 'key' property of the object
	labelData: string; // The 'labelData' property of the object
}

type SizeValue = `${number}px` | `${number}%`;

type BoxSizeType = "center" | "flex-start" | "flex-end";

interface Props {
	loading: boolean;
	error?: string;
	placeholder: string;
	label: string;
	data: Array<ItemData>;
	values: string[]; // Array of strings
	keyData: string;
	labelData: string;
	onValuesChange: (values: string[]) => void;
	boxPosition?: BoxSizeType;
	sizeLg: SizeValue;
	sizeLx: SizeValue;
}

export const MultiSelectPicker: React.FC<Props> = ({
	loading,
	error,
	placeholder,
	label,
	data = [],
	values,
	keyData,
	labelData,
	onValuesChange,
	boxPosition = "center",
	sizeLg = "70%",
	sizeLx = "63%",
}) => {
	const { width } = useWindowDimensions();
	const theme = useTheme();

	const bottomSheetModalRef = useRef<BottomSheetModal>(null);
	const snapPoints = useMemo(() => ["53%", "53%"], []);

	const handlePresentModalPress = useCallback(() => {
		bottomSheetModalRef.current?.present();
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

	const [inputValue, setInputValue] = useState("");

	const handleBlur = () => {
		bottomSheetModalRef.current?.snapToIndex(0);
	};

	const handleSelectValues = (value: string) => {
		const valueItem = values.find((item) => item === value);
		const existItem = values.findIndex((item) => item === valueItem);
		if (existItem > -1) {
			const newArray = [...values];
			newArray.splice(existItem, 1);
			onValuesChange(newArray);
		} else {
			onValuesChange([...values, value]);
		}
	};

	const filterData = data.filter((item) =>
		item[labelData]?.toLowerCase().includes(inputValue.toLowerCase()),
	);

	if (loading) {
		return (
			<TextInput
				mode="outlined"
				label={label}
				editable={false}
				value={`${t("loading")}...`}
			/>
		);
	}

	if (error) {
		return (
			<TextInput
				mode="outlined"
				label={label}
				editable={false}
				value={t("error.500")}
			/>
		);
	}

	return (
		<>
			<TouchableOpacity onPress={handlePresentModalPress}>
				<TextInput
					mode="outlined"
					label={label}
					editable={false}
					value={values.length >= 1 ? "." : ""}
					style={{ maxHeight: 120 }}
					keyboardAppearance={theme.mode}
					render={() => (
						<ScrollView>
							<Body>
								{values.map((value, index) => (
									<Item
										key={index}
										text={
											data.find((itemFind) => itemFind[keyData] === value)[
												labelData
											]
										}
									/>
								))}
							</Body>
						</ScrollView>
					)}
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
				<BodyContent boxPosition={boxPosition}>
					<Box width={width} sizeLg={sizeLg} sizeLx={sizeLx}>
						<Header>
							<Button onPress={handleCloseSheet}>{t("done")}</Button>
						</Header>

						<Content>
							<BottomSheetScrollView showsVerticalScrollIndicator={false}>
								<TextField
									placeholder={placeholder}
									placeholderTextColor="#75757550"
									onBlur={handleBlur}
									value={inputValue}
									onChangeText={setInputValue}
									autoCorrect={false}
									spellCheck={false}
									textContentType="none"
									keyboardAppearance={theme.mode}
								/>

								{filterData.map((item, index) => {
									const status = values.includes(item[keyData])
										? "checked"
										: "unchecked";

									return (
										<Checkbox.Item
											key={item[keyData]}
											label={capitalize(item[labelData])}
											status={status}
											mode="android"
											onPress={() => handleSelectValues(item[keyData])}
										/>
									);
								})}
							</BottomSheetScrollView>
						</Content>
					</Box>
				</BodyContent>
			</BottomSheetModal>
		</>
	);
};
