import { Component } from "@angular/core";

@Component({
    selector: 'success-alert',
    templateUrl: './success-alert.component.html',
    styles: [`
    blockquote{
        color: green;
        margin:1.2em;
        font-size:30px;
    }
`] 
})
export class SuccessAlertComponent{}