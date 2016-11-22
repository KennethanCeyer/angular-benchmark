import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: 'a',
    host: {
        '(click)': 'onClick($event)'
    }
 })
export class DirectiveCoreAnchorPreventDefault {
    onClick($event: any) {
        var href :string = $event.target.getAttribute('href');
        if(href.length === 0 || href === '#') {
            $event.preventDefault();
        }
    }
};
