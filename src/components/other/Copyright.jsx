import { appConfigs } from "classes/AppConfigs";

import CustomLink from "components/general/other/CustomLink";
import CustomTypography from "components/general/typography/CustomTypography";

const Copyright = (props) => {
  const {
    apiConfigs: { CLIENT_BASE_URL: APPLICATION_URL },
  } = appConfigs.getConfigs();

  return (
    <CustomTypography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <CustomLink color="inherit" href={APPLICATION_URL}>
        teletalk
      </CustomLink>

      {new Date().getFullYear()}
    </CustomTypography>
  );
};

export default Copyright;