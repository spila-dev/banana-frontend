import Box from "~/components/general/box";
import { Input } from "~/components/general/input";
import {
  CountrySelectInputChange,
  OnCountryNameInputChange,
} from "~/components/general/input/common/countrySelector";
import {
  AddContactWithCellphoneIO,
  CommonOnChange,
  SelectedCountry,
} from "~/types";

interface Props {
  contact: AddContactWithCellphoneIO["input"];
  countryName: string;
  onCountryCodeInputChange: CommonOnChange;
  onCountryNameInputChange: OnCountryNameInputChange;
  onInputChange: CommonOnChange;
  onSelectedCountryChange: CountrySelectInputChange;
  selectedCountry: SelectedCountry;
}
const AddContactContent: React.FC<Props> = ({
  contact,
  countryName,
  onCountryCodeInputChange,
  onCountryNameInputChange,
  onInputChange,
  onSelectedCountryChange,
  selectedCountry,
}) => {
  return (
    <>
      <Box.Div>
        <Box.Div></Box.Div>

        <Box.Flex col jc="space-between" mt={2}>
          <Input.FullName
            firstName={contact.firstName}
            lastName={contact.lastName}
            onFirstNameInputChange={onInputChange}
            onLastNameInputChange={onInputChange}
          />

          <Input.Cellphone
            countryCode={contact.countryCode}
            countryName={countryName}
            onCountryCodeInputChange={onCountryCodeInputChange}
            onCountryNameInputChange={onCountryNameInputChange}
            onPhoneNumberInputChange={onInputChange}
            onSelectedCountryChange={onSelectedCountryChange}
            phoneNumber={contact.phoneNumber}
            selectedCountry={selectedCountry}
          />
        </Box.Flex>
      </Box.Div>
    </>
  );
};

export default AddContactContent;
