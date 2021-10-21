/**
 * Toggles password field from "password" to "text" and back
 * There should be sibling of the password field with these classes:
 * "password-toggle--hide" and "password-toggle--show"
 *
 * @export
 * @class PasswordToggle
 */
export default class PasswordToggle {
    container: HTMLElement;
    field: HTMLInputElement;
    triggerShow: HTMLElement;
    triggerHide: HTMLElement;

    /**
     * Adds Password toggle to the field
     * @param {HTMLInputElement} field
     * @memberof PasswordToggle
     */
    constructor(field: HTMLInputElement) {
        if (!field) {
            throw new Error("No field found");
        }

        this.field = field;
        this.container = field.closest(".form__group");

        if (!this.container) {
            throw new Error("Password field form group not found");
        }

        this.triggerShow = this.container.querySelector(
            ".password-toggle--show"
        );
        this.triggerHide = this.container.querySelector(
            ".password-toggle--hide"
        );

        if (!this.triggerShow || !this.triggerHide) {
            throw new Error("Missing one of the triggers");
        }

        this.triggerShow.addEventListener("click", () => {
            this.field.type = "text";
            this.toggleTriggers();
        });

        this.triggerHide.addEventListener("click", () => {
            this.field.type = "password";
            this.toggleTriggers();
        });
    }

    private toggleTriggers() {
        this.triggerShow.classList.toggle("hidden");
        this.triggerHide.classList.toggle("hidden");
    }
}
