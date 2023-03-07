// serve para enumerar 

enum DesignColors {
    white = "#fff",
    black = '#000'
}

console.log(DesignColors.white);

enum StatusPermission {
    ADMIN, // começa com zero
    USER, // um
    SUPPORT, // dois
    Des = 0 // támbem posso colcoar um valor.
}

console.log(StatusPermission.ADMIN)
console.log(StatusPermission.USER)