/**
 * Toggles active class at focused/blurred input's form group
 *
 * @export
 * @class ActivateInputsOnFocus
 */
export default class ActivateInputsOnFocus {
    container: HTMLElement;

    /**
     * Creates instance of a class
     * @param {HTMLElement} container
     * @memberof ActivateInputsOnFocus
     */
    constructor(container: HTMLElement) {
        if (!container) {
            throw new Error("No container found");
        }
        this.container = container;
        const inputs = Array.from(container.querySelectorAll("input"));
        inputs.forEach((input) => {
            input.addEventListener("focus", () => {
                console.log("focus");
                this.setInputFormGroupState(input, true);
            });
            input.addEventListener("blur", () => {
                console.log("blur");
                this.setInputFormGroupState(input, false);
            });
        });
    }

    private setInputFormGroupState(input: HTMLElement, isActive: boolean) {
        const activeClass = "form__group--active";
        const group = input.closest(".form__group");
        if (!group) return console.warn("Form group not found");

        if (isActive) {
            group.classList.add(activeClass);
        }

        const inputValue = (input as HTMLInputElement).value;

        if (!isActive && !inputValue) {
            group.classList.remove(activeClass);
        }
    }
}
