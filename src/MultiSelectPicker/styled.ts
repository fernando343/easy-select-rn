import { BottomSheetTextInput, BottomSheetView } from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';

export const Body = styled.View`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Header = styled(BottomSheetView)`
    width: 100%;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.card};
    flex-direction: row;
    justify-content: flex-end;
    border-bottom-color: #75757550;
    border-bottom-width: 1px;
`;

export const Content = styled(BottomSheetView)`
    width: 100%;
    flex: 1;
    padding: 16px;
    margin-bottom: 20px;
`;

export const TextField = styled(BottomSheetTextInput)`
    width: 100%;
    height: 50px;
    padding: 5px;
    border: 2px #75757550;
    border-radius: 5px;
`;
