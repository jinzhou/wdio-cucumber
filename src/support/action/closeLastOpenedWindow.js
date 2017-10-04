/**
 * Close the last opened window
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
module.exports = (obsolete) => {
   /**
    * The last opened window handle
    * @type {Object}
    */
   const lastWindowHandle = browser.windowHandles().value.slice(-1)[0];

   browser.window(lastWindowHandle);

   browser.close();
};
