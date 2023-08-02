import { BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import styled from "styled-components/native";
import type { BoxPositionType, SizeType } from "../types";
import { useWidth } from "../utils/useWidth";

export const Header = styled(BottomSheetView)`
    width: 100%;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.card};
    flex-direction: row;
    justify-content: flex-end;
    border-bottom-color: #75757550;
    border-bottom-width: 1px;
`;

export const ContentField = styled.View`
    position: relative;
`;

export const Touch = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

export const Body = styled.View<BoxPositionType>`
    width: 100%;
    flex: 1;
    align-items: ${(props) => props.boxPosition};
`;

export const Box = styled.View<SizeType>`
    width: ${({ width, sizeLg, sizeLx }) =>
        useWidth(width, "100%", "100%", "100%", sizeLg, sizeLx)};
    flex: 1;
    background-color: ${({ theme }) => theme.colors.card};
`;

export const Content = styled(BottomSheetScrollView)`
    padding: 0 16px;
`;
