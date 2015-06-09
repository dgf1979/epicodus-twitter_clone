Twitter.NewTweetController = Ember.Controller.extend({
  actions: {
    sendTweet: function() {
      var tweet = text;
      var newTweet = { text : tweet.value };
      tweets.addObject(newTweet);
    }
  }
});
