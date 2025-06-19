document.addEventListener("DOMContentLoaded", function() {
    const triggers = document.querySelectorAll('.subject-trigger');

    //loops though each trigger and adds listener
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const topicList = trigger.nextElementSibling;

            //checks if already visible
            const isVisible = topicList.style.display === 'block';

            //hides all to reset the view
            document.querySelectorAll('.topic-list').forEach(list => {
                list.style.display = 'none';
            });

            //if not visible, then show
            if (!isVisible) {
                topicList.style.display = 'block';
            }
        });
    });
});