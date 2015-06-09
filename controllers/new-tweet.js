Twitter.NewTweetController = Ember.Controller.extend({
  actions: {
    send: function() {
      var tweet = text;
      var newTweet = { text : tweet.value };
      tweets.addObject(newTweet);
    }
  }
});
