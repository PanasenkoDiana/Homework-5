window.addEventListener('beforeunload', function (event) {
    event.returnValue = 'Вы уверенны, что хотите закрыть страницу?';
});
