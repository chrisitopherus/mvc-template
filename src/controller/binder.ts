// import Controller
import { Controller } from "./controller.js";

// import types
import { Sites } from "../types/sites";
export class Binder {
    constructor(private controllerInstance: Controller) { }

    /**
     * Method for doing binding logic for a specified site.
     * @param site String representing the site.
     * @public
     */
    bind(site: Sites) {
        switch (site) {
            case "any":
                this.any();
                break;
            default:
                const never: never = site;
        }
    }

    any() {

    }
}