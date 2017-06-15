(function(){
  var css = ".avatar, .edge-design .avatar, .edge-design .Avatar, .edge-design .DashboardProfileCard-avatarImage, .edge-design .DashboardProfileCard-avatarLink, .edge-design .Gallery.is-tweetless .Gallery-content, .edge-design .Gallery.is-tweetless .Gallery-media, .edge-design .MomentCapsuleCover .MomentUserByline-avatar, .edge-design .MomentCapsuleItemTweet--withText .MomentUserByline-avatar, .edge-design .MomentCapsuleSummary .MomentUserByline-avatar, .edge-design .MomentMakerRecommendedTweetsSearch--users .MomentMakerRecommendedTweetsSearch-userContainer .avatar, .edge-design .ProfileAvatar, .edge-design .ProfileAvatar-image, .edge-design .ProfileAvatar-placeholderImage, .edge-design .ProfileAvatarEditing, .edge-design .ProfileAvatarEditing-button, .edge-design .ProfileAvatarEditing-overlay, .edge-design .ProfileCard-avatarImage, .edge-design .ProfileCard-avatarLink, .edge-design .ProfileCardMini-avatarImage, .edge-design .ProfileListItem-avatar, .edge-design .ProfileUserList .Avatar, .nav .session .dropdown-toggle { border-radius: 6px; }";
  var style = document.createElement('style');
  var head = document.head || document.getElementsByTagName('head')[0];
  
  style.type = 'text/css';
  
  if(style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
})()