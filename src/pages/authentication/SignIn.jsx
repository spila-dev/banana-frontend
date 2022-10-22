import { arrayUtilities } from "utility-store/src/classes/ArrayUtilities";
import { stringUtilities } from "utility-store/src/classes/StringUtilities";

import { actions } from "actions/actions";

import { stuffStore } from "classes/StuffStore";

import CountryCode from "components/commonInputs/CountryCode";
import CountrySelector from "components/commonInputs/CountrySelector";
import CustomAvatar from "components/generals/otherGeneralComponents/CustomAvatar";
import CustomBox from "components/generals/boxes/CustomBox";
import CustomButton from "components/generals/inputs/CustomButton";
import CustomCircularProgress from "components/generals/progresses/CustomCircularProgress";
import CustomContainer from "components/generals/boxes/CustomContainer";
import CustomFlexBox from "components/generals/boxes/CustomFlexBox";
import GreyTextParagraph from "components/generals/typographies/GreyTextParagraph";
import H5 from "components/generals/typographies/H5";
import PhoneNumber from "components/commonInputs/PhoneNumberInput";

import { controllers } from "controllers";

import { useMainContext } from "hooks/useMainContext";

import { Icons } from "components/others/Icons";
import { commonFunctionalities } from "classes/CommonFunctionalities";

const SignIn = () => {
  const {
    hooksOutput: { dispatch },
    state,
  } = useMainContext();

  const handleSignInClick = () => {
    dispatch(controllers.signIn());
  };

  const handlePhoneNumberInputChange = (event) => {
    const { value } = event.target;
    dispatch(actions.phoneNumberOnChange({ phoneNumber: value }));
  };

  const handleCountryCodeInputChange = (value) => {
    dispatch(actions.countryCodeOnChange({ countryCode: value }));
  };

  const selectCountryByCountryCodeInputChange = (value) => {
    const country = arrayUtilities.findByPropValueEquality(
      state.other.countries,
      value,
      "countryCode"
    );

    selectedCountryDispatcher(country);
  };

  const handleSelectedCountryChange = (newValue) => {
    selectedCountryDispatcher(newValue);

    dispatch(
      actions.countryCodeOnChange({ countryCode: newValue?.countryCode || "" })
    );

    dispatch(
      actions.countryNameOnChange({ countryName: newValue?.countryName || "" })
    );
  };

  const handleCountryNameInputChange = (newInputValue) => {
    dispatch(actions.countryNameOnChange({ countryName: newInputValue }));
  };

  const selectedCountryDispatcher = (country) => {
    dispatch(actions.selectedCountry({ selectedCountry: country || null }));
  };

  const isSignInSubmitButtonDisabled = () => {
    const validateResult =
      commonFunctionalities.validateInputValueLengthByModelMinMaxLength(
        stuffStore.models.phoneNumber,
        state.temp.phoneNumber
      );

    return !validateResult || !state.temp.selectedCountry;
  };

  return (
    <CustomContainer mw="xl">
      <CustomFlexBox mt={8} ai="center" col>
        <CustomAvatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <Icons.LockOutlined.Icon />
        </CustomAvatar>
        <H5>Teletalk</H5>
        <CustomContainer mw="xs">
          <CustomBox style={{ marginTop: 1 }}>
            <GreyTextParagraph>
              Please verify your country code and enter your mobile phone
              number.
            </GreyTextParagraph>

            <CountrySelector
              countries={state.other.countries}
              countryName={state.temp.countryName}
              onSelectedCountryChange={handleSelectedCountryChange}
              onCountryNameInputChange={handleCountryNameInputChange}
              selectedCountry={state.temp.selectedCountry}
            />

            <CustomFlexBox jc="space-between">
              <CountryCode.WithValidator
                inputValue={state.temp.countryCode}
                onInputChange={(event) => {
                  const { value } = event.target;
                  handleCountryCodeInputChange(value);
                  selectCountryByCountryCodeInputChange(value);
                }}
              />
              <PhoneNumber.WithValidator
                onInputChange={handlePhoneNumberInputChange}
                inputValue={state.temp.phoneNumber}
              />
            </CustomFlexBox>

            <CustomButton
              lbtn
              disabled={isSignInSubmitButtonDisabled()}
              loading={state.global.appProgressions.authenticationProgress}
              loadingIndicator={
                <>
                  <span>Please wait...</span> &nbsp;&nbsp;
                  <CustomCircularProgress size={25} color="info" />
                </>
              }
              onClick={handleSignInClick}
              sx={{
                borderRadius: "10px",
                mb: 1,
                mt: 2,
              }}
            >
              Next
            </CustomButton>
          </CustomBox>
        </CustomContainer>
      </CustomFlexBox>
    </CustomContainer>
  );
};

export default SignIn;