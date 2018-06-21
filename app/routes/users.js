import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RSVP from 'rsvp';

export default Route.extend(AuthenticatedRouteMixin, {
  // NOTE: May ahve to deserialize the returned date for it to display
   /*model() {
     return this.store.findAll('user').then(function (users) {
       return users.forEach((user) => {
         user.get('person');
       });
     });
   },*/
   model() {
    let store = this.store;
    return store.findAll('user').then(function(users){
      users.forEach(user => {
        store.findRecord('person', user.id).then(function(person) {
          user.set('person', person);
          //console.log("user id = " + user.id + " and firstName = " + person.firstName);
        });
      });
      return users;
      /*return Ember.RSVP.all(users.getEach('person')).then(function(){
        users.forEach(user => {
          let person = user.person;
          console.log("user id = " + user.id + " and firstName = " + person.firstName);
        });
        return users;
      });*/
    });
   }
   //model() {
   //  return this.store.findAll('user');
   //}
  //model() {
  //  return RSVP.hash({
  //    users: this.store.findAll('user'),
  //    people: this.store.findAll('person'),
  //  });
  //}
  // afterModel(model, transition) {
  //   this._super(controller, model);
  //   return RSVP.all(model.getEach('people'));
  // },

  // setupController(controller, model) {
  //   this._super(controller, model);
  //   controller.set('users', model.users);
  //   controller.set('people', model.people);
  // },

  /*model() {
    var promise = new Ember.RSVP.Promise(function (resolve, reject) {
      this.store.findAll('user').then(function (users) {
        var personPromises = users.map(function(s){ return s.get('person') });
        Ember.RSVP.all(personPromises).then(function () {
          resolve(users);
        });
      });
    });
    return promise;
 }*/
});
