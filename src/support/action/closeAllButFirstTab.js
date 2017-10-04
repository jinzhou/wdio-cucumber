/**
 * Close all but the first tab
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
module.exports = (obsolete) => {
   /**
    * Get all the window handles
    * @type {Object}
    */
   const windowHandles = browser.windowHandles().value;

   // Close all tabs but the first one
   windowHandles.forEach((handle, index) => {
      if (index > 0) {
         browser.switchTab(handle).close();
      }
   });
};
