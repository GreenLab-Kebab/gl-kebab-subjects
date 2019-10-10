/* eslint-disable semi */
function add_commas(nStr) {
    // http://www.mredkj.com/javascript/numberFormat.html
    const x = (`${nStr}`).split('.')
    let x1 = x[0]
    const x2 = x.length > 1 ? `.${x[1]}` : ''
    const rgx = /(\d+)(\d{3})/
    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1,$2')
    return x1 + x2
}

export {
    add_commas as
    default
}