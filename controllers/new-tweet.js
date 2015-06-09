Twitter.NewTweetController = Ember.Controller.extend({
  actions: {
    sendTweet: function() {
      var newTweet = { text : text.value };
      tweets.addObject(newTweet);
      this.set('text', '');
    }
  }
});
