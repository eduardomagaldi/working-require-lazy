{ main:
     { parents: [],
         deps: [ 'jquery', 'underscore', 'backbone', 'test1', 'lazy' ],
         index: 0,
         name: 'main',
         bundleDeps:
            [ { id: '5e493158ea4fa8507426eeecd5aff26f',
                    deps: [ 'backbone', 'jquery', 'lazy', 'test1', 'underscore' ],
                    exclusive: false,
                    includedIn: 'main' } ],
         excludedDeps: [],
         hash: '63ba129ccbe0871d0aa7aac404bd8b46' },
    test2:
     { parents: [ 'main', 'test2' ],
         deps: [ 'jquery', 'underscore', 'backbone', 'test1', 'lazy', 'main' ],
         index: 1,
         name: 'test2',
         bundleDeps:
            [ { id: '5e493158ea4fa8507426eeecd5aff26f',
                    deps: [ 'backbone', 'jquery', 'lazy', 'test1', 'underscore' ],
                    exclusive: false,
                    includedIn: 'main' },
                { id: 'fad58de7366495db4650cfefac2fcd61',
                    deps: [ 'main' ],
                    exclusive: true } ],
         excludedDeps: [ 'backbone', 'jquery', 'lazy', 'test1', 'underscore', 'lazy' ],
         hash: '01ffe443a4085ab5867fa21f9a20cd3a' } }