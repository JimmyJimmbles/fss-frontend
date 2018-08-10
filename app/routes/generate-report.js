import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { inject as service } from "@ember/service";
import RSVP from 'rsvp';

export default Route.extend(AuthenticatedRouteMixin, {
	session: service("session"),

	// model() {
	// 	const columns = [
	// 		this.store.createRecord('reportcolumn', {
	// 			header: [],
	// 			tableName: [],
	// 			columnName: [],
	// 			columnOrder: [],
	// 			width: [],
	// 		}),
	// 		this.store.createRecord('reportcolumn', {
	// 			header: [],
	// 			tableName: [],
	// 			columnName: [],
	// 			columnOrder: [],
	// 			width: [],
	// 		}),
	// 		this.store.createRecord('reportcolumn', {
	// 			header: [],
	// 			tableName: [],
	// 			columnName: [],
	// 			columnOrder: [],
	// 			width: [],
	// 		}),
	// 	];
	// 	return RSVP.hash({
  //     columns
  //   });
	// }
});
