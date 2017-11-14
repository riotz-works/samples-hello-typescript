/* Copyright 2017 Riotz Works. */

/**
 * Interface that returns greetings.
 */
export interface Greeter {

    /**
     * A greeting is returned.
     *
     * @returns {string} greeting.
     */
    greet(): string;
}

/**
 * Model representing person.
 */
export class Person implements Greeter {

    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * A greeting is returned.
     *
     * @returns {string} greeting.
     */
    public greet(): string {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}
