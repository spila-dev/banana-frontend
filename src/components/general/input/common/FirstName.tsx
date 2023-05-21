import { Input } from "~/components/general/input";
import withInputValidator from "~/hoc/withInputValidator";

import { variables } from "~/variables";

const FirstNameInput = ({ inputValue, onInputChange, required = true }) => {
  return (
    <Input.Text
      autoFocus
      id={variables.other.helper.ELEMENT_IDS.FIRST_NAME_INPUT}
      label={variables.other.helper.ELEMENT_LABELS.FIRST_NAME}
      name={variables.other.helper.ELEMENT_NAMES.FIRST_NAME}
      onChange={onInputChange}
      required={required}
      value={inputValue}
    />
  );
};

const FirstName = {
  Native: FirstNameInput,
  WithValidator: withInputValidator(
    FirstNameInput,
    variables.other.helper.VALIDATION_KEYS.firstName
  ),
};

export default FirstName;
