import {Component} from '@angular/core';
import {EasyFormsComponent} from './easyForms/easy-forms.component';

function startsWithNumber(control) {

    if (control.value !== '' && !isNaN(control.value.charAt(0))) {
        return {'startsWithNumber': true};
    }

    return null;
}

@Component({
    selector: 'app',
    directives: [EasyFormsComponent],
    template: `
        <h1>Testing</h1>
        <easy-forms [data]="data" (onSubmit)="onSubmit($event)" (onChanges)="onChanges($event)"></easy-forms>
    `
})
export class AppComponent {
    constructor() {}

    public data = {
        settings: {
            submitButtonText: 'Send',
        },
        questions: [
            {
                type: 'text',
                key: 'firstName',
                value: 'John Doe',
                label: 'First Name',
                order: 6,
                validation: [
                    {type: 'required'},
                    {type: 'minLength', value: 5, message: 'Please enter a name longer then 5 characters'},
                    {type: 'pattern', value: '^[a-zA-Z ]+$', message: 'Only letters and spaces are allowed'}
                ]
            },
            {
                type: 'password',
                key: 'password',
                label: 'Password',
                order: 4,
                validation: [
                    {type: 'required'},
                    {type: 'custom', value: startsWithNumber, message: 'Please dont start with a number'}
                ]
            },
            {
                type: 'dropdown',
                key: 'address',
                label: 'Address',
                value: 'osijek',
                order: 2,
                options: [
                    {value: 'osijek', name: 'Osijek'},
                    {value: 'zagreb', name: 'Zagreb'}
                ]
            },
            {
                type: 'radio',
                key: 'gender',
                label: 'Gender',
                value: 'male',
                order: 3,
                options: [
                    {value: 'male', name: 'Male'},
                    {value: 'female', name: 'Female'}
                ]
            },
            {
                type: 'checkbox',
                key: 'things',
                label: 'Things You Like',
                order: 1,
                values: ['pokemon', 'starWars'],
                options: [
                    {value: 'starWars', name: 'Star Wars'},
                    {value: 'batlefield', name: 'Batlefield'},
                    {value: 'pokemon', name: 'Pokemon'}
                ]
            }
        ]
    };

    onSubmit(event) {
        console.log(event)
    }

    onChanges(event) {
        console.log(event)
    }
}