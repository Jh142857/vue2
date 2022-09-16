setInterval(() => { 
    $("video")[0].play();
    $("video")[0].playbackRate = 2.0;
    $("video")[0].addEventListener('ended', () => {
        $("li.activity.ng-scope.active").next().find('span.ng-binding').click()
    })
}, 100);