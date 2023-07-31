const puppeteer = require("puppeteer");
let page;
console.log("Before");


const browserOpenpromise = puppeteer.launch({ 
    headless: false,
slowMo:true,
defaultViewport:null,
args:["--start-maximized"] 
//more arguments on puppeter.launch website

});

browserOpenpromise 
 .then(function (browser) {
    //currently open tab de deta he
    const pagesArrpromise = browser.pages();
     return pagesArrpromise;
 }).then(function (browserPages) {
    page = browserPages[0];
    let gotoPromise = page.goto("https://www.google.com/");
     return gotoPromise;
})
.then(function(){
    //waiting for the element to appear on the page
   let elementWaitPromise= page.waitForSelector("textarea[type='search']" ,{visible:true});
   return elementWaitPromise;
})

.then(function(){
    // console.log("Reached  Google Home page")
    //type any element on that page ---> selector
    let keysWillBeSendPromise= page.type("textarea[type='search']","@hardiktecvlogs6630");
    return keysWillBeSendPromise;
}).then(function(){
    // page.keyboard is use to type special character
    let enterWillBePressed=page.keyboard.press("Enter");
    return enterWillBePressed;
}).then(function(){
  let elementWaitPromise=   page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", {visible:true});
  return elementWaitPromise;

}).then(function(){
    //mouse
    let keysWillBeSendPromise = page.click("h3.LC20lb.MBeuO.DKV0Md");
    return keysWillBeSendPromise;
})

.catch(function(err){
    console.log(err);
});

console.log("After");
