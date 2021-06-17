import { ChangeEvent, FocusEvent } from 'react';

type Props = {
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
};

export const DummyCheckbox = (props: Props): JSX.Element => {
  return <input type="checkbox" {...props} />;
};
