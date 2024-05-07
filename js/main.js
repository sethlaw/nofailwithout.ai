$(document).ready(function() {
    $('#rss-feed').FeedEk({
      FeedUrl: 'http://rss.cnn.com/rss/cnn_topstories.rss',
      MaxCount: 10,
      ShowDesc: true,
      ShowPubDate: true,
      DescCharacterLimit: 100,
      TitleLinkTarget: '_blank'
    });
});