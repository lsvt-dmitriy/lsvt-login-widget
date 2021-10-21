// Init Navigation
import SlideNavigation from "./slide-navigation";

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
}
