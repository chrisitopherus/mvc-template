// import Model, View
import { Model } from "../model/model.js";
import { View } from "../view/view.js";

// import Binder
import { Binder } from "./binder.js";

// Main Controller
export class Controller {
    private static instance: Controller;

    binder = new Binder(this);
    private constructor(public model: Model, public view: View) { }

    /**
     * Method for making sure that there is a only one controller instance.
     * @static
     * @returns Instance of Controller.
     */
    static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            this.instance = new Controller(Model.getInstance(), View.getInstance());
            return this.instance;
        }
    }
}