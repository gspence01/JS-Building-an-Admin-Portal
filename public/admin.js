
async function main(){
    let response = await fetch('http://localhost:3001/listBooks');
    let bookList = await response.json();
    bookList.forEach(displayTitle);
}

/*async function save(book){
    let adminInput = document.getElementById('adminInput').value;
    await fetch('http://localhost:3001/updateBook', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'applications/json'
        },
        body: JSON.stringify({
            id: book.id,
            quantity: adminInput
        })
    })
}*/

function displayTitle(book){
    let root = document.getElementById('root');
    
    root.innerHTML += `
        <ul>
            <li>
                <label>
                ${book.title}
                </label>
                <input id = 'adminInput'>
                <button onclick = 'save()'> Save </button>
            </li>
        </ul>
    `
    

}

main();
