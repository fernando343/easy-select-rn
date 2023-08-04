export interface DataItem {
  value: string
  label: string
}

export type SizeValue = `${number}px` | `${number}%`;

type BoxSizeType = "center" | "flex-start" | "flex-end"

export interface PickerProps {
  data: DataItem[]
  label: string
  includeSelect?: boolean
  selectLabel?: string
  value: string
  onValueChange: (value: string) => void,
  error: boolean,
  helperText?: string
  boxPosition?: BoxSizeType
  sizeLg: SizeValue
  sizeLx: SizeValue
}

export interface ItemType {
  label: string;
  value: string;
}

export interface BoxPositionType {
  boxPosition: BoxSizeType
}

export interface SizeType {
  width: number
  sizeLg: SizeValue
  sizeLx: SizeValue
}

interface ItemData {
	key: string; // The 'key' property of the object
	labelData: string; // The 'labelData' property of the object
}

export interface PropsMultiSelectPicker {
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