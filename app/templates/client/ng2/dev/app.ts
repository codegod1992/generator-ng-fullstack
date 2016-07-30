import {
	Component
} from "@angular/core";

import {
	ROUTER_DIRECTIVES
} from "@angular/router";

@Component({
	selector: 'app',
	directives: [ROUTER_DIRECTIVES],
	template: `
		<router-outlet></router-outlet>
	`
})
export class App {

}
