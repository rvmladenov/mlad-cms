import {Directive, AfterContentChecked} from '@angular/core';
declare var componentHandler: any;

@Directive({
    selector: '[mdl]'
})    
export class MDL implements AfterContentChecked {
    ngAfterContentChecked() {
        /** FIXME: Temporaty implementation ... this is a huge memoy leak. It is invoked many times during the initialization and should be fixed. */
        componentHandler.upgradeAllRegistered();
    }
}