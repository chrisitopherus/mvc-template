// import binder
import { Binder } from "./binder.js";

// Main View
export class View {
    private static instance: View;
    binder = new Binder(this);
    private constructor() { }
    /**
     * Method for making sure that there is a only one view instance.
     * @returns Instance of view.
     * @static
     */
    static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            this.instance = new View();
            return this.instance;
        }
    }
}