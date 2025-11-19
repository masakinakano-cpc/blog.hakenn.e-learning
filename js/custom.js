/*
* custom.js
* for the interactive comparison chart
*/

document.addEventListener('DOMContentLoaded', function() {
  const featureItems = document.querySelectorAll('.comparison-features li');
  const contentItems = document.querySelectorAll('.comparison-content');

  if (!featureItems.length || !contentItems.length) {
    return;
  }

  featureItems.forEach(feature => {
    feature.addEventListener('click', function() {
      // Get the target content id from data attribute
      const targetId = this.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);

      // If target doesn't exist, do nothing
      if (!targetContent) {
        return;
      }

      // Remove 'active' class from all feature items and content items
      featureItems.forEach(item => item.classList.remove('active'));
      contentItems.forEach(item => item.classList.remove('active'));

      // Add 'active' class to the clicked feature and the target content
      this.classList.add('active');
      targetContent.classList.add('active');
    });
  });

  // Set the first item as active by default
  if (featureItems.length > 0) {
    featureItems[0].click();
  }
});
