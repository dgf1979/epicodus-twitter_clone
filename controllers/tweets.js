Twitter.TweetsController = Ember.ArrayController.extend({
  sortProperties: ['date'],
  sortAscending: false,
  isTweeting: false,
  actions: {
    clickSend: function() {
      this.set('isTweeting', true);
      this.transitionTo('new-tweet');
    }
  }
});
