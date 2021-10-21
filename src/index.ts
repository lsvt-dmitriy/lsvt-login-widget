import "./css/cleanslate.css";
import "./scss/styles.scss";
import "./css/colors.css";
import "./css/custom.css";
import "./css/text-content.css";
import SlideNavigation from "./ts/slide-navigation";

// Init Navigation
new SlideNavigation("lslf__login-form");

// Init AJAX form
/* 
    Here we intercept login form submit
    Throw error if not HTTPS 
    Post login password
    If answer is 401 display .error
    Otherwise redirect to "response text"
    if "response text" is not URL, 
    remove backdrop and close itself
*/
