Twitter.NewTweetController = Ember.Controller.extend({
  actions: {
    sendTweet: function() {
      now = new Date();
      var newTweet = { text : text.value, date: now };
      tweets.addObject(newTweet);
      this.set('text', '');

    }
  }
});
