import './index.js'

const zemm1 = "001003dFGcc1§14.5665132,120.9932811|n§john mark|hc§3|d§saklolo po libog n po kami d2 sa bacoor"
const zemm2 = "002003dFGcc1libog n po kami d2 sa bacoor cavite saklolo po libog n po kami d2 sa bacoor cavite saklolo po libog n po kami d2 sa bacoor cavite saklolo po2 saklol"
const zemm3 = "003003dFGcc1o po libog n po kami d2 sa bacoor cavite saklolo po libog n po kami d2 sa bacoor cavite saklolo po libog n po kami d2 sa bacoor cavite saklolo po l3"

const Zemm = new ZemmParser();

let finalZemm = Zemm.parse(zemm1)
finalZemm = Zemm.parse(zemm3)
console.log(finalZemm)
finalZemm = Zemm.parse(zemm2)
console.log(finalZemm)

