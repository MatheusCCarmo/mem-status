const os = require("os");

setInterval(() => {

        const { freemem, totalmem } = os;
        
        const freeMemMB = parseInt(( freemem() / 1024 ) / 1024)
        const totalMemMB = parseInt(( totalmem() / 1024 ) / 1024)
        const usage = parseInt(100 - (( freeMemMB / totalMemMB ) * 100 ))

        const stats = {
            freeMem : `${freeMemMB} MB`,
            totalMem : `${totalMemMB} MB`,
            usage : `${usage}%`
        }
        
        console.clear();
        console.table(stats)

    }, 2000
)

