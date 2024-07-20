document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('#bg .bg-image');
    var index = 0;
    var intervalTime = 25000; // 90 seconds in milliseconds

    function changeImage() {
        // Remove 'active' class from current image
        images[index].classList.remove('active');

        // Move to the next image
        index = (index + 1) % images.length;

        // Add 'active' class to the next image
        images[index].classList.add('active');

        // Schedule the next image change
        setTimeout(changeImage, intervalTime);
    }

    // Start the initial image change
    setTimeout(changeImage, intervalTime);
});