import React from "react";
import { RadioButton } from "react-native-paper";
import type { ItemType } from "../types";

export const Item: React.FC<ItemType> = ({ label, value }) => {
	return (
		<RadioButton.Item
			label={label}
			value={value}
			style={{
				paddingHorizontal: 0,
				paddingVertical: 2,
			}}
		/>
	);
};
