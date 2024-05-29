$(document).ready(function() {
    $('#rss-feed').FeedEk({
      FeedUrl: 'https://nofailwithout.ai/rss.xml',
      MaxCount: 10,
      ShowDesc: true,
      ShowPubDate: true,
      DescCharacterLimit: 100,
      TitleLinkTarget: '_blank'
    });
});
