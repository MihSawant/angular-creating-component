import { Component } from "@angular/core";

@Component({
    selector: 'warning-alert',
    templateUrl: './warning-alert.component.html',
    styles: [`
            blockquote{
                color: orange;
                margin:1.2em;
                font-size:30px;
            }
    `] 
})
export class WarningAlertComponent{} 