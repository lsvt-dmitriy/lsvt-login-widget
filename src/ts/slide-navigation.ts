/**
 * Adds slide navigation to an HTML
 *
 * @export
 * @class SlideNavigation
 */
export default class SlideNavigation {
    widget: HTMLElement;

    /**
     * Adds dynamic navigation to HTML element children.
     * @param {HTMLElement} widget
     * @memberof SlideNavigation
     */
    constructor(widget: HTMLElement) {
        if (!widget) {
            throw new Error("Cannot add navigation to non-existent element");
        }
        this.widget = widget;
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
     * @memberof SlideNavigation
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
