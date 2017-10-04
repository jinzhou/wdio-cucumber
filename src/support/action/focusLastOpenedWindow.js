/**
 * Focus the last opened window
 * @param  {String}   obsolete Type of object to focus to (window or tab)
 */
module.exports = (obsolete) => {
   /**
    * The last opened window
    * @type {Object}
    */
   const lastWindowHandle = browser.windowHandles().value.slice(-1)[0];

   browser.window(lastWindowHandle);
};
