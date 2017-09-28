class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this.config = config;
        this.state = this.config.initial;
        this.next = null;
        this.previous = null;
        if(typeof config == "undefined"){
            throw error;
        }

    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.state;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        if(this.config.states[state] == null){
            throw error;
        } else {
            this.previous = this.state;
            this.state = state;
            return true;
        }
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {

        if (this.config.states[this.state].transitions[event] == undefined) { 
            throw error; 
        }

        else {
            this.previous = this.state;
            this.state = this.config.states[this.state].transitions[event];
        }
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.state = this.config.initial;
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
       
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
        if(this.previous == null){
            return false;
        } else {
            this.next = this.state;
            this.state = this.previous;
            this.previous = null;
            return true;
        }
    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {
        if(this.next == null){
            return false;
        } else {
            this.previous = this.state
            this.state = this.next;
            this.next =null;
            return true;


        }
    }

    /**
     * Clears transition history
     */
    clearHistory() {
        this.previous = null;
        this. next = null;
    }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
