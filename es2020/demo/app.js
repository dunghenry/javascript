// function run(){
//     import('./log.js').then(log =>{
//         log.default();
//     }).catch(err => console.log(err));
// }
//! or
// function run(){
//     (async () =>{
//         try {
//             const {log, warn} = await import('./log.js');
//             log();
//             warn();
//         } catch (error) {
//             console.log(error);
//         }
//     })();
// }

function run(){
    Promise.all([import('./log.js'), import('./show.js')])
    .then((rs) =>{
        console.log(rs); //[Module, Module]
       rs[0].log();
    })
    .catch((err) => console.log(err));
}

run();