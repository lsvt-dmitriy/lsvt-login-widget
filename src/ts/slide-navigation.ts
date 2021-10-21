/**
 * Adds slide navigation to an HTML
 *
 * @export
 * @class SlideNavigation
 */
export default class SlideNavigation {
    widget: HTMLElement;

    /**
     * Creates an instance of StripeWidget.
     * @param {string} containerId id of the HTML element enclosing the widget
     * @memberof containerId
     */
    constructor(containerId: string) {
        console.log("constructor");
        this.widget = document.getElementById(containerId);
        if (!this.widget) {
            throw new Error(`${containerId} element not found.`);
        }
        this.attachNavButtons();
    }

    /**
     * Switches between .slide elements by hiding all and
     * reveal the one with passed ID.
     *
     * @private
     * @param {string} targetSlideId id of the slide to switch to
     * @memberof StripeWidget
     */
    private navigateToSlide(targetSlideId: string): void {
        const slides: Array<HTMLElement> = Array.from(
            this.widget.querySelectorAll(".slide")
        );

        slides.forEach((slide: HTMLElement) => {
            const action = slide.id === targetSlideId ? "remove" : "add";
            slide.classList[action]("hidden");
        });
    }

    /**
     * Adds functionality to the navigation elements such as
     * "Continue" and "Back", to navigate between the slides.
     *
     * @private
     * @memberof StripeWidget
     */
    private attachNavButtons() {
        const buttons = Array.from(
            this.widget.querySelectorAll(".slide-switcher")
        );

        buttons.forEach((button: HTMLElement): void => {
            button.addEventListener("click", (e: Event) => {
                e.preventDefault();
                const id: string = button.dataset.goTo;
                if (!id) return;
                this.navigateToSlide(id);
            });
        });
    }
}
