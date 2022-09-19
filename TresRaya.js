let board; // global

function createBoard(numRows, numCols) {
    const rows = []

    for (let i = 0; i < numRows; i++) {
        const casillas = []

        for (let j = 0; j < numCols; j++) {
            casillas.push({
                seMuestra : false,
                emoji : "&#x2716;&#xfe0f;"
            })
        }

        rows.push(casillas)
    }

    return rows
}
