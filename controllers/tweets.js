Twitter.TweetsController = Ember.ArrayController.extend({
  dateShowing: false,
  sortProperties: ['date'],
  sortAscending: false,
  isTweeting: false,
  actions: {
    clickSend: function() {
      this.set('isTweeting', true);
      this.transitionTo('new-tweet');
    },
    clickTweet: function() {
      this.set('dateShowing', true);
    }
  }
});
