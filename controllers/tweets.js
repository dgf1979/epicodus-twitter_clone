Twitter.TweetsController = Ember.ArrayController.extend({
  isTweeting: false,
  actions: {
    clickSend: function() {
      this.set('isTweeting', true);
      this.transitionTo('new-tweet');
    }
  }
});
