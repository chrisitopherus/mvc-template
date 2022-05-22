export class Model {
    private static instance: Model;
    private constructor() { }

    /**
     * Method for making sure that there is a only one view instance.
     * @returns Instance of model.
     * @static
     */
    static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            this.instance = new Model();
            return this.instance;
        }
    }
}