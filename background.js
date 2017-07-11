// match pattern for the URLs to redirect
var pattern = "<all_urls>";
 
// URL we will redirect to
var redirectUrl = "https://68.media.tumblr.com/avatar_8750cdae466e_48.png";

// redirect function returns a Promise
// which is resolved with the redirect URL when a timer expires
/* 
function redirectAsync(requestDetails) {
  console.log("Redirecting async: " + requestDetails.url);
  var asyncCancel = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve({redirectUrl});
    }, 2000);
  });
    
  return asyncCancel;
}
*/

// redirect function
// returns an object with a property `redirectURL`
// set to the new URL
function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  return {
    redirectUrl: "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif"
  };
}



// add the listener,
// passing the filter argument and "blocking"
/*
browser.webRequest.onBeforeRequest.addListener(
  redirectAsync,
  {urls: [pattern], types: ["image"]},
  ["blocking"]
);
*/
browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern], types:["image"]},
  ["blocking"]
);
