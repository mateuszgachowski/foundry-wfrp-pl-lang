Hooks.once('init', () => {
    if (typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'wfrp4e-core-pl',
            lang: 'pl',
            dir: 'pl/compendium'
        });
    }
});

Hooks.on('createActor', (actor) => {
    if (actor.getFlag("babele", "translated")) {
        return;
    }
});