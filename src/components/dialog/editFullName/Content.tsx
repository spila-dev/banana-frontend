import { FullName } from "utility-store/lib/types";

import Box from "~/components/general/box";
import { CommonInput } from "~/components/general/input/common";
import { CommonOnChange } from "~/types";

interface Props {
  fullName: FullName;
  onChange: CommonOnChange;
}

const EditFullNameContent: React.FC<Props> = ({ fullName, onChange }) => {
  return (
    <Box.Flex col>
      <CommonInput.FullName
        firstName={fullName.firstName}
        lastName={fullName.lastName}
        onFirstNameInputChange={onChange}
        onLastNameInputChange={onChange}
      />
    </Box.Flex>
  );
};

export default EditFullNameContent;
