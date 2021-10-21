import SlideNavigation from "./slide-navigation";
import PasswordToggle from "./password-toggle";

/**
 * Ensures widget works
 *
 * @export
 * @class Widget
 */
export default class Widget {
    container: HTMLElement;

    /**
     * Creates an instance of Widget.
     * @param {string} containerId id of the HTML element enclosing the widget
     * @memberof containerId
     */
    constructor(containerId: string) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            throw new Error(`${containerId} element not found.`);
        }
        new SlideNavigation(this.container);
    }

    public addPasswordToggle(passwordFieldSelector: string) {
        const passwordField = this.container.querySelector(
            passwordFieldSelector
        );
        new PasswordToggle(passwordField as HTMLInputElement);
    }
}
