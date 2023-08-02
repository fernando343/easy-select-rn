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