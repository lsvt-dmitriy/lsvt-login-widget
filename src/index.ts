import "./css/cleanslate.css";
import "./scss/styles.scss";
import "./css/colors.css";
import "./css/custom.css";
import "./css/text-content.css";

import SlideNavigation from "./ts/slide-navigation";
import PasswordToggle from "./ts/password-toggle";
import ActivateInputsOnFocus from "./ts/activate-inputs-on-focus";

// Init the Widget
const widget: HTMLElement = document.querySelector("#lslf__login-widget");
new SlideNavigation(widget);
new ActivateInputsOnFocus(widget);
const passwordField: HTMLInputElement = widget.querySelector(
    "#lslf__field_password"
);
new PasswordToggle(passwordField);
