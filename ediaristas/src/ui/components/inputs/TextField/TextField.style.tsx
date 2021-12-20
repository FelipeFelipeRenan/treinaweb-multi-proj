import { experimentalStyled as styled } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

export const TextFieldStyled = styled(TextField)`
  .MuiInput-Base-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }

  .MuiOutLinedInput-notchedOutLine {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
